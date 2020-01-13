import React from "react";
import { Link } from "react-router-dom";
import "./Posts.css";

const Posts = props => {
  const posts = props.posts;
  return (
    <div>
      <div >
        <h3 className="post-header">Latest Posts</h3>
      </div>
      <div>
        {posts.map(post => {
          return (
            <div key={post.id} className="post-container">
              <h4 className="post-name">
                <div>
                  <Link to={`posts/${post.id}`}>{post.name}</Link>
                </div>
              </h4>
              <div className="post-tagline">{post.tagline}</div>
              <div className="post-likes">Likes : {post.votes_count}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
