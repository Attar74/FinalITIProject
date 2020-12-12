import Item from './item';
import ListItems from './listItems';
import Productslider from './Productslider';
import Vip from './vip';
import Header from './Header';
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route, Link ,Switch} from 'react-router-dom';


class App extends Component{
  state = {
    products: [
      {ID:1, name: "Empire State Building", price: "119.99", imgSrc: '21046.jpeg', rating: 1, imgSrc:'./21042.jpeg'},
      {ID:2, name: "The White House", price: "110.99", imgSrc: '21046.jpeg', rating: 5, imgSrc: './21043.jpeg'},
      {ID:3, name: "Trafalgar Square", price: "98.99", imgSrc: '21046.jpeg', rating: 3, imgSrc: './21046.jpeg'},
      {ID:4, name: "Statue of Liberty", price: "70.50", imgSrc: '21046.jpeg', rating: 2, imgSrc: './21045.jpeg'},
      {ID:5, name: "San Francisco", price: "255.99", imgSrc: '21046.jpeg', rating: 4, imgSrc: './40367.jpeg'},
      {ID:6, name: "Las Vegas", price: "119.99", imgSrc: '21046.jpeg', rating: 1, imgSrc: './21043.jpeg'},
      {ID:7, name: "Paris", price: "110.0", imgSrc: '21046.jpeg', rating: 5, imgSrc: './21042.jpeg'},
      {ID:8, name: "London", price: "98.0", imgSrc: '21046.jpeg', rating: 3, imgSrc: './40367.jpeg'}
    ]
  }

  render() {
      return (
        <>
            <Router>
              <Header />  
              <Route component={()=>{
                  return (
                      <>
                        <h1>Home Test</h1>
                      </>
                  )
                }} path="/" exact />

                <Route component={
                ()=>{
                  return (
                      <>
                        <Productslider products={this.state.products}/>
                      </>
                  )
                }
                } path="/Productslider" exact />

                <Route component={()=>{
                  return (
                      <>  
                        <Item />      
                      </>
                  )
                }} path="/Item" exact />

                <Route component={()=>{
                  return (
                      <>  
                        <ListItems products={this.state.products}/>      
                      </>
                  )
                }} path="/listItems" exact />

                <Route component={()=>{
                  return (
                      <>  
                        <Vip />      
                      </>
                  )
                }} path="/vip" exact />

            </Router>  
        </>
    );
  }
}

export default App;