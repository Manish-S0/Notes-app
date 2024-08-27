import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// import { AuthProvider } from './utils/AuthContext.jsx'
// import { NotesProvider } from './utils/NotesContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* <AuthProvider> */}
    {/* <NotesProvider> */}
      <App />
    {/* </NotesProvider> */}
  {/* </AuthProvider>, */}
  </StrictMode>
)
