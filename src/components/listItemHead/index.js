import React from 'react';

const ListItem = ({id,telephone,ns,company,email,photo}) => {
    return   (
        <tr>
        <th>{id}</th>
        <th>{telephone}</th>
            <th>{ns}</th>
            <th>{company}</th>
            <th>{email}</th>
            <th>{photo}</th>
        </tr>
    );
};

export default ListItem;