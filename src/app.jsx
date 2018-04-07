import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'


import Layout from 'component/layout/index.jsx'
//页面组件
import Home from 'page/home/index.jsx'


class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <p>app.jsx的文字</p>
                </div>
                <Router>
                    {/*由于只能在Router组件中存在一个子组件,所以用户switch包裹住,
                    这个标签的用处是只匹配第一个成功的路径,便不再匹配.*/}
                    <Layout>
                        <Switch>
                            <Route exact path="/" component={Home}/>

                        </Switch>
                    </Layout>

                </Router>

            </div>

        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);