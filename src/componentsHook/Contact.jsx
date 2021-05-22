import React from "react";
import "../css/contact.css";

const Contact = React.forwardRef((props, ref) => {
  return (
    <div className="contact sec-cont-h" ref={ref}>
      <header className="title sec-title text-center">CONTACT</header>
      <div className="contact-info text-center">
        <p className="contact-please">
          Please feel free to contact with me via:
        </p>
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
          </div>
          <span>Cracow, Poland</span>
        </div>
        {/* <div style={{ clear: "both" }}></div> */}
      </div>
    </div>
  );
});

export default Contact;
