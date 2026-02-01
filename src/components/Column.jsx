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

  const addDropContent = (title, task) => {
    const updatedDropContent = cardObjects.map(cardObject => {
      if(cardObject.title === title) {
        return {
          ...cardObject,
          tasks : [...cardObject.tasks, task]
        }
      }
      return cardObject
    })
    setCardObjects(updatedDropContent)
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
                const task = e.dataTransfer.getData('text/plain')
                console.log('dropped-item: ', task)
                addDropContent(cardObject.title, task)
              }}
            >
            <h2 className="text-lg font-semibold text-[#ebdbb2] mb-4 pb-2 border-b border-[#504945]">
              {cardObject.title}
            </h2>
            <div>
              {
                cardObject.tasks.map((task) => (
                  <Card key={generateUUID()} task={task} id={generateUUID()} />
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