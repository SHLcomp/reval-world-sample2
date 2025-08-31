import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import About from './pages/About';

function App() {
  const router = createBrowserRouter([
    {
      path: '/reval-world-sample2/',
      element: <Home/>
    },
    {
      path: '/reval-world-sample2/about',
      element: <About />
    }

  ])
  return (
    <>
      <RouterProvider router={router}/> 
    </>
  )
}

export default App
