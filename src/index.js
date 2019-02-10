import React, {Component} from 'react';
import ReactDom from 'react-dom';

import HeadPhoneBook from "./components/headPhoneBook";
import BodyPhoneBook from "./components/bodyPhoneBook";
import SearchPanel from "./components/seachPanel";
import AppHeader from "./components/AppHeader";
import ItemAddForm from "./components/ItemAddForm";



export default class App extends Component  {

    key = 1;

   state ={

       headData: [
           {id:"#", telephone:"Telephone", ns:"Name/Surname", company:"Company", email:"Email",photo:"Photo"}
       ],

       bodyData: [
           this.createToDoItem("1","093-130-95-19","Vova","Evotek","VovaCivic@gmail.com","Photo"),
           this.createToDoItem("2","050-145-98-74","Leva","S-Pro","s-pro@gmail.com","Photo"),
           this.createToDoItem("3","066-142-98-74","Alena","Flexi","Alena@gmail.com","Photo"),
           this.createToDoItem("4","098-188-01-01", "Andrey","ElPrivod","ElPrivod@gmail.com","Photo"),
    ]
   };

    createToDoItem(id,telephone,ns,company,email,photo){
        return {
            id:this.key++,
            telephone,
            ns,
            company,
            email,
            photo
        }
    }

    addItem = (id,telephone,ns,company,email,photo) =>{
        const newItem = this.createToDoItem(id,telephone,ns,company,email,photo);

        this.setState(({bodyData})=>{
            const newArr=[
                ...bodyData,
                newItem
            ];

            return{
                bodyData:newArr
            };
        });
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
            <ItemAddForm
                onItemAdded={this.addItem} />
        </div>
    );

}


};

ReactDom.render(<App />, document.getElementById('root'));