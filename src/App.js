import React from 'react';
import { Root } from './features/root/Root';
import { Home } from './features/home/Home';
import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import { PostDetails } from './features/postDetails/PostDetails';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <Root /> }>
    <Route index element={ <Home /> } />
    <Route path="/r/:subreddit" element={ <Home /> } />
    <Route path="/r/:subreddit/:postId" element={ <PostDetails /> } />
  </Route>

));

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
