import React, {Fragment} from 'react';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';


const ListItemBody = ({n,id,telephone,ns,company,email,photo}) => {
    return   (
        <Fragment>
            <th>{id}</th>
            <th>{telephone}</th>
            <th>{ns}</th>
            <th>{company}</th>
            <th>{email}</th>
            <th>{photo}</th>
            <th>
                <button type="button"
                        className="btn btn btn-outline-warning btn-sm float-left">
                    <FontAwesomeIcon icon={faExchangeAlt} />
                </button>
                <button type="button"
                        className="btn btn-outline-danger btn-sm float-left" >
                    <FontAwesomeIcon icon={faTrashAlt} />
                </button>
            </th>
        </Fragment>
    );
};

export default ListItemBody;