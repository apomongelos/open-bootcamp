import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const ContactComponent = ({ contact }) => {
    return (
        <div>
            <h2>
                Nombre y apellido: {contact.name} {contact.surname}
            </h2>
            <h3>
                Email: {contact.email}
            </h3>
            <h4>
                Is logged in: {contact.loggedIn ? 'Contacto En Línea' : 'Contacto No Disponible'}
            </h4>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;
