import { useRef } from "react";
import "./style.scss";
import SVG from "react-inlinesvg";

const defaultSvg =
  "https://img.icons8.com/ios-filled/50/000000/facebook-new.svg";

const ConfirmationPage = ({ referralPromotions, icons, shareLink }) => {
  const inputRef = useRef(null);

  return (
    <div className='confirmation-page'>
      <p className='title'>Your Tickets are Confirmed!</p>
      <div className='share-message-section'>
        <span className='main'>Your tickets have been emailed to you</span>
        <span className='helper'>Please bring them with you to the event</span>
      </div>
      <div className='referral_text_image_section'>
        <div className='referral_text_section'>
          <div className='referral_title_text'>
            Your ticket can become
            <span className='strong-text'> cheaper </span>
            or even
            <span className='strong-text'> FREE!</span>
          </div>
          <div className='referral_text'>
            <span className='strong-text'> Invite friends </span>
            and we'll refund up to
            <span className='strong-text'> 100% </span>
            of your ticket money, if they buy tickets as well!
          </div>
        </div>
        <img
          src='https://preview1.ttf.fluxtech.me/uploaded/thumbnails/db_file_img_123847_400xauto.jpg'
          alt='No Data'
        />
      </div>
      <div className='share_wrapper'>
        <div className='share_section'>
          <div className='invitation_section'>
            <div className='invitation_title'>
              How do you invite your friends?
            </div>
            <div className='share_buttons'>
              <div className='sharing-btn share-by-link'>
                <h5 className='sharing-btn share-by-link label'>
                  Send them this link:
                </h5>
                <div
                  className='share-btn-inner share-by-link-copy'
                  onClick={() =>
                    navigator.clipboard.writeText(inputRef.current.value)
                  }
                >
                  <input
                    ref={inputRef}
                    className='share-input'
                    value={
                      shareLink
                    }
                    disabled={true}
                  />
                  <div className='svg_wrapper'>
                    <SVG
                      className='share-icon'
                      component='span'
                      width='20px'
                      height='20px'
                      fill='#FFF'
                      src={icons.clipboard || defaultSvg}
                    />
                  </div>
                </div>
              </div>
              <div className='convenient_buttons sharing-btn'>
                or use one of these convenient buttons:
              </div>
              <div className='social-media-btns'>
                <div className='sharing-btn'>
                  <div className='share-btn-inner' onClick={() => {}}>
                    <SVG
                      className='share-icon'
                      component='span'
                      width='40px'
                      height='40px'
                      fill='#FFF'
                      src={icons.facebook || defaultSvg}
                    />
                    <span className='share-text'>
                      Share on
                      <br /> Facebook
                    </span>
                  </div>
                </div>
                <div className='sharing-btn twitter-share-button'>
                  <div className='share-btn-inner' onClick={() => {}}>
                    <SVG
                      className='share-icon'
                      component='span'
                      width='40px'
                      height='40px'
                      fill='#FFF'
                      src={icons.twitter || defaultSvg}
                    />
                    <span className='share-text'>
                      Tweet to your
                      <br /> Followers
                    </span>
                  </div>
                </div>
                <div className='sharing-btn messenger-share-button'>
                  <div className='share-btn-inner' onClick={() => {}}>
                    <SVG
                      className='share-icon'
                      component='span'
                      width='40px'
                      height='40px'
                      fill='#FFF'
                      src={icons.messenger || defaultSvg}
                    />
                    <span className='share-text'>
                      Message friends on
                      <br /> Facebook
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='pricing-section'>
          <div className='invitation_title'>How much cheaper?</div>
          {referralPromotions.map((pricing) => {
            const isFree = pricing.price === "FREE";
            return (
              <div
                key={pricing.id}
                className={`pricing-section_wrapper ${isFree && "free_price"}`}
              >
                <div className='pricing-section_label'>
                  {pricing.label || "Your ticket is currently"}
                  {pricing.subLabel && (
                    <div className='pricing-section_sublabel'>
                      {pricing.subLabel || "Your ticket becomes"}
                    </div>
                  )}
                </div>
                <div className='pricing-section_price'> {pricing.price}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
