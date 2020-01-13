import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import PostDetail from "../components/posts/postDetail/PostDetail";
import Home from "../components/home/Home";
import PostByDate from "../components/postByDate/PostByDate";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/archival" component={PostByDate} />
        <Route exact path="/posts" component={Home} />
        <Route exact path="/">
          <Redirect to="/posts" />
        </Route>
        <Route exact path="/posts/:postId" component={PostDetail} />
      </Switch>
    </div>
  );
};
export default Routes;
