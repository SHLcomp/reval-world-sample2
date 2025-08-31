import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import About from './pages/About';
import { Contact } from './pages/Contact';
import { Projects } from './pages/Projects';

function App() {
  const router = createBrowserRouter([
    {
      path: '/reval-world-sample2/',
      element: <Home/>
    },
    {
      path: '/reval-world-sample2/about',
      element: <About />
    },
    {
      path: '/reval-world-sample2/contact',
      element : <Contact/>
    },
    {
      path: "/reval-world-sample2/projects",
      element: <Projects/>
    }

  ])
  return (
    <>
      <RouterProvider router={router}/> 
    </>
  )
}

export default App
