import { useDispatch } from "react-redux";
import { deleteContact} from "redux/contacts/operations";
import css from './contact.module.css';
import { toast } from 'react-hot-toast';
import PropTypes from 'prop-types';

//==============================================================================================================================
export const Contact = ({contact}) => {

    const {id, name, number} = contact; 
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteContact(id));
        toast.success(`contact ${name} was deleted from the contact list.`);
    }

    return (
        <li className={css.contact}> 
            <div className={css.contact_div}>
                <p className={css.contact_p_name}>{name}</p>
                <p className={css.contact_p}>:</p>
                <a className={css.contact_a_phone} href={"tel:" + number}>{number}</a>
                <button className={css.delete_btn} name={name} onClick={handleDelete}>x</button>
            </div>  
        </li>
    )
}
//==============================================================================================================================
Contact.propTypes = {
    name : PropTypes.string,
    number: PropTypes.string,
};

