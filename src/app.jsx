import React from 'react';
import ReactDOM from 'react-dom';

import Home from 'page/home/index.jsx'



class App extends React.Component{
    render(){
       return(
           <div>
               <h1>Hello,react 主页 哈哈 成功配置</h1>
               <Home/>
           </div>

       );
    }
}

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);