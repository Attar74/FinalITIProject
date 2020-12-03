import Ninjas from './Ninjas';
import Item from './item';
import WishList from './wishList';
import Header from './Header';
import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import AddNinja from './addNinja';
import {BrowserRouter as Router, Route, Link ,Switch} from 'react-router-dom';



class App extends Component{
  state = {
    ninjas: [
      {ID:1, name: "Empire State Building", price: "119.99", imgSrc: '21046.jpeg', rating: 1},
      {ID:2, name: "The White House", price: "110.99", imgSrc: '21046.jpeg', rating: 5},
      {ID:3, name: "Trafalgar Square", price: "98.99", imgSrc: '21046.jpeg', rating: 3},
      {ID:4, name: "Statue of Liberty", price: "70.50", imgSrc: '21046.jpeg', rating: 2},
      {ID:5, name: "San Francisco", price: "255.99", imgSrc: '21046.jpeg', rating: 4},
      {ID:6, name: "Las Vegas", price: "119.99", imgSrc: '21046.jpeg', rating: 1},
      {ID:7, name: "Paris", price: "110.0", imgSrc: '21046.jpeg', rating: 5},
      {ID:8, name: "London", price: "98.0", imgSrc: '21046.jpeg', rating: 3}
    ]
  }

  addNinja = (ninja)=>{

    let newNinjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: newNinjas
    })
  }
  
  
  deleteNinja = (id)=>{
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.ID !== id;
    })
    
    /*let deletedNinja = this.state.ninjas.find(ninja => {
      return ninja.id === id;
    })
    let newNinjas = [...this.state.ninjas];
    newNinjas.splice(deletedNinja.id-1, 1);*/

    this.setState({
      ninjas: ninjas
    })
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
                        <h1 className="m-2 text-center">My Cart</h1>  
                        <Ninjas deleteNinja={this.deleteNinja} ninjas={this.state.ninjas}/>
                      </>
                  )
                }
                } path="/Ninjas" exact />

                <Route component={
                ()=>{
                  return (
                      <>
                        <WishList ninjas={this.state.ninjas}/>
                      </>
                  )
                }
                } path="/WishList" exact />

                           
              <Route component={()=>{
                  return (
                      <>  
                        <AddNinja addNinja = {this.addNinja}/>      
                      </>
                  )
                }} path="/AddNinja" exact />

                <Route component={()=>{
                  return (
                      <>  
                        <Item />      
                      </>
                  )
                }} path="/Item" exact />

               
            </Router>  
        </>
    );
  }
}

export default App;
