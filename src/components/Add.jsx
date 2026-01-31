import React from 'react'

const addCard = (cardObjects, setCardObjects, column) => {
  const updatedCardObjects = cardObjects.map(cardObject => {
    if (cardObject.title === column) {
      return {
        ...cardObject,
        tasks: [...cardObject.tasks, 'Untitled Task']
      };
    }
    return cardObject;
  });

  setCardObjects(updatedCardObjects);
};


const Add = ({cardObjects, setCardObjects, column}) => {
  return (
    <button 
      onClick={() => {
        addCard(cardObjects, setCardObjects, column)
      }} 
      className="w-full bg-[#282828] text-[#928374] rounded p-3 border border-[#504945] hover:border-[#665c54] hover:text-[#ebdbb2] transition-colors text-sm text-left">
      + Add task
    </button>
  )
}

export default Add