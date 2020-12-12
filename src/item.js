import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {BrowserRouter as Router, Route, Link ,withRouter} from 'react-router-dom';
import './item.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Logo from "./21042.jpeg";
import Logo1 from "./21043.jpeg";
import Logo2 from "./21045.jpeg";
import Logo3 from "./21046.jpeg";
import Logo4 from "./40367.jpeg";
import creator from "./creator.png";
import {
    StarFilled,
    StarTwoTone,  
  } from '@ant-design/icons';

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

class Item extends Component {
    current = this.props.location.state;
    imgLogos = [Logo, Logo1, Logo2, Logo3, Logo4, Logo, Logo1, Logo2, Logo3, Logo4];

    rate = (()=>{
        switch(this.current.rating){
            case 1: 
                return <span> 
                            <StarFilled style={{ fontSize: '16px', color: "orange" }}/>
                            <StarTwoTone twoToneColor="orange"/>
                            <StarTwoTone twoToneColor="orange"/>
                            <StarTwoTone twoToneColor="orange"/>
                            <StarTwoTone twoToneColor="orange"/> 
                        </span>;
            break;
            case 2:
                return <span> 
                            <StarFilled style={{ fontSize: '16px', color: "orange" }}/>
                            <StarFilled style={{ fontSize: '16px', color: "orange" }}/>
                            <StarTwoTone twoToneColor="orange"/>
                            <StarTwoTone twoToneColor="orange"/>
                            <StarTwoTone twoToneColor="orange"/> 
                         </span>;
            break;
            case 3:
                return <span> 
                            <StarFilled style={{ fontSize: '16px', color: "orange" }}/>
                            <StarFilled style={{ fontSize: '16px', color: "orange" }}/>
                            <StarFilled style={{ fontSize: '16px', color: "orange" }}/>
                            <StarTwoTone twoToneColor="orange"/>
                            <StarTwoTone twoToneColor="orange"/> 
                        </span>;
            break;
            case 4:
                return <span> 
                            <StarFilled style={{ fontSize: '16px', color: "orange" }}/>
                            <StarFilled style={{ fontSize: '16px', color: "orange" }}/>
                            <StarFilled style={{ fontSize: '16px', color: "orange" }}/>
                            <StarFilled style={{ fontSize: '16px', color: "orange" }}/>
                            <StarTwoTone twoToneColor="orange"/> 
                        </span>;
            break;
            case 5:
                return <span> 
                            <StarFilled style={{ fontSize: '16px', color: "orange" }}/>
                            <StarFilled style={{ fontSize: '16px', color: "orange" }}/>
                            <StarFilled style={{ fontSize: '16px', color: "orange" }}/>
                            <StarFilled style={{ fontSize: '16px', color: "orange" }}/>
                            <StarFilled style={{ fontSize: '16px', color: "orange" }}/>
                        </span>;
            break;
        }
  
    })

    productList = this.imgLogos.map((img) => {
    return (true) ? (    
                <div class="mb-5 m-0">
                    <div class="p-3">
                        <div class="border border-1">
                            <img class="image-fluid w-100 pImg p-5" src={img} alt=""/>
                        </div>
                    </div>
                </div>
        ) : null;
    })

                        
    render(){
        return(
            <>
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
                    {this.productList}
                </Carousel>
                <div class="col-12 container mt-3">
                    <img src={creator} />
                    <p class="font-weight-bold mt-2">{this.current.name}</p>
                    <div class="rates row col-12 container">
                        <p class="align-self-center pr-3">{this.rate()}</p>
                        <p class="align-self-center">n Reviewrs</p>
                    </div>
                    <p class="font-weight-bold mt-2">${this.current.price}</p>
                    <span class="text-success">Avaliabel now</span>
                    <button class="btn add col-12 p-2" >Add to Bag</button>
                    <button class="btn wish col-12 text-left p-0 pt-3" >
                        <i class="far fa-heart pr-2"></i>
                        <span class="align-self-center">Add to Wishlist</span>
                    </button>
                </div>
            </>
        )
    }
}

export default withRouter(Item);