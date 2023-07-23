import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

// функція запиту на backend для отримання книги контактів 
export const fetchContacts = createAsyncThunk("contacts/fetchAll",
    async (_, thunkAPI) => {
      try {
            const response = await axios.get("/contacts");
            return response.data;
      } catch (error) { return thunkAPI.rejectWithValue(error.message); }
    }
);

// функція запиту на backend для додавання контакту (приймає контакт у вигляді об'єкту {name, number} )
export const addContact = createAsyncThunk("contacts/addContact",
  async (contact, thunkAPI) => {
      try {
          const response = await axios.post("/contacts", contact);
          return response.data;
      } catch (error) { 
          return thunkAPI.rejectWithValue(error.message);}
  }
);

// функція запиту на backend для видалення контакту (приймає як параметр Id контакту)
export const deleteContact = createAsyncThunk("contacts/deleteCotact",
    async (contactId, thunkAPI) => {
      try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
      } catch (error) { return thunkAPI.rejectWithValue(error.message); }
    }
);