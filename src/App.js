// import { Layout } from 'antd';
import React from 'react';

// 1、引入路由
import {HashRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import House from './pages/House/House';
import News from './pages/News/News';
import Layout from './pages/layout';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Layout path='/'>
            <Route exact path='/' component={Home}/>
            <Route path='/house' component={House}/>
            <Route path='/news' component={News}/>
          
          </Layout>
        </Switch>
      </Router>

   </div>
  );
}

export default App;
