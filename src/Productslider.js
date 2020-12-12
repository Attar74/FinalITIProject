import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {BrowserRouter as Router, Route, Link ,withRouter} from 'react-router-dom';
import './App.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {
    StarFilled,
    StarTwoTone,
    HeartOutlined  
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

const Productslider = ({products})=> {

    const productList = products.map((product, i) => {
        let rate = (()=>{
            switch(product.rating){
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
                            <Link to={{pathname:"/item", state: product}}>
                                <img class="image-fluid w-100 pImg p-3" src={product.imgSrc} alt=""/>
                            </Link>
                        </div>
                        <Link to={{pathname:"/item", state: product}}>
                            <p class="font-weight-bold text-dark">{product.name}</p>
                        </Link>
                        <p class="font-weight-bold">${product.price}</p>
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
                {productList}
            </Carousel>;
        </div>
    )
}

export default withRouter(Productslider);