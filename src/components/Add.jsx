import React from 'react'



const Add = ({column}) => {
  return (
    <button onClick={() => {console.log(column)}} className="w-full bg-[#282828] text-[#928374] rounded p-3 border border-[#504945] hover:border-[#665c54] hover:text-[#ebdbb2] transition-colors text-sm text-left">
      + Add task
    </button>
  )
}

export default Add