import React from 'react'

//props for the header
const Header = ({toggleModal , nbOfContacts}) => {
  return (
    <header className='header'>
      <div className='container'>
         <h3>Contact List ({nbOfContacts})</h3>
         <button onClick={()=> toggleModal(true)} 
            className='btn'>
                {/* we are using bootstrap icons */}
            <i className='bi bi-plus-quare'>
            </i>Add New Contact</button>
      </div>
    </header>

  )
}

export default Header
