import React from 'react'
import '../styles/ConfirmModal.css'

const ConfirmModal = ({name}) => {
  return (
    <div className='confirm-container'>
        <p className='confirm-text'>Thank you, <span className='name'>{name}!</span><br></br> We will answer your message shortly.</p>
     

    </div>
  )
}

export default ConfirmModal