import React from 'react'



const Card = ({task, id}) => {
  return (
    <div 
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData('text/plain', task)
        console.log(task)
      }}
      onDragOver={(e) => {
        e.preventDefault()
      }}
      onDrop={(e) => {
        e.preventDefault()
      }}
      className="bg-[#282828] rounded p-3 border border-[#504945] hover:border-[#665c54] transition-colors cursor-pointer"
    >
      <p className="text-[#ebdbb2] text-sm">{task}</p>
    </div>
  )
}

export default Card