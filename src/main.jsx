import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

// React - Router - Dom

// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import Header from './assets/components/Header/Header'
// import About from './assets/components/About/About'
// import TypePhoto from './assets/components/TypePhoto/TypePhoto'
// import Form from './assets/components/Form/Form'

// Bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


// const route = createBrowserRouter([
//   {
//     path: '/',
//     element: <Header />,

//     children: [
//       { path: '/aboutme', element: <About /> },
//       { path: '/typephoto', element: <TypePhoto /> },
//       { path: '/contact', element: <Form /> },
//     ]

//   }
// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={route}/> */}
    <App/>
  </StrictMode>
)
