import React, { useState, useEffect } from "react";
import axios from "axios";

import "../../../App.css";
import "./PostDetail.css";
import { isEmpty } from "../../genericFunctions/GenericFunctions";

const PostDetail = props => {
  const postId = props.match.params.postId;
  const [post, setPost] = useState({});

  const loadPost = async () => {
    const headers = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer zBtDDkqEa-XMw7zPmgDWpQWD7pVYrcddX8UcfR2U-2U"
      }
    };
    await axios
      .get(`https://www.producthunt.com/v1/posts/${postId}`, headers)
      .then(
        response => {
          updatepost(response.data.post);
        },
        error => {
          console.log(error);
          return error;
        }
      )
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    loadPost();
  }, [postId]);

  const updatepost = responsePost => {
    setPost(responsePost);
  };

  return (
    <div>
      <h3 className="comment-header">Comments</h3>
      {isEmpty(post) ? (
        <div className="loader"></div>
      ) : (
        post.comments.slice(0, 5).map(comment => {
          return (
            <>
              <div className="commentBox" key={comment.id}>
                <div className="commentText">{comment.body}</div>
                <div className="commentUser">BY {comment.user.name}</div>
              </div>
            </>
          );
        })
      )}
    </div>
  );
};

export default PostDetail;
