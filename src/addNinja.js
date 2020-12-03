import react, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route, Link ,withRouter} from 'react-router-dom';



class AddNinja extends Component {

    state = {
        name: null,
        Quantity: null,
        Total: null,
        ID: null,
        imgSrc: null
    }

    handleChange = (e)=>{

        console.log(e.target.id, e.target.value);

        this.setState({
            [e.target.id]: e.target.value,
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault(); //Prevent submit defualt behaviour
        this.props.addNinja(this.state); //To update Items
        this.props.history.push('/Ninjas'); // To return to Items Page
    }
    
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group col-6 offset-3 p-3">

                        <input id="ID" onChange={this.handleChange} type="text" className="form-control" placeholder="Product ID" aria-label="Product's ID" aria-describedby="basic-addon2" />
                        <input id="name" onChange={this.handleChange} type="text" className="form-control" placeholder="Product Name" aria-label="Product's username" aria-describedby="basic-addon2" />
                        <input id="Quantity" onChange={this.handleChange} type="text" className="form-control" placeholder="Quantity" aria-label="Product's Quantity" aria-describedby="basic-addon2" />
                        <input id="Total" onChange={this.handleChange} type="text" className="form-control" placeholder="Total Price" aria-label="Product's Total" aria-describedby="basic-addon2" />
                        <input id="imgSrc" onChange={this.handleChange} type="text" className="form-control" placeholder="Product imgSrc" aria-label="Product's imgSrc" aria-describedby="basic-addon2" />

                        <div className="input-group-append">
                            <button className="btn btn-primary pl-5 pr-5" >Add to cart</button>
                        </div>

                    </div>
                </form>    
            </div>
        )
    }
}

export default  withRouter(AddNinja);