import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Logo from "./21042.jpeg";
import Logo1 from "./21043.jpeg";
import Logo2 from "./21045.jpeg";
import Logo3 from "./21046.jpeg";
import Logo4 from "./40367.jpeg";
import {BrowserRouter as Router, Route, Link ,withRouter} from 'react-router-dom';
// import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'antd';
import './App.css';
// import { Carousel } from 'antd';
// import { Card } from 'antd';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';







class Item extends Component {
    render(){
        console.log(this.props);
        console.log(this.props.location.state);
        let current = this.props.location.state;
        return(
            <>
                <h1>{current.name}</h1>
                <h1>{current.ID}</h1>
                <h1>{current.price}</h1>
                <h1>{current.rating}</h1>
            </>
        )
    }
}

export default withRouter(Item);