import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import { MainScreen } from './screens/mainScreen';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainScreen />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
