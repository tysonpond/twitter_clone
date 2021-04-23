import React from 'react';
import ReactDOM from "react-dom";
import Feed from './panel-center/Feed';
import SidebarLeft from './panel-left/SidebarLeft';
import SidebarRight from './panel-right/SidebarRight';
import './App.css';

const App = () => {
  return (
    <>
      <SidebarLeft />
      <Feed />
      <SidebarRight />
    </>
  )
}

export default App;

ReactDOM.render(<App />, document.getElementById("app"));