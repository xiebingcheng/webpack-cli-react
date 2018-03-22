// 页面组件

import React from 'react';
import ReactDOM from 'react-dom';

import './home.css'

class Homeindex extends React.Component {
    render() {
        return (
            <div>
                <h1 className='homeh'>这个是homeindex的文字!</h1>
                <div>试试这个 from home组件过来.</div>

            </div>

        );
    }
}

//暴露出这个方法,这个组件.
export default Homeindex