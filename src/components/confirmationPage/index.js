import SVGInline from 'react-svg-inline'
import './style.scss';

const ConfirmationPage = () => {
    return (
        <div className='confirmation-page'>
            <p className='title'>Your Tickets are Confirmed!</p>
            <div className='share-message-section'>
                <span className='main'>Your tickets have been emailed to you</span>
                <span className='helper'>Please bring them with you to the event</span>
            </div>
            <div className="referral_text_image_section">
                <div className="referral_text_section">
                    <div className="referral_title_text">
                        Your ticket can become
                        <span className='strong-text'> cheaper </span>
                        or even
                        <span className='strong-text'> FREE!</span>
                    </div>
                    <div className="referral_text">
                        <span className="strong-text"> Invite friends </span>
                        and we'll refund up to
                        <span className="strong-text"> 100% </span>
                        of your ticket money, if they buy tickets as well!
                    </div>
                </div>
                <img src="https://preview1.ttf.fluxtech.me/uploaded/thumbnails/db_file_img_123847_400xauto.jpg" alt='No Data' />
            </div>
            <div className="share_section">
                <div className="invitation_section">
                    <div className="invitation_title">How do you invite your friends?</div>
                    <div className="share_buttons">
                        <div className='sharing-btn share-by-link'>
                            <h5>Send them this link:</h5>
                            <div className="share-btn-inner share-by-link-copy">
                                <input className="share-input" value={'https://restlessnit.es/events/iza-livemusic10dec2020?ttf_r=6'} disabled={true} />
                                <div>
                                    <SVGInline
                                        className="share-icon"
                                        component="span"
                                        width='40px'
                                        height='40px'
                                        fill="#F08057"
                                        // svg={require('assets/svg/icon/facebook-share.svg')}
                                        svg={''}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="convenient_buttons">or use one of these convenient buttons:</div>
                        <div className='sharing-btn'>
                            <span className="share-btn-inner" onClick={() => {}}>
                                <SVGInline
                                    className="share-icon"
                                    component="span"
                                    width='40px'
                                    height='40px'
                                    fill="#F08057"
                                    // svg={require('src/assets/facebook-share.svg')}
                                    svg={''}
                                />
                                <span className="share-text">
                                    Share on
                                    <br /> Facebook
                                </span>
                            </span>
                        </div>
                        <div className='sharing-btn twitter-share-button'>
                            <span className="share-btn-inner" onClick={() => {}}>
                                <SVGInline
                                    className="share-icon"
                                    component="span"
                                    width='40px'
                                    height='40px'
                                    fill="#F08057"
                                    // svg={require('assets/svg/icon/twitter-share.svg')}
                                    svg={''}
                                />
                                <span className="share-text">
                                    Tweet to your
                                    <br /> Followers
                                </span>
                            </span>
                        </div>
                        <div className='sharing-btn messenger-share-button'>
                            <span className="share-btn-inner" onClick={() => {}}>
                                <SVGInline
                                    className="share-icon"
                                    component="span"
                                    width='40px'
                                    height='40px'
                                    fill="#F08057"
                                    // svg={require('assets/svg/icon/facebook-share.svg')}
                                    svg={''}
                                />
                                <span className="share-text">
                                    Message friends on
                                    <br /> Facebook
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmationPage;