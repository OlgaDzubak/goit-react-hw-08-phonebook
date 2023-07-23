import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import { ContactList } from 'components/ContactList/СontactList';
import { ContactEditor } from 'components/ContactEditor/ContactEditor';
import {Loader} from '../components/Loader/Loader';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';


// сторінка телефонної книги контактів ====================================================================================

export default function Contacts() {
  
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
  
    useEffect(() => { dispatch(fetchContacts()); }, [dispatch]);  // робимо запит на backend для отримання списку контактів при кожній зміні store
  
    return (
        <section className='contacts_section'>

          <Helmet><title>Your contact book</title></Helmet>
          <ContactEditor/>
          {isLoading && <Loader/>}

          <ContactList />

        </section>
    );
  }

//==========================================================================================================================