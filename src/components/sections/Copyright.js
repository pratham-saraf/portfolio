const Copyright = () => {
  return (
    <section className="copyright">
      <img
        alt=""
        className="z-1 hide-mobile"
        src="assets/separator-copyright.png"
      />
      <div>
        <span>© {new Date().getFullYear()} Pratham Saraf</span>
        {/* <span>
          Designed By{" "}
          <a
            target="_blank"
            href="https://themeforest.net/user/Codeefly/portfolio"
          >
            Codeefly
          </a>
        </span> */}
        <ul>
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
    </section>
  );
};
export default Copyright;
