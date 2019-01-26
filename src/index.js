import React, {Component} from 'react';
import ReactDom from 'react-dom';

import HeadPhoneBook from "./components/headPhoneBook";
import BodyPhoneBook from "./components/bodyPhoneBook";
import SearchPanel from "./components/seachPanel";
import AppHeader from "./components/AppHeader";



export default class App extends Component  {

   state ={

       headData: [
           {id:"#", telephone:"Telephone", ns:"Name/Surname", company:"Company", email:"Email",photo:"Photo"}
       ],

       bodyData: [
        {n:1, id:"1", telephone:"093-130-95-19", ns:"Vova", company:"Evotek", email:"VovaCivic@gmail.com",photo:"Photo"},
        {n:2, id:"2", telephone:"050-145-98-74", ns:"Leva", company:"S-Pro", email:"s-pro@gmail.com",photo:"Photo"},
        {n:3, id:"3", telephone:"066-142-98-74", ns:"Alena", company:"Flexi", email:"Alena@gmail.com",photo:"Photo"},
        {n:4, id:"4", telephone:"098-188-01-01", ns:"Andrey", company:"ElPrivod", email:"ElPrivod@gmail.com",photo:"Photo"},
    ]
   };

   deleteItem=(id)=>{
     this.setState(({bodyData})=>{
       const idx = bodyData.findIndex((el)=>el.id===id);
       const before = bodyData.slice(0,idx);
       const after = bodyData.slice(idx+1);
       const newArray = [...before,...after];
       return{
           bodyData: newArray
       }
     })
   };

render() {
    return (
        <div className="container">
            <AppHeader/>
            <SearchPanel />
            <table className="table">
                <HeadPhoneBook titleHead={this.state.headData}/>
                <BodyPhoneBook titleBody={this.state.bodyData}
                               onDeleted={this.deleteItem}
                />
            </table>
        </div>
    );

}


};

ReactDom.render(<App />, document.getElementById('root'));