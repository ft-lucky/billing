import { useState, useEffect } from 'react';
import { getTickets, addToCart, setCustomHeader } from '../../api';
import _sortBy from 'lodash/sortBy';
import get from 'lodash/get';
import _has from 'lodash/has';
import some from 'lodash/some';
import find from 'lodash/find';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import './style.scss';

const getTicketSelectOptions = (maxCount = 10, minCount = 1, multiplier = 1) => {
    let options = [{ label: 0, value: 0 }]
    for (let i = minCount; i <= Math.min(50, maxCount); i += multiplier) {
        options.push({ label: i, value: i })
    }
    return options
};

const computeTierStateLabel = (tier, prevTier, selectedTickets, handleTicketSelect) => {
    const soldOutMessage = tier.soldOutMessage ? tier.soldOutMessage.toUpperCase() : 'SOLD OUT'
    const isSalesClosed = !tier.salesStarted || tier.salesEnded || !_has(tier, 'maxQuantity')
    const options = getTicketSelectOptions(tier.maxQuantity, tier.minQuantity, tier.multiplier)

    const onSaleContent = isSalesClosed ? null : (
        <div className='get-tickets'>
            <Box className='get-tickets__selectbox'>
                <FormControl fullWidth>
                    <NativeSelect
                        inputProps={{
                            name: 'count',
                            id: 'uncontrolled-native',
                        }}
                        value={selectedTickets[tier.id] ? selectedTickets[tier.id] : 0}
                        onChange={handleTicketSelect}
                    >
                        {options.map((option, index) => (
                            <option key={index}>{option.value}</option>
                        ))}
                    </NativeSelect>
                </FormControl>
            </Box>
        </div>
    )

    if (tier.sold_out || !tier.displayTicket || tier.soldOut) return soldOutMessage
    if (!+tier.cost && !+tier.price) return 'FREE'
    if (tier.displayTicket) return onSaleContent
    if (prevTier.in_stock) return 'SOON'

    return ''
};

const renderTiers = (boxOffice, selectedTickets, handleTicketSelect) => {
    const sortedBoxOfiice = _sortBy(boxOffice, 'sortOrder')
    const primaryTiers = sortedBoxOfiice.map((tier, i, arr) => {
        const isSoldOut = tier.sold_out || !tier.displayTicket || tier.soldOut
        const ticketSelect = (event) => {
            const value = event.target.value;
            handleTicketSelect(tier.id, value)
        }

        return (
            <div
                key={tier.id || tier.name}
                className={`event-detail__tier ${isSoldOut ? 'disabled' : ''}`}
            >
                <div className="event-detail__tier-name">{tier.displayName || tier.name}</div>
                <div className="event-detail__tier-status">
                    <div className="event-detail__tier-price">
                        {'$'}
                        {(+tier.cost || +tier.price).toFixed(2)}
                    </div>
                    <div className="event-detail__tier-state" style={{ minWidth: 55 }}>
                        {computeTierStateLabel(tier, arr[i - 1], selectedTickets, ticketSelect)}
                    </div>
                </div>
            </div>
        )
    })
    return primaryTiers
};

const GetTickets = ({ eventId }) => {
    const [selectedTickets, setSelectedTickets] = useState({})
    const [tickets, setTickets] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        async function getTicketsApi() {
            try {
                setIsLoading(true);
                const response = await getTickets(eventId);
                if (response.data.success) {
                    setCustomHeader(response)
                    const attributes = get(response, 'data.data.attributes')
                    const tickets = Object.values(attributes)
                    setTickets(tickets);
                }
            } catch (e) {
                console.log('e', e)
            } finally {
                setIsLoading(false);
            }
        }
        getTicketsApi();
    }, [])

    const handleTicketSelect = (key, value) => {
        setSelectedTickets(prevState => {
            if (Object.keys(prevState)[0] !== key && !value) {
                return prevState
            } else {
                return {
                    [key]: value
                }
            }
        })
    }

    const handleBook = async () => {
        const ticket = find(tickets, item => selectedTickets[item.id] > 0);
        const optionName = get(ticket, 'optionName');
        const ticketId = get(ticket, 'id');
        const ticketQuantity = +selectedTickets[ticket.id];

        const data = {
            attributes: {
                alternative_view_id: null,
                product_cart_quantity: ticketQuantity,
                product_options: {
                    [optionName]: ticketId
                },
                product_id: eventId,
                ticket_types: {
                    [ticketId]: {
                        product_options: {
                            [optionName]: ticketId,
                            ticket_price: ticket.price
                        },
                        quantity: ticketQuantity
                    }
                }
            }
        }

        try {
            const result = await addToCart(eventId, data);
            if (result.status === 200) {
            }
        } catch (e) {
            console.log('e', e)
        }
    }

    const isAllTicketsSoldOut = !some(tickets, item => !(item.sold_out || item.soldOut))

    return isLoading ? <p>Loading ....</p> : (
        <div className='get-tickets-page'>
            {renderTiers(tickets, selectedTickets, handleTicketSelect)}
            {
                !isAllTicketsSoldOut &&
                <div
                    onClick={handleBook}
                    style={{ background: 'red', marginTop: '25px' }}
                >
                    GET TICKETS
                </div>
            }
        </div>
    )
};

export default GetTickets;