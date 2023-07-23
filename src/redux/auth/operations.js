import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

//=================================================================================================================================

    axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

    // функція додавання токену до HTTP-заголовку
    const setAuthHeader = (token) => { 
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    };

    // функція видалення токену з HTTP-заголовку
    const clearAuthHeader = () => {
        axios.defaults.headers.common.Authorization = '';
    };

    // функція регістрації нового юзера (приймає об'єкт даних з форми регастрації у вигляді об'єкта {name, e-mail, password} )
    export const register = createAsyncThunk('auth/register',
        async (credentials, thunkAPI) => {
            try {
                const res = await axios.post('/users/signup', credentials);             // Посилаємо запит на регістрацію юзера, передаємо на backend об'єкт даних у вигляді {name, e-mail, password}
                setAuthHeader(res.data.token);                                          // Після вдалої регістрації додаємо токен до HTTP-заголовка
                return res.data;                                                        // повертаємо результат регістрації
            } catch (error) {
                return thunkAPI.rejectWithValue(error.code);
            }
    });

    // функція авторизації(logIn) юзера (приймає об'єкт даних з форми логіну у вигляді об'єкта {e-mail, password} )
    export const logIn = createAsyncThunk('auth/login',
        async (credentials, thunkAPI) => {
            try {
                const res = await axios.post('/users/login', credentials);    // Посилаємо запит на логування юзера, передаємо на backend об'єкт даних у вигляді {e-mail, password}
                setAuthHeader(res.data.token);                                // Після вдалого логування додаємо токен юзера до HTTP-заголовка
                return res.data;                                              // повертаємо результат регістрації
            } catch (error) {
                return thunkAPI.rejectWithValue(error.code);
            }
    });

    // функція розавторизації(logOut) юзера (нічого не приймає, береться токен з hreader для поточного юзера)
    export const logOut = createAsyncThunk('auth/logout', 
        async (_, thunkAPI) => {
            try {
                await axios.post('/users/logout');                              // Посилаємо запит на розавторизаціЮ ПОТОЧНОГО юзера
                clearAuthHeader();                                              // після успішної розавторизації видаляємо токен юзера з HTTP-заголовка
            } catch (error) {
                return thunkAPI.rejectWithValue(error.code);
            }
    });

    // функція повертає інформацію про поточного юзера, який відповідає токену, який передається в HTTP-заголовку (нічого не приймає)
    export const refreshUser = createAsyncThunk('auth/refresh',
        async (_, thunkAPI) => {

            const state = thunkAPI.getState();                      
            const persistedToken = state.auth.token;                        // считуємо токен поточного юзера зі стора через getState()
            
            if (persistedToken === null) {                                  // якщо токена немає, то не робимо запит на back-end, а відразу виходимо
                return thunkAPI.rejectWithValue('Unable to fetch user');      
            }

            try {                                                           // якщо токен є, то додаємо йього до HTTP-заголовка та робимо запит на back-end для отримання даних про юзера, який відповідає цьому токену
                setAuthHeader(persistedToken);                                
                const res = await axios.get('/users/current');
                return res.data;
            } catch (error) {
                toast.error(error.message);
                return thunkAPI.rejectWithValue(error.code);
            }
        }
    );
        
//=================================================================================================================================