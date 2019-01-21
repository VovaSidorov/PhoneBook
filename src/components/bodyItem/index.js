import React from 'react';
import ListItemBody from "../listItemBody";

const BodyItem =  ({p}) => {

    const elements = p.titleBody.map((item)=>{
        return (
           <tr key={item.id}>
            <ListItemBody
                {...item}
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

export default BodyItem;