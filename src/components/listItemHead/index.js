import React, {Fragment} from 'react';

const ListItemHead = ({id,telephone,ns,company,email,photo}) => {
    return   (
        <Fragment>
        <th>{id}</th>
        <th>{telephone}</th>
            <th>{ns}</th>
            <th>{company}</th>
            <th>{email}</th>
            <th>{photo}</th>
            {/*<th>Options</th>*/}
        </Fragment>
    );
};

export default ListItemHead;