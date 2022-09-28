import React, { useState, useEffect } from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';
import ContactForm from '../pure/forms/contactForm';
import ContactFormik from '../pure/forms/contactFormik';

const ContactList = () => {
    const defaultContact1 = new Contact('Fernando', 'Casa', 'fer@correo.com', false);
    const defaultContact2 = new Contact('Rodrigo', 'Puerta', 'rodr@correo.com', false);
    const defaultContact3 = new Contact('Maria', 'Ventana', 'mar@correo.com', false);

    const [contacts, setContacts] = useState([defaultContact1, defaultContact2, defaultContact3]);

    useEffect(() => {
        console.log('Contact State has been modified');
        return () => {
            console.log('ContactList component is going to unmount');
        };
    }, [contacts]);


    function changeStateContact(contact) {
        console.log('Change state of this Contact: ', contact);
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].loggedIn = !tempContacts[index].loggedIn;
        setContacts(tempContacts);
    }

    function deleteContact(contact) {
        console.log('Delete this Contact: ', contact);
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.splice(index, 1);
        setContacts(tempContacts);
    }

    function addContact(contact) {
        console.log('Complete this Contact: ', contact);
        const tempContacts = [...contacts];
        tempContacts.push(contact);
        setContacts(tempContacts);
    }
    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h2>Lista de contactos</h2>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Nombre</th>
                                    <th scope='col'>Apellido</th>
                                    <th scope='col'>Email</th>
                                    <th scope='col'>Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((contact, index) => {
                                    return (
                                        <ContactComponent
                                            key={index}
                                            contact={contact}
                                            changeState={changeStateContact}
                                            remove={deleteContact}
                                        >
                                        </ContactComponent>
                                    )
                                })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <ContactFormik add={addContact}></ContactFormik>
        </div>
    );
};


export default ContactList;
