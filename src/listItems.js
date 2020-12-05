import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Logo from "./21042.jpeg";
import Logo1 from "./21043.jpeg";
import Logo2 from "./21045.jpeg";
import Logo3 from "./21046.jpeg";
import Logo4 from "./40367.jpeg";
import {BrowserRouter as Router, Route, Link ,withRouter} from 'react-router-dom';
import './App.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
    StarOutlined,
    StarFilled,
    StarTwoTone,
    HeartTwoTone,
    HeartOutlined  
  } from '@ant-design/icons';
import { render } from '@testing-library/react';
import WishList from './wishList';


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1200 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1200, min: 800 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const ListItems = ({ninjas, deleteNinja})=> {

    const ninjaList = ninjas.map((ninja, i) => {
        const imgLogos = [Logo, Logo1, Logo2, Logo3, Logo4, Logo, Logo1, Logo2, Logo3, Logo4];

        let rate = (()=>{
            switch(ninja.rating){
                case 1: 
                    return <p> 
                                <StarFilled style={{ fontSize: '16px', color: "orange" }}/>
                                <StarTwoTone twoToneColor="orange"/>
                                <StarTwoTone twoToneColor="orange"/>
                                <StarTwoTone twoToneColor="orange"/>
                                <StarTwoTone twoToneColor="orange"/> 
                            </p>;
                break;
                case 2:
                    return <p> 
                                <StarFilled style={{ fontSize: '16px', color: "orange" }}/>
                                <StarFilled style={{ fontSize: '16px', color: "orange" }}/>
                                <StarTwoTone twoToneColor="orange"/>
                                <StarTwoTone twoToneColor="orange"/>
                                <StarTwoTone twoToneColor="orange"/> 
                             </p>;
                break;
                case 3:
                    return <p> 
                                <StarFilled style={{ fontSize: '16px', color: "orange" }}/>
                                <StarFilled style={{ fontSize: '16px', color: "orange" }}/>
                                <StarFilled style={{ fontSize: '16px', color: "orange" }}/>
                                <StarTwoTone twoToneColor="orange"/>
                                <StarTwoTone twoToneColor="orange"/> 
                            </p>;
                break;
                case 4:
                    return <p> 
                                <StarFilled style={{ fontSize: '16px', color: "orange" }}/>
                                <StarFilled style={{ fontSize: '16px', color: "orange" }}/>
                                <StarFilled style={{ fontSize: '16px', color: "orange" }}/>
                                <StarFilled style={{ fontSize: '16px', color: "orange" }}/>
                                <StarTwoTone twoToneColor="orange"/> 
                            </p>;
                break;
                case 5:
                    return <p> 
                                <StarFilled style={{ fontSize: '16px', color: "orange" }}/>
                                <StarFilled style={{ fontSize: '16px', color: "orange" }}/>
                                <StarFilled style={{ fontSize: '16px', color: "orange" }}/>
                                <StarFilled style={{ fontSize: '16px', color: "orange" }}/>
                                <StarFilled style={{ fontSize: '16px', color: "orange" }}/>
                            </p>;
                break;
            }
        })
       
    return (true) ? (    
                <div class="row col-6 col-lg-4 border border-1 m-0">
                    <div class="p-3">
                        <div class="">
                            <span class="love">
                            </span>
                            <Link to={{pathname:"/item", state: ninja}}>
                                <img class="image-fluid w-100 pImg pImg2" src={imgLogos[i]} alt=""/>
                            </Link>
                        </div>
                        <Link to={{pathname:"/item", state: ninja}}>
                            <p class="font-weight-bold text-dark">{ninja.name}</p>
                        </Link>
                        <p class="">{ rate() }</p>
                        <p class="font-weight-bold">${ninja.price}</p>
                        <button class="btn add col-12 p-2" >Add to Bag</button>
                        <button class="btn wish col-12 text-left p-0 pt-2" >
                            <i class="far fa-heart pr-2"></i>
                            <span class="align-self-center">Add to Wishlist</span>
                        </button>

                    </div>
                </div>
        ) : null;
    })
    
    
    return(
        <>
            <div class="row offset-lg-4 col-lg-8 col-12 p-5 m-xs-0">
                {ninjaList}
            </div>
        </>
    )
}

export default withRouter(ListItems);