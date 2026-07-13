
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import  { Toaster } from 'react-hot-toast';
import store from './state/state'
import 'react-tooltip/dist/react-tooltip.css'

createRoot(document.getElementById('root')).render(
<>
<Provider store={store}>
  <Toaster position='top-centered'/>
  <RouterProvider router={router}/>
</Provider>
</>
  
)
