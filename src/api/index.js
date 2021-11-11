import axios from 'axios';
import get from 'lodash/get';

const ttfHeaders = {
    Accept: 'application/vnd.api+json',
    'Content-Type': 'application/vnd.api+json',
    'X-Source-Origin': 'restlessnit.es'
}

const rnHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json; charset=utf-8'
}

export const setCustomHeader = response => {
    const guestHeaderValue = get(response, 'headers.authorization-guest')

    if (guestHeaderValue) {
        localStorage.setItem('auth_guest_token', guestHeaderValue)
        ttfHeaders['Authorization-Guest'] = guestHeaderValue
    }
}

export const publicRequest = axios.create({
    baseURL: `https://preview1.ttf.fluxtech.me/api`,
    headers: ttfHeaders
})

export const privateRequest = axios.create({
    baseURL: `https://preview1.ttf.fluxtech.me/api`,
    headers: rnHeaders
})

export function getTickets(id) {
    const response = publicRequest.get(`v1/event/${id}/tickets/`).catch(error => {
        throw error
    })
    return response;
}

export const addToCart = (id, data) => {
    const res = publicRequest.post(`v1/event/${id}/add-to-cart/`, { data })
    return res;
}