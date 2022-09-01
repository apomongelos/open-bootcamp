import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

import '../../styles/contact.scss';

const ContactComponent = ({ contact, changeState, remove }) => {

    useEffect(() => {
        console.log('Created Contact');
        return () => {
            console.log(`Contact: ${contact.name} is going to unmount`);
        };
    }, [contact]);

    function contactIsOnlineIcon() {
        if (contact.loggedIn) {
            return (<i onClick={() => changeState(contact)} className='bi-toggle-on contact-action' style={{ color: 'green' }}></i>);
        } else {
            return (<i onClick={() => changeState(contact)} className='bi-toggle-off contact-action' style={{ color: 'grey' }}></i>);
        }
    }

    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{contact.name}</span>
            </th>
            <td className='align-middle'>
                <span className='ms-2'>{contact.surname}</span>
            </td>
            <td className='align-middle'>
                <span className='ms-2'>{contact.email}</span>
            </td>
            <td className='align-middle'>
                <span>{contact.loggedIn ? 'En linea' : 'Desconectado'}</span>
                <span className='ms-2'>{contactIsOnlineIcon()}</span>
            </td>
            <td className='align-middle'>
                <i className='bi-trash contact-action' style={{ color: 'tomato', fontSize: '20px' }} onClick={() => remove(contact)}></i>
            </td>
        </tr>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
    changeState: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default ContactComponent;
