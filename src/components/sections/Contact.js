const Contact = () => {
  return (
    <section className="contact main-section flex-column-mobile" id="contact">
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              Get in touch
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
      {/* CONTACTS STARTS */}
      <div className="boxes">
        <div>
          {/* CONTACT ITEM STARTS */}
          <div className="animated-layer fade-in-down-animation fadeInUp wow">
            <i className="fa fa-phone" />
            <p>
              <span className="small-text">phone</span>
              <a href="tel:+918982597809">+91 8982597809</a>
            </p>
          </div>
          {/* CONTACT ITEM ENDS */}
          {/* CONTACT ITEM STARTS */}
          <div className="animated-layer fade-in-down-animation fadeInUp wow">
            <i className="fa fa-envelope" />
            <p>
              <span className="small-text">email</span>
              <a href="mailto:prathammsaraf@gmail.com">prathammsaraf@gmail.com</a>
            </p>
          </div>
          {/* CONTACT ITEM ENDS */}
        </div>
        <div>
            {/* CONTACT ITEM STARTS */}
            <div className="animated-layer fade-in-up-animation fadeInUp wow">
            <i className="fa fa-location-dot" />
            <p>
              <span className="small-text">address</span>
              India
            </p>
          </div>
          {/* CONTACT ITEM ENDS */}
          {/* CONTACT ITEM STARTS */}
          <div className="animated-layer fade-in-up-animation fadeInUp wow">
            <i className="fa fa-share-nodes" />
            <span className="small-text">follow me</span>
            <ul className="social">
              <li>
                <a href="https://github.com/pratham-saraf" target="_blank">
                  <i className="fa-brands fa-github" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/saraf183" target="_blank">
                  <i className="fa-brands fa-twitter" />
                </a>
              </li>
              <li>
                <a href="https://www.kaggle.com/prathamsaraf1389" target="_blank">
                  <i className="fa-brands fa-kaggle" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/pratham-saraf/" target="_blank">
                  <i className="fa-brands fa-linkedin" />
                </a>
              </li>
              <li>
                <a href="https://pratham-saraf.medium.com/" target="_blank">
                  <i className="fa-brands fa-medium" />
                </a>
              </li>
            </ul>
          </div>
          {/* CONTACT ITEM ENDS */}
        </div>
      </div>
      {/* CONTACTS ENDS */}
      {/* <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      /> */}
    </section>
  );
};
export default Contact;
