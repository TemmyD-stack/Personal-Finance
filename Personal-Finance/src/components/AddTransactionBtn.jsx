import React from 'react'
import {Link } from 'react-router-dom'

const AddTransactionBtn = ({onAddClick}) => {
  return (
    <div>
      {/* The Add Transaction Button */}
        <button 
        className='rounded-md mt-10 bg-blue-600 font-semibold text-white px-5 py-3'
        onClick={onAddClick}>
            + Add Transaction
        </button>
    </div>
  )
}

export default AddTransactionBtn