import logo from './logo.svg';
import './App.css';

import Section from './components/Section/Section';
import { Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Reactaaa
        </a>
      </header> */}
      {/* <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to={{
              pathname: '/new-post',
              hash: '#submit',
              search: '?quick-submit=true'
            }}>New Post</Link></li>
          </ul>
        </nav>
      </header> */}
      <header>
        <ul>
          <li><Link to="section">Section</Link></li>
        </ul>
      </header>
      <div>
        {/* <Link /> */}
      </div>
      <Switch>
        <Route path="/section/:id" component={Section} />
        <Route path="/section" component={Section} />
        <Route component={Section} />
      </Switch>
    </div>
  );
}

export default App;
