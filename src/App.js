import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Create from './components/create/Create';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import BlogDetails from './components/blogDetails/BlogDetails';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route exact path="/create">
              <Create/>
            </Route>
            <Route exact path="/blogs/:id">
              <BlogDetails/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
