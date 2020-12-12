import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import VipLogo from "./logo512.png";
import HomeLego from "./Quicklink_Selected_Home.png";
import PointsLego from "./Quicklink_Get_More_Points.png";
import VIP_AccountLego from "./Quicklink_VIP_Account.png";
import Digital_CardLego from "./Quicklink_Digital_Card.png";
import star from "./star.jpg";
import lock from "./lock.jpg";
import LEGOLAND from "./LEGOLAND.jpeg";
import LEGOLANDPARKS from "./LEGOLANDPARKS.jpg";
import fiat from "./fiat.jpg";
import HeroShortLarge from "./Hero-Short-Large.jpeg";
import FAQs from "./FAQs.png";
import TandC from "./TandC.png";
import Terms from "./Terms.png";
import heart from "./heart.jpg";
import elephant from "./elephant.png";
import box from "./box.jpg";
import model from "./model.png";
import RewardsLego from  "./Quicklink_Rewards.png";
import {BrowserRouter as Router, Route, Link ,withRouter} from 'react-router-dom';
import './App.css';
import 'react-multi-carousel/lib/styles.css';


const Vip = ()=> {

    
    return(
        <>
            <div class="logoVipContainer">
                <img class="m-auto d-block p-3" src = {VipLogo} alt=""VIP/>
            </div>
            <div class="VipIconsContainer">
                <ul class="VipIcons pt-5 row col-12 col-sm-10 offset-sm-1 m-auto col-md-7 offset-md-3 col-xl-5 offset-5">
                    <li class="VipIconsLis">
                        <a href="" class="VipIconsAs">
                            <img src={HomeLego} class="d-block m-auto"/>
                            <p class="text-center">
                                Vip Home
                            </p>
                        </a>
                    </li>
                    <li class="VipIconsLis">
                        <a href="" class="VipIconsAs">
                            <img src={RewardsLego} class="d-block m-auto"/>
                            <p class="text-center">
                                Rewards
                            </p>
                        </a>
                    </li>
                    <li class="VipIconsLis">
                        <a href="" class="VipIconsAs">
                            <img src={PointsLego} class="d-block m-auto"/>
                            <p class="text-center">
                                Get More Points
                            </p>
                        </a>
                    </li>
                    <li class="VipIconsLis">
                        <a href="" class="VipIconsAs">
                            <img src={VIP_AccountLego} class="d-block m-auto"/>
                            <p class="text-center">
                                VIP Account
                            </p>
                        </a>
                    </li>
                    <li class="VipIconsLis">
                        <a href="" class="VipIconsAs">
                            <img src={Digital_CardLego} class="d-block m-auto"/>
                            <p class="text-center">
                                Get a Digital VIP Card
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="earnPointsContainer col-xl-10 offset-xl-1">
                <div class="earnPoints pt-5 col-12">
                    <p>
                        Earn Points
                    </p>
                    <ul class="earnPointsIcons row col-12 m-0 p-0">
                        <li class="col-6 col-md-4 col-lg-3 border border-1 p-3">
                            <div class="">
                                <img class="w-100 m-auto d-block" src={star} alt=""/>
                            </div>
                            <div class="info-container">
                                <button class="btn font-weight-bold text-left pl-0">
                                    <span class="">VIP Member survey - US</span>
                                </button>
                            </div>
                            <div class="description pt-2 pb-2 mb-5">
                            Tell us about yourself
                            </div>
                        </li>
                        <li class="col-6 col-md-4 col-lg-3 border border-1 p-3">
                            <div class="">
                                <img class="w-100 m-auto d-block" src={lock} alt=""/>
                            </div>
                            <div class="info-container">
                                <button class="btn font-weight-bold text-left pl-0">
                                    <span class="">Received an offer code? Enter it here to earn your VIP points!</span>
                                </button>
                            </div>
                            <div class="description pt-2 pb-2 mb-5">
                                Simply enter your code below to receive your points instantly. Check what amazing rewards are available within the REWARDS section!
                            </div>
                        </li>
                        <li class="col-6 col-md-4 d-md-block col-lg-3 border border-1 p-3 d-none">
                            <div class="">
                                <img class="w-100 m-auto d-block" src={heart} alt=""/>
                            </div>
                            <div class="info-container">
                                <button class="btn font-weight-bold text-left pl-0">
                                    <span class="">Check out our Instagram page</span>
                                </button>
                            </div>
                            <div class="description pt-2 pb-2 mb-5">
                                Check out our Instagram page for latest images and news!
                            </div>
                        </li>
                        <li class="col-6 col-md-4 d-lg-block col-lg-3 border border-1 p-3 d-none">
                            <div class="">
                                <img class="w-100 m-auto d-block" src={box} alt=""/>
                            </div>
                            <div class="info-container">
                                <button class="btn font-weight-bold text-left pl-0">
                                    <span class="">Who Are You Typically Shopping For?</span>
                                </button>
                            </div>
                            <div class="description pt-2 pb-2 mb-5">
                                Tell us who you Typically Shop for
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="mt-2">
                <div className="img1Container">
                    <img class="img-fluid cEmKcV" src={LEGOLAND} alt=""/>
                </div>
                <div className="learnMoreContainer col-12 pt-3">
                    <p class="text-center">Tickets for LEGOLAND®</p>
                    <p class="text-center">
                        Awesome awaits!
                    </p>
                    <div class="pb-3">
                        <a class="">
                            <button class="btn d-block m-auto bg-light">
                                <span class="m-0">Learn More</span>
                                <i class="fas fa-chevron-right pl-2"></i>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div class="mt-2 col-xl-10 offset-xl-1">
                <div class="earnPoints earnPoints1 pt-5 col-12">
                    <p>
                        Rewards for You
                    </p>
                    <ul class="earnPointsIcons row col-12 m-0 p-0">
                        <li class="col-6 border col-md-4 col-lg-3 border-1 p-3">
                            <div class="">
                                <img class="w-100 m-auto d-block" src={LEGOLANDPARKS} alt=""/>
                            </div>
                            <div class="info-container">
                                <button class="btn text-left pl-0">
                                    <p class="">1 LEGOLAND® Park Ticket - Any Location in North America!</p>
                                </button>
                            </div>
                            <div class="description1 pt-2 pb-2 mb-5 font-weight-bold">
                                4,000 points
                            </div>
                        </li>
                        <li class="col-6 border col-md-4 col-lg-3 border-1 p-3">
                            <div class="">
                                <img class="w-100 m-auto d-block" src={fiat} alt=""/>
                            </div>
                            <div class="info-container">
                                <button class="btn text-left pl-0">
                                    <p class="">Fiat Art Print 7 "Nuova Rosso" - NA</p>
                                </button>
                            </div>
                            <div class="description1 pt-2 pb-2 mb-5 font-weight-bold">
                                2,800 points
                            </div>
                        </li>
                        <li class="col-6 d-none col-md-4 col-lg-3 d-md-block border border-1 p-3">
                            <div class="">
                                <img class="w-100 m-auto d-block" src={elephant} alt=""/>
                            </div>
                            <div class="info-container">
                                <button class="btn text-left pl-0">
                                    <p class="">1st Edition Elephant Water Colour Print, Circa 1937 - NA</p>
                                </button>
                            </div>
                            <div class="description1 pt-2 pb-2 mb-5 font-weight-bold">
                                1,400 points
                            </div>
                        </li>
                        <li class="col-6 d-none col-lg-3 d-lg-block border border-1 p-3">
                            <div class="">
                                <img class="w-100 m-auto d-block" src={model} alt=""/>
                            </div>
                            <div class="info-container">
                                <button class="btn text-left pl-0">
                                    <p class="">1st Edition Elephant Water Colour Print, Circa 1937 - NA</p>
                                </button>
                            </div>
                            <div class="description1 pt-2 pb-2 mb-5 font-weight-bold">
                                1,400 points
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="mt-2">
                <div className="img1Container">
                    <img class="img-fluid cEmKcV" src={HeroShortLarge} alt=""/>
                </div>
                <div className="learnMoreContainer1 col-12 pt-3">
                    <p class="text-center col-10 offset-1 pt-3 pb-3">Earn points every time you shop with us at LEGO.com or in LEGO Brand Retail stores.</p>
                </div>
            </div>
            <div class="VipIconsContainer">
                <ul class="VipIcons pt-5 row col-12 col-sm-10 offset-sm-1 m-auto col-md-7 offset-md-3 col-xl-5 offset-5 row">
                    <li class="VipIconsLis col-4 m-0"> 
                        <a href="" class="VipIconsAs">
                            <img src={FAQs} class="d-block m-auto"/>
                        </a>
                        <p class="text-center">
                            FAQs
                        </p>
                    </li>
                    <li class="VipIconsLis col-4 m-0">
                        <a href="" class="VipIconsAs">
                            <img src={TandC} class="d-block m-auto"/>
                        </a>
                        <p class="text-center">
                            Terms and Conditions
                        </p>
                    </li>
                    <li class="VipIconsLis col-4 m-0">
                        <a href="" class="VipIconsAs">
                            <img src={Terms} class="d-block m-auto"/>
                        </a>
                        <p class="text-center">
                            Promotional Terms And Conditions
                        </p>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default withRouter(Vip);