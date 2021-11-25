import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './listResturants.css';
import defaultImage from '../../Assert/images/default.png';
export class ListResturants extends Component {

    constructor(props) {
        super(props)
        this.state = {
            resturants: [] ,
            searchingStr: "",
            filtered:[],
            total : 0
        }
    }

    onSearch = (event) =>{
        console.log("event ",event.target.value)
        var value = event.target.value;
        this.setState({

        })
    }

    onSelectOrder = (event) =>{

    }
    componentWillMount() {
        this.setState({
            resturants: [{
                "Id": 2380,
                "Name": "Barcelos",
                "City": "Pretoria",
                "Suburb": "Pretoria",
                "LogoPath": "/RestaurantImages/barcelos.png",
                "Rank": 0,
                "Categories": [{
                    "Name": "Wholesome Vegetarian Meals",
                    "MenuItems": [{
                        "Id": 941580,
                        "Name": "Vegetarian Burger",
                        "Price": 36.9000
                    }, {
                        "Id": 941581,
                        "Name": "Vegetarian Stir Fry & Rice",
                        "Price": 42.9000
                    }, {
                        "Id": 941582,
                        "Name": "Vegetarian Schwarma",
                        "Price": 41.9000
                    }]
                }]
            },{
                "Id": 1361,
                "Name": "CHIAPAS eat mexican",
                "City": "Johannesburg",
                "Suburb": "Rosebank",
                "LogoPath": "/RestaurantImages/chiapas.png",
                "Rank": 1,
                "Categories": [{
                    "Name": "Mains",
                    "MenuItems": [{
                        "Id": 1315807,
                        "Name": "Crispy Tacos",
                        "Price": 80.0000
                    }, {
                        "Id": 1315808,
                        "Name": "Soft Tacos",
                        "Price": 80.0000
                    }]
                }]
            }, {
                "Id": 2438,
                "Name": "CHIAPAS eat mexican",
                "City": "Pretoria",
                "Suburb": "Brooklyn",
                "LogoPath": "/RestaurantImages/chiapas.png",
                "Rank": 8,
                "Categories": [{
                    "Name": "Mains",
                    "MenuItems": [{
                        "Id": 1137091,
                        "Name": "Crispy Tacos",
                        "Price": 70.0000
                    }, {
                        "Id": 1137092,
                        "Name": "Soft Tacos",
                        "Price": 70.0000
                    }]
                }]
            }]
        })
    }


    render() {
        console.log("Resturants ",this.state.resturants)
        let resturantsList = this.state.resturants.map((item,i) => {
                return (<><tr>
                    <td><img width="25%" height="25%" src={defaultImage} alt="resturant picture" /></td>
                    <td><h5>{item.Name} - {item.Suburb} - rated# {item.Rank} overall</h5> </td>
                    
                </tr>{
                        item.Categories.map((item2,i2) =>{
                          return (<>
                                {item2.MenuItems.map((item3,i3)=>{
                                    return(<>
                                        <tr>
                                            <td></td>
                                            <td><input type="checkbox" id={item3.Id} />{item3.Name} - R{item3.Price}</td>
                                        </tr>
                                    </>)
                                })}
                          </>)
                        },this)
                }</>)
        },this) 
        return <div class="container">
            <div class="search-bar-container"> <input type="text" placeholder="Search" onChange={(event) => {this.onSearch(event.target.value)}} /></div>
            <p>search info update</p>
            <div class="resturant-container">
                <table>
                  {resturantsList}
                </table>
                          
                <button>Order R({this.state.total}) </button>
            </div>
        </div>
    }
}