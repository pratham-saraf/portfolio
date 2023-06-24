import { salimovSlider } from "@/src/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";


const fetchSocialPreviewImage = async (username, repoName) => {
  const response = await fetch(`/api/social-preview?username=${username}&repoName=${repoName}`);
  const data = await response.json();
  return data.imageUrl;
};

const fetchRepositories = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}/repos`, {
    headers: {
      Accept: "application/vnd.github.mercy-preview+json",
    },
  });
  const data = await response.json();
  return data;
};

const filterPortfolioRepos = (repos) => {
  return repos.filter((repo) => repo.topics.includes("project"));
};

const fetchRepositoriesWithSocialPreview = async (username) => {
  const repos = await fetchRepositories(username);
  const portfolioProjects = filterPortfolioRepos(repos);

  const detailedPortfolioProjects = await Promise.all(
    portfolioProjects.map(async (repo) => {
      const socialPreviewImageURL = await fetchSocialPreviewImage(username, repo.name);
      return {
        ...repo,
        social_preview_image_url: socialPreviewImageURL,
      };
    })
  );

  return detailedPortfolioProjects;
};

const Portfolio = () => {
  const [portfolioRepos, setPortfolioRepos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const reposWithSocialPreview = await fetchRepositoriesWithSocialPreview("pratham-saraf");
      setPortfolioRepos(reposWithSocialPreview);
    }
    
    fetchData();
    
  }, []);

  // console.log(portfolioRepos);

  return (
    <section
      className="portfolio main-section flex-column-mobile"
      id="portfolio"
    >
      {/* TITLE STARTS */}
      <div className="custom-title">
        {/* MAIN TITLE STARTS */}
        <h3>
          <span>
            <span className="animated-layer fade-in-left-animation fadeInUp wow">
              My Portfolio
            </span>
          </span>
        </h3>
        {/* MAIN TITLE ENDS */}
      </div>
      {/* TITLE ENDS */}
        <Swiper
  {...salimovSlider.portfolio(portfolioRepos.length)}
          className="swiper swiper-portfolio animated-layer fade-in-right-animation fadeInUp wow"
          data-wow-offset={200}
        >
    {portfolioRepos.map((repo) => (
          <SwiperSlide className="single-item swiper-slide" key={repo.id}>
            {/* ITEM MAIN CONTENT STARTS */}
            <div className="main-content">
              <img
                className="img-fluid"
                src={repo.social_preview_image_url}
                alt={`${repo.name} Project`}
              />
          </div>
          {/* ITEM MAIN CONTENT ENDS */}
          {/* ITEM DETAILS STARTS */}
          <div className="details">
            <h4>{repo.name}</h4>
            <div>
              <ul>
                <li>
                  <span>
                    <i className="fa-regular fa-file-lines" /> Project :
                  </span>
                  <span>{repo.description}</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-star" /> Stars :
                  </span>
                  <span>{repo.stargazers_count}</span>
                </li>
                <li>
                  <span>
                    <i className="fa-regular fa-hourglass" /> Created on :
                  </span>
                  <span>
                    {new Date(repo.created_at).toLocaleString("default", {
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fa-solid fa-code-branch" /> Language :
                  </span>
                  <span>{repo.language}</span>
                </li>
              </ul>
            </div>
            <a href={repo.html_url} target="_blank" className="custom-btn">
              <span>
                preview <i className="fa-solid fa-arrow-up-right-from-square" />
              </span>
            </a>
          </div>
          {/* ITEM DETAILS ENDS */}
        </SwiperSlide>
      ))}
      {/* Removed Slider Project and External Link Project */}
      <div className="nav-item next-item animated-btn">
        <span />
      </div>
      <div className="nav-item prev-item animated-btn">
        <span />
      </div>
    </Swiper>
      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};
export default Portfolio;
