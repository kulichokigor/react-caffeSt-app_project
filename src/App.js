import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from './components/pages/home-page';
// import MenuDay from './components/pages/menu_day_buffet';
import Admin from './page-admin-securitu/administrator-page';
import Furshet from '../src/components/pages/furshet-menu';

class App extends React.Component{

  render(){
    return(
    <div>
      <Switch>
        <Route path='/' exact component={Home} />
        {/* <MenuDay/> */}
        <Route path='/administrator'  component={Admin} />
        <Route path='/furshet' component={Furshet} />
      </Switch>
    </div>
    )
  }
}

export default App;
