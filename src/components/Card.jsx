import React from 'react'

const Card = ({task}) => {
  return (
    <div className="bg-[#282828] rounded p-3 border border-[#504945] hover:border-[#665c54] transition-colors cursor-pointer">
      <p className="text-[#ebdbb2] text-sm">{task}</p>
    </div>
  )
}

export default Card