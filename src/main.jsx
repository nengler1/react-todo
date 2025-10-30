import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { nanoid } from "nanoid";
import './index.css'
//import 'bootstrap/dist/css/bootstrap.css'
import App from './App.jsx'

const DATA = [
  { id: `todo-${nanoid()}`, name: 'Eat', completed: false },
  { id: `todo-${nanoid()}`, name: 'Sleep', completed: false },
  { id: `todo-${nanoid()}`, name: 'Fart', completed: false }
];

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App tasks={DATA}/>
  </StrictMode>,
);
