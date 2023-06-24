import React, { useEffect, useState } from "react";
import Link from "next/link";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/medium-feed");
      const feed = await response.json();
      setPosts(feed.items.slice(0, 3)); // Display top 5 latest posts
    };
    fetchPosts();
  }, []);


  console.log(posts);


  return (
    <section className="blog main-section flex-column-mobile" id="blog">
     {/* TITLE STARTS */}
      {/* ... */}
      {/* TITLE ENDS */}
      {/* LATEST POSTS STARTS */}
      <div className="latestposts flex-column-mobile">
        {posts.map((post, index) => (
          console.log(post),
          <div
            key={index}
            className="animated-layer fade-in-right-animation fadeInUp wow"
          >
            <Link href={post.link} legacyBehavior passHref>
              <a target="_blank" rel="noopener noreferrer">
                <span className="img-holder">
                  {/* You might need to find a way to display post images */}
                  <img src="assets/blog/blog-post-1.jpg" alt="" />
                </span>
                <div className="content">
                  {/* get categorofy if not then set it as machine learning */}
                  <span className="category">{post.categories[0] ?? "Machine Learning"}</span>
                  {/* get the title of the post */}
                  <span className="title">{post.title}</span>
                  <p>
                    {/* get only 13 words from post content:encodedSnippet */}
                    {post["content:encodedSnippet"].split(" ").slice(0, 12).join(" ")}...
                  </p>
                  <div className="meta d-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="fa-regular fa-calendar" />
                      <span>{new Date(post.pubDate).toLocaleDateString()}</span>
                    </div>
                    <div className="d-flex align-items-center">
                      {/* Comments count is not available in the RSS feed */}
                      <i className="fa-regular fa-comments" />
                      <span>17 comments</span>
                    </div>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
      {/* LATEST POSTS ENDS */}
    </section>
  );
};
export default Blog;
