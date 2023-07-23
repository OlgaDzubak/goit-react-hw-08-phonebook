import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authReducer } from "./auth/auth";
import { contactsReducer } from "./contacts/contactsSlice";
import { filterReducer }  from "./contacts/filterSlice";


//===================================================================================================================

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: { ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

// Налаштування збереження токену авторізації в local storage
  const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
  };

// Робимо store проекту
  export const store = configureStore({
    reducer: {
      auth: persistReducer(authPersistConfig, authReducer),       // об'єкт з даними авторизації
      contacts: contactsReducer,                                  // список контактів
      filter: filterReducer,                                      // фільтр пошуку контактів
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',  // devTools параметр типу booling, що дозволяє включити встановлене в браузері розширення Redux DevTools (якщо змінна оточення process.env.NODE_ENV === 'development', то включаємо Redux DevTools)
  });


export const persistor = persistStore(store);

//===================================================================================================================