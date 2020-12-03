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
import {
    StarOutlined,
    StarFilled,
    StarTwoTone,
    HeartTwoTone,
    HeartOutlined  
  } from '@ant-design/icons';
import { render } from '@testing-library/react';




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

const wishList = ({ninjas, deleteNinja})=> {

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

            // let filled = `<StarFilled style={{ fontSize: '16px', color: "orange" }}/>`;
            // let empty = `<StarTwoTone twoToneColor="orange"/>`;
            // let res = ``;
            // for(let i = 0; i < ninja.rating; i++){
            //     res += filled
            // }
            // console.log(res);
            // render (){
            //     return(
            //         <></>
            //     )
            // }

            
        })
       
    return (true) ? (    
                <div class="mb-5 m-0">
                    <div class="p-3">
                        <div class="border border-1">
                            <span class="love">
                                <HeartOutlined  style = {{fontSize: '18px', color: 'darkblue', backgroundColor: "#eee", margin: '2px', padding:'1px'}}/>
                            </span>
                            <Link to={{pathname:"/item", state: ninja}}>
                                <img class="image-fluid w-100 pImg p-3" src={imgLogos[i]} alt=""/>
                            </Link>
                        </div>
                        <Link to={{pathname:"/item", state: ninja}}>
                            <p class="font-weight-bold text-dark">{ninja.name}</p>
                        </Link>
                        <p class="font-weight-bold">${ninja.price}</p>
                        <p class="">{ rate() }</p>
                        <button class="btn add col-12" >Add to Bag</button>
                    </div>
                </div>
        ) : null;
    })
    
    
    return(
        <div class="m-5 p-5">
            <h1 className="m-2">Featured sets</h1>  
            <Carousel responsive={responsive}
                        swipeable={true}
                        draggable={true}
                        showDots={true}
                        ssr={false} // means to render carousel on server-side.
                        infinite={false}
                        //autoPlaySpeed={1000}
                        keyBoardControl={true}
                        //customTransition="all 1"
                        //transitionDuration={500}
                        //containerClass="carousel-container"
                        //removeArrowOnDeviceType={["tablet", "mobile"]}
                        //dotListClass="custom-dot-list-style"
                        //itemClass="carousel-item-padding-40-px"
                        slidesToSlide = "2"
                        >
                {ninjaList}
            </Carousel>;
        </div>
    )
}

export default withRouter(wishList);