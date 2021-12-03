import React, { Component } from 'react';
import './listResturants.css';
import defaultImage from '../../Assert/images/default.png';
import BASE_URL from "../../constants";
export class ListResturants extends Component {

    constructor(props) {
        super(props)
        this.state = {
            resturants: [] ,
            originalResturants : [],
            ordersDetails : [],
            searchingStr: "",
            filtered:[],
            totalDetails : 0
        }
    }

    onSearch = (event) =>{
        let word = event;
        let wordArr = word.split('in');
      
        if(word.toString() == '' && word.length == 0){
            this.setState({
                resturants: this.state.originalResturants
            })
        }else if(wordArr.length > 1 ){
                
                 this.setState({resturants:this.filteringByCity(this.state.resturants,wordArr[wordArr.length-1].trim())})
        }else{
            if(!wordArr[wordArr.length-1].includes(" i")){
                this.setState({
                    resturants : this.filteringByMealName(this.state.resturants,word.trim())
                })
            }
            
            
        }
    }


    filteringByMealName = (arr , name) =>{
        let filterdArr = []
        if(name != ""){
            for(var i = 0; i < arr.length; i++)
            {
                arr[i].categories[0].menuItems.forEach(element => {
                   
                    if(element.name.toLowerCase().includes(name.toLowerCase())){
                        if(!filterdArr.includes(arr[i])){
                              filterdArr.push(arr[i])
                        }
                }
                });
            }
            return filterdArr ;
        }else{
            return this.state.resturants;
        }

     
      
    }

    filteringByCity = (arr , city) =>{
        let filterdArr = []
        if(city != ""){
            for(var i = 0; i < arr.length; i++)
            {
                if(arr[i].City.toLowerCase().includes(city.toLowerCase())){
                  
                        filterdArr.push(arr[i])

                }
            }
            return filterdArr ;
        }

       return this.state.resturants;
      
    }


    componentWillMount() {
        
        fetch(BASE_URL + "/Resturants", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
        }).then(results =>{
            return results.json();
        }).then(data =>{
            console.log("data ",data)
            this.setState({
                resturants : data,
                originalResturants : data
            })
        })
    }

    onSelectOrder = (itemId,shopId,Price) => {
        let orders = this.state.ordersDetails;
        let total = this.state.totalDetails;
        let index = -1;
        let order = {ItemId : itemId , ShopId : shopId}
        for(var i =0 ; i < orders.length ; i++){
            if(orders[i].item == itemId && orders[i].shop == shopId){
                    index = i;
            }
        }
        if(index != -1){
            orders.splice(index,1)
            total -= Price;
        }else{
            orders.push(order);
            total += Price;
        }
       
        this.setState({
            ordersDetails : orders,
            totalDetails : total
        })

      };

      sendOrder=()=>{
             
        fetch(BASE_URL + "/api/Orders", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body:{
                Total : this.state.totalDetails,
                MenuItems : this.state.ordersDetails
            }
        }).then(results =>{
            return results.json();
        }).then(data =>{
            console.log("data ",data)
            this.setState({
                resturants : data,
                originalResturants : data
            })
        })
      }


    render() {
        let resturantsList = this.state.resturants.map((shop,i) => {
                return (<><tr>
                    <td><img width="25%" height="25%" src={defaultImage} alt="resturant picture" /></td>
                    <td><h5>{shop.name} - {shop.city} - rated# {shop.rank} overall</h5> </td>
                    
                </tr> {
                        shop.categories.map((food,i2) =>{
                          return (<>
                                {food.menuItems.map((itemType,i3)=>{
                                    return(<>
                                        <tr>      
                                            <td></td>
                                            <td><input onChange={(event)=> {this.onSelectOrder(event.target.value,shop.id,itemType.price)}} type="checkbox" id={itemType.id} value={itemType.id} />{itemType.name} - R{itemType.price}</td>
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
                          
                <button onClick={()=>{ this.sendOrder()}}>Order R({this.state.totalDetails}) </button>
            </div>
        </div>
    }
}