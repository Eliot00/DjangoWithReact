import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ArticleList from "./ArticleList";
import About from "./About";
import Nav from "./Nav";
import ArticleDetail from "./ArticleDetail";

function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/articles/:articleId">
            <ArticleDetail />
          </Route>
          <Route path="/">
            <ArticleList />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
