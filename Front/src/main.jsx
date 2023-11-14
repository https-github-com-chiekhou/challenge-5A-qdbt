import React from 'react'
import ReactDOM from 'react-dom/client'
import Route from './Routes.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Route />
  </React.StrictMode>,
)

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
// // import 'bootstrap/dist/css/bootstrap.min.css'
// import './assets/styles/bootstrap.custom.css'
// import './assets/styles/index.css'
// import App from './App.jsx'
// import { LoginScreen } from './screen/LoginScreen'
// import { RegisterScreen } from './screen/RegisterScreen'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />}>
//       <Route path='login' element={<LoginScreen />} />
//       <Route path='register' element={<RegisterScreen />} />
//       {/* <Route index={true} path="/" element={<App/>}/> ce sera le composant de notre page d'accueil avec nos services*/}
//     </Route>
//   )
// )


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// )
