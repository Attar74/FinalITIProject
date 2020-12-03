import React from 'react';
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







const Ninjas = ({ninjas, deleteNinja})=> {

    const ninjaList = ninjas.map((ninja, i) => {
        const imgLogos = [Logo, Logo1, Logo2, Logo3, Logo4];
    return (true) ? (    
                <div class="mb-5 m-3">
                  
                </div>
        ) : null;
    })
    
    
    return(
        <>
                {ninjaList}
        </>
    )
}

export default withRouter(Ninjas);