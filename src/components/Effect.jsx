import React, { useState } from 'react'




const Effect = ({score}) => {
  const[modalOpen, setModalOpen] = useState(false)

  const change = ()=>{
    setModalOpen(!modalOpen)
  }

  
  return (
    <div>
      {
        score.map(scores => (
          <div key={scores.id}>
            <div className="all">
            <tr>
              <th>{scores.title}</th>
              <th>{scores.title2}</th>
              <th>{scores.title3}</th>
            </tr>
          <tr>
            <td>{scores.id}</td>
            <td>{scores.name}</td>
            <td>{scores.Task1}</td>
            <button onClick={change}>see more</button>
          </tr>
            </div>
          
          <div className={modalOpen ? "pop-up-cont" : "poppy"} onClick={()=>setModalOpen(false)}> 
          <div className="pop-up-body">
        <div className="pop-up-head">
          <button onClick={()=>setModalOpen(false)}>x</button>
        </div>
        <div className="pop-content">
        <div className="card">
                  <p>{scores.Task2}</p>
                  <p>{scores.Task3}</p>
                  <p>{scores.Task4}</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, eligendi.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ad doloribus 
                  </p>
                </div>
          </div>
          </div>
          </div>
          
          </div>

        ))
      }
    {/* <div className={modalOpen ? "pop-up-cont" : "poppy"} onClick={()=>setModalOpen(false)}>
      <div className="pop-up-body">
        <div className="pop-up-head">
          <button onClick={()=>setModalOpen(false)}>x</button>
        </div>
        <div className="pop-content">
            {
              score.map(open=>(
                <div className="card">
                  <p>{open.Task2}</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, eligendi.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ad doloribus 
                  </p>
                </div>
              ))
            }
        </div>
      </div>
    </div> */}
    </div>
  )
}

export default Effect