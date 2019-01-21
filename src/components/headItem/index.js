import React from 'react';
import ListItemHead from "../listItemHead";


const HeadItem =  ({p}) => {

    const elements = p.map((item)=>{
        return (
            <tr key={item.id}>
          <ListItemHead
         {...item}
          />
          </tr>
        );
    });

    return (
        <thead>
            {elements}
        </thead>
    )
};

export default HeadItem;