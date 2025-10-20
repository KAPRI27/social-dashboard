import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' 
import Header from './components/Header'
import Followers from './components/Followers'
import Likes from './components/Likes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />,
    <Followers />,
    <Likes />
  </StrictMode>,
)
