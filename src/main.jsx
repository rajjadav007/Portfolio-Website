import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from "@vercel/speed-insights/react"
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import './index.css'

// Filter out unwanted console logs from extensions
const originalLog = console.log
console.log = (...args) => {
  const message = args.join(' ')
  // Ignore extension logs
  if (message.includes('Initialized driver') || 
      message.includes('Initialized chextloader') ||
      message.includes('chextloader')) {
    return
  }
  originalLog.apply(console, args)
}

// Add error logging (keep only real errors)
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error)
})

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason)
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
        <SpeedInsights/>
        <Analytics /> 
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
)
