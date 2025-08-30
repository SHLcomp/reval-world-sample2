import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/reval-world-sample2/',
      element: <Home/>
    },

  ])
  return (
    <>
      <RouterProvider router={router}/> 
    </>
  )
}

export default App
