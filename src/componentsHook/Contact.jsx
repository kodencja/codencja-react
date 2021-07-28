import React, { useEffect, useCallback } from "react";
import "../css/contact.css";

const Contact = ({ onTitleAnim }) => {
  useEffect(() => {
    console.log("Contact Comp. mounted");
  }, []);

  const textAnimation = useCallback((word) => {
    // console.log("textAnimation Fn");
    const divLetter = [...word].map((letter, ind) => (
      <span
        className="letters-anim"
        key={ind}
        style={{ animationDelay: `${0.1 * ind}s` }}
      >
        {letter}
      </span>
    ));
    return <div className="text-anim">{divLetter}</div>;
  }, []);

  return (
    <>
      {/* <header className="title sec-title text-center">CONTACT</header> */}
      <header className="title sec-title text-center">
        {onTitleAnim("CONTACT")}
      </header>
      <div className="contact-info text-center">
        <div className="contact-please">
          {/* Please feel free to contact with me via: */}
          {textAnimation(
            "Feel\u00A0free\u00A0to\u00A0contact\u00A0with\u00A0me\u00A0via:"
          )}
        </div>
        <div className="contact-address">
          <div>
            <div className="contact-subtitle">E-mail:</div>

            <span>
              <a href="mailto:condencja@gmail.com">
                condencja<i className="icon-mail"></i>gmail.com
              </a>
            </span>
          </div>
          <div>
            <div>
              <i className="icon-edit"></i>
            </div>

            <span>
              <a
                href="https://contactcodenc.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                CONTACT FORM
              </a>
            </span>
          </div>
          <div className="contact-subtitle">
            <i className="icon-location" />
            <div>Cracow, Poland</div>
          </div>

          <div>
            <a
              href="https://github.com/kodencja/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="icon-git-squared"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Contact);
