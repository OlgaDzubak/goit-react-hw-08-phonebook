import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import css from './layout.module.css';

export const Layout = () => {

  return  <div className={css.Layout}>

            <AppBar />
            
            <Suspense fallback={null}>
              <Outlet/>
            </Suspense>

            <Toaster position="top-center" reverseOrder={false}/>

          </div>
};