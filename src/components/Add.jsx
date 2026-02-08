import React, { useState } from 'react'
import AddScreen from './AddScreen';

const Add = ({ cardObjects, setCardObjects, column }) => {
  const [showAddScreen, setShowAddScreen] = useState(false)

  const addCard = (taskName) => {
    const updatedCardObjects = cardObjects.map(cardObject => {
      if (cardObject.title === column) {
        return {
          ...cardObject,
          tasks: [...cardObject.tasks, taskName]
        };
      }
      return cardObject;
    });

    setCardObjects(updatedCardObjects);
    setShowAddScreen(false);
  };

  return (
    <div>
      <button 
        onClick={() => setShowAddScreen(true)}
        className="w-full bg-[#282828] text-[#928374] rounded p-3 border border-[#504945] hover:border-[#665c54] hover:text-[#ebdbb2] transition-colors text-sm text-left">
        + Add task
      </button>

      {showAddScreen && (
        <AddScreen 
          onAdd={addCard}
          onClose={() => setShowAddScreen(false)}
        />
      )}
    </div>
  )
}

export default Add