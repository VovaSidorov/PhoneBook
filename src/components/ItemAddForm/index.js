import React, {Component} from 'react';
// import './style.css';

export default class ItemAddForm extends Component{

    render(){
        return(
            <div className="item-add-form">
                <button className="btn btn-outline-secondary"
                        onClick={()=>this.props.onItemAdded('1',"050-646-98-15",'Leha','UPK','UPK@gmail.com','Photo1')}>
                    Add item
                </button>
            </div>
        )
    }
}