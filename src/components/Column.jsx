import React, {useState} from 'react'
import Card from './Card'
import Add from './Add'

const Column = () => {
  const [cardObjects, setCardObjects] = useState([
    {title : "To Do", tasks: ['Task #6']},
    {title : "In Progress", tasks: ['Task #4', 'Task #5']},
    {title : "In Review", tasks: ['Task #2', 'Task #3']},
    {title : "Done", tasks: ['Task #1']}
  ])
  
  return (
    <>
      {
        cardObjects.map(cardObject => {
          return (
            <div className="bg-[#3c3836] rounded-lg p-4 min-h-[500px]" key={cardObject.title}>
            <h2 className="text-lg font-semibold text-[#ebdbb2] mb-4 pb-2 border-b border-[#504945]">
              {cardObject.title}
            </h2>
            <div>
              {
                cardObject.tasks.map((task, key) => (
                  <Card key={key} task={task} />
                  ))
              }
            </div>
            <Add column={cardObject.title} cardObjects={cardObjects} setCardObjects={setCardObjects} />
          </div>
          )
        })
      }
    </>
  )
}

export default Column