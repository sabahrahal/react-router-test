import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { MainApp } from './05-useContext/MainApp'
import { router } from "./05-useContext/routes";
//import { TodoApp } from './04-useReducer/TodoApp'
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
//import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
//import { CounterApp } from './01-useState/CounterApp'
//import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks'
//import { SimpleForm } from './02-useEffect/SimpleForm'
//import { HooksApp } from './HooksApp'
//import './04-useReducer/intro-reducer'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainApp/>
    <RouterProvider router={router}/>
  </React.StrictMode>

)
