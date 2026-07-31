console.log('main.jsx: Aplikacja startuje...');
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'hyphenation.pl'
import './index.css'
import App from './App.jsx'

// Global hyphenation settings
document.body.style.hyphens = 'auto';
document.body.style.wordBreak = 'break-word';
document.body.style.textAlign = 'justify';
document.body.style.textJustify = 'inter-word';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
