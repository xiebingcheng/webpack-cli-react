// 页面组件

import React from 'react';
import ReactDOM from 'react-dom';

import './home.css'

class Homeindex extends React.Component {
    render() {
        return (
            <div>
                <h1 className='homeh'>这个是homeindex的文字!</h1>
                <div>这下面两句话是 来着home组件的.</div>
                <p>而且已经用上了react提供的react-router-dom的组件,就是react的路由组件.</p>

            </div>

        );
    }
}

//暴露出这个方法,这个组件.
export default Homeindex