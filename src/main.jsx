import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css' 
// import Header from './components/Header'
// import { OverviewContainer } from './components/OverviewContainer'
// import Followers from './components/Followers'
// import Likes from './components/Likes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)


