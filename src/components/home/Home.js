import React, { Component } from "react";
import axios from "axios";
import Posts from "../posts/Posts";
import "./Home.css";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoading: false,
      error: []
    };
  }
  componentDidMount() {
    this.setState({
      isLoading: true
    });
    const headers = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer zBtDDkqEa-XMw7zPmgDWpQWD7pVYrcddX8UcfR2U-2U"
      }
    };
    axios
      .get("https://www.producthunt.com/v1/posts", headers)
      .then(
        response => {
          this.setState({ posts: response.data.posts, isLoading: false });
        },
        error => {
          console.log(error);
        }
      )
      .catch(error => {
        this.setState({
          isLoading: false
          //   error: _.values(error)
        });
      });
  }
  render() {
    return (
      <div className="postBox">
        {this.state.isLoading ? (
          <div className="loader"></div>
        ) : (
          <Posts posts={this.state.posts} />
        )}
      </div>
    );
  }
}

export default Home;
