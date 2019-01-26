import React, {Component} from 'react';
import ListItemBody from "../listItemBody";


export default class BodyItem extends Component{

    state = {
        allotment: false,
    };

    onLineSelection = () => {
        this.setState(({allotment})=>{
        return{
            allotment: !allotment
           }
        })
    };

    onLineSelection1 = () => {
        this.setState(({allotment})=>{
            return{
                allotment: !allotment
            }
        })
    };

render() {

    const {p, onDeleted}= this.props;

    const {allotment} = this.state;
    let classNames = '';
    if (allotment) {
        classNames += 'table-primary';
    }

    const elements = p.map((item)=>{
        return (
            <tr key={item.id} className={classNames}  onMouseOver={this.onLineSelection}  onMouseOut={this.onLineSelection1}>
                <ListItemBody
                    {...item}
                    onDeleted={()=>onDeleted(item.id)}
                />
            </tr>

        );
    });

    return (
        <tbody>
        {elements}
        </tbody>
    )
};

}

