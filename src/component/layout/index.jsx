

//因为Layout在app.jsx层级关系,此组件等于是根元素,所以,全局css要在此使用
import React from 'react'


class Layout extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div id="wrapper">
                {/*导航组件*/}

                {/*<TopNav />*/}
                {/*<SideNav/>*/}

                {/*Layout组件包含的子组件*/}
                {this.props.children}
            </div>
        );
    }

}

export default Layout