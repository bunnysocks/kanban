import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <div className="min-h-screen bg-[#282828] p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#ebdbb2] mb-8">Kanban Board 📁</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StrictMode>
            <App />
          </StrictMode>,
        </div>
      </div>
    </div>
  </>
)
