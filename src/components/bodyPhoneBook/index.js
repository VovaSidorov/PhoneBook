import React, {Component} from 'react';
import BodyItem from "../bodyItem";


export default class BodyPhoneBook extends Component {

    render(){
        const {titleBody, onDeleted}= this.props;

        return (
            <BodyItem p = {titleBody}
                      onDeleted={(id)=>onDeleted(id)}/>
        );
    }
}



