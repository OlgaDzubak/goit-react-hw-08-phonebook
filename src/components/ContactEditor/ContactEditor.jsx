import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "redux/contacts/selectors";
import { addContact } from "redux/contacts/operations";
import {Filter} from '../Filter/filter';

import { toast } from 'react-hot-toast';
import css from './contactEditor.module.css';

// компонент - форма для додавання нового контакту =============================================================
export const ContactEditor = () => {

    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const onFormSubmit = e => {

        e.preventDefault();
        const form = e.currentTarget;
        const name = form.elements.name.value.trim();
        const number = form.elements.number.value;

        if (!name) {
            toast.error("Empty name! Please fill the form fields befor adding contact to the phonebook!");
        } else if (contacts.some(contact => contact.name === name)) {
            toast.error(`${name} is already in contacts.`);
        } else{
            dispatch(addContact({name, number}));
            toast.success(`${name} was added to the contact list.`);
        }
        form.reset();
    }

    return (
        <aside className={css.sideBar}>

            <div className={css.contactEditor_form_div}>
                <form className={css.contactEditor_form} onSubmit={onFormSubmit}>

                    <label className={css.label_name}>Name
                        <input className={css.input_name}
                            type="text"
                            name="name"
                            pattern="^[А-Яа-яЁёїЇ'A-Za-z\s]+$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            maxLength="25"
                            required
                            placeholder='Name Surname'
                        />
                    </label>

                    <label className={css.label_number}>Number
                        <input className={css.input_number}
                            type="tel"
                            name="number"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}|[0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2}"
                            title="Phone number must be in format [xxx-xxx-xx-xx] or [xxx xxx xx xx]"
                            required
                            placeholder='xxx-xxx-xx-xx'
                        />
                    </label>
                    
                    <button type="submit" className={css.submit_btn}>Add contact</button>
                </form>
            </div>
            
            <Filter />
            
        </aside>
    )
}
//==============================================================================================================