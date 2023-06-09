import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Root } from './features/root/Root';
import { Home } from './features/home/Home';
import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <Root /> }>
    <Route index element={ <Home /> } />
    <Route path="/counter" element={ <Counter /> } />
  </Route>

));

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
