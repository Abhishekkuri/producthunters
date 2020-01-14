import React, { useState, useEffect } from "react";
import DatePicker from "react-date-picker";
import Axios from "axios";
import { Link } from "react-router-dom";
import { isEmpty } from "../genericFunctions/GenericFunctions";
import "../../App.css";
import "../posts/Posts.css";
import "./PostByDate.css";

function PostByDate() {
  const [date, setDate] = useState(new Date());
  const [posts, setPosts] = useState({});

  let onChange = date => {
    setPosts({});
    setDate(date);
  };

  const loadPosts = async () => {
    const headers = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer zBtDDkqEa-XMw7zPmgDWpQWD7pVYrcddX8UcfR2U-2U"
      }
    };
    const dateToPass =
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    await Axios.get(
      `https://www.producthunt.com/v1/posts/?day=${dateToPass}`,
      headers
    )
      .then(
        response => {
          updatePosts(response.data.posts);
        },
        error => {
          console.log(error.response);
          return error;
        }
      )
      .catch(error => {
        console.log(error.response);
      });
  };

  useEffect(() => {
    loadPosts();
  }, [date]);

  const updatePosts = responsePosts => {
    setPosts(responsePosts);
  };

  return (
    <div className="temp">
      <div>
        <h3 className="post-header">Archival Posts</h3>
      </div>
      <div className="activeDate">
        <span>Pick a Date : </span>
        <DatePicker className="calendar" onChange={onChange} value={date} />
      </div>
      {isEmpty(posts) ? (
        <div className="loader"></div>
      ) : (
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
                <div className="post-likes">
                  <i className="  fa fa-thumbs-up fa-3x social">
                    {post.votes_count}
                  </i>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default PostByDate;
