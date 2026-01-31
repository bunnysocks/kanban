import './App.css'
import Column from './components/Column'

function App() {
  return (
    <div className="min-h-screen bg-[#282828] p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-[#ebdbb2] mb-8">Kanban Board 📁</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Todo Column */}
          <Column title="To do" />

          {/* In Progress Column */}
          <Column title="In Progress" />

          {/* In Review Column */}
          <Column title="In Review" />

          {/* Done Column */}
          <Column title="Done" />
        </div>
      </div>
    </div>
  )
}

export default App