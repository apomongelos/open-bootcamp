import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';

const ContactList = () => {
    const defaultContact = new Contact('Fernando', 'Mongelos', 'fer@correo.com', false);

    return (
        <div>
            <div>
                <h2>Lista de contactos</h2>
                <ContactComponent contact={defaultContact}></ContactComponent>
            </div>
        </div>
    );
};


export default ContactList;
