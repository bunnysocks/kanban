import React, {useState} from 'react'
import Card from './Card'
import Add from './Add'
import { v4 as uuidv4 } from 'uuid';

const Column = () => {

  const [cardObjects, setCardObjects] = useState([
    {title : "To Do", tasks: ['Task #6']},
    {title : "In Progress", tasks: ['Task #4', 'Task #5']},
    {title : "In Review", tasks: ['Task #2', 'Task #3']},
    {title : "Done", tasks: ['Task #1']}
  ])

  const generateUUID = () => {
    const newId = uuidv4();
    return newId
  }

  const moveTask = (fromTitle, toTitle, task) => {
    setCardObjects(prev =>
      prev.map(cardObject => {
        // remove from source column
        if (cardObject.title === fromTitle) {
          return {
            ...cardObject,
            tasks: cardObject.tasks.filter(t => t !== task)
          }
        }

        // add to target column
        if (cardObject.title === toTitle) {
          return {
            ...cardObject,
            tasks: [...cardObject.tasks, task]
          }
        }

        return cardObject
      })
    )
  }


  return (
    <>
      {
        cardObjects.map(cardObject => {
          return (
            <div 
              className="bg-[#3c3836] rounded-lg p-4 min-h-[500px]"
              key={cardObject.title}
              onDragOver={(e) => {
                e.preventDefault()
              }}
              onDrop={(e) => {
                e.preventDefault()
                const { title, task } = JSON.parse(e.dataTransfer.getData('text/plain'))
                moveTask(title, cardObject.title, task)
              }}
            >
            <h2 className="text-lg font-semibold text-[#ebdbb2] mb-4 pb-2 border-b border-[#504945]">
              {cardObject.title}
            </h2>
            <div>
              {
                cardObject.tasks.map((task) => (
                  <Card key={generateUUID()} title={cardObject.title} task={task} id={generateUUID()} cardObjects={cardObjects} setCardObjects={setCardObjects} />
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