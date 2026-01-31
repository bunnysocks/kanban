import React from 'react'
import Card from './Card'
import Add from './Add'

const Column = ({title}) => {
  return (
    <>
        <div className="bg-[#3c3836] rounded-lg p-4 min-h-[500px]">
            <h2 className="text-lg font-semibold text-[#ebdbb2] mb-4 pb-2 border-b border-[#504945]">
              {title}
            </h2>
            <div className="space-y-2">
              {/* Tasks will go here */}
              <Card title="Task #1" />
            </div>
            <Add />
          </div>
    </>
  )
}

export default Column