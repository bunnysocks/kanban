import React, { useState } from 'react'

const AddScreen = ({ onAdd, onClose }) => {
  const [taskInput, setTaskInput] = useState("")

  return (
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/40 z-50">
      <div className="bg-[#282828] p-6 rounded w-80 border border-[#504945]">
        <input
          type="text"
          className="w-full bg-[#282828] text-[#ebdbb2] border border-[#3c3836] p-2 rounded focus:outline-none focus:ring-0 focus:border-[#3c3836] active:outline-none"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Task name..."
        />

        <div className="flex gap-2 mt-4">
            {taskInput !== '' && (
                <button
                onClick={() => onAdd(taskInput)}
                className="flex-1 bg-[#98971a] hover:bg-[#b8bb26] text-[#282828] p-2 rounded transition-colors"
                >
                Add
                </button>
            )}

            <button
                onClick={onClose}
                className="flex-1 bg-[#cc241d] hover:bg-[#fb4934] text-[#ebdbb2] p-2 rounded transition-colors"
            >
                Cancel
            </button>
        </div>

      </div>
    </div>
  )
}

export default AddScreen