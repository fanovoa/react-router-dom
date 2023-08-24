import { Suspense } from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Routes, Route, NavLink, Navigate } from 'react-router-dom';
import logo from '../assets/react.svg';
import { routes } from './routes';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';


export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
        <BrowserRouter>
            <div className='main-layout'>
                <nav>
                    <img src={ logo } alt="React Logo"  height={80}/>
                    <ul>
                        {
                            routes.map( route => (
                                <li key={route.path}>
                                    <NavLink to={route.to} className={({isActive}) => isActive ? 'nav-active':''}>{route.name}</NavLink>
                                </li>
                            ))
                        }

                    </ul>
                </nav>

                <Routes>
                    {
                        routes.map( (route) => (
                            <Route key={route.path} 
                                path={route.path} 
                                element={<route.Component/>}
                            />

                        ))
                    }
                    < Route path='/*' element={ <Navigate to={ routes[0].to} replace />}/>
                </Routes>
                
            </div>
        </BrowserRouter>
    </Suspense>
)}
