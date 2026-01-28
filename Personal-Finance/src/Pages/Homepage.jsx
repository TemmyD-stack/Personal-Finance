import React from 'react'
import account from '/images/account.png'   
import AddTransactionBtn from '../components/AddTransactionBtn'

const Homepage = ({onAddClick}) => {
  return (
    <section className='py-12 bg-blue-100 text-center text-grey-700 h-screen w-full flex flex-col justify-center items-center'>
        <div>
            <h1 className='text-xl font-semibold'> Personal Finance Dashboard</h1>
            <p className='font-light text-sm text-gray-600'>Track Your Income & Expenses</p>
        </div>
        <div className=' px-5 pt-1 pb-5 mt-10 rounded-md '>
            <div className='flex justify-center items-center'>
                <img 
                src={account}
                alt='An illustration of finance tracking'
                className='w-56 h-56 lg:w-96 lg:h-96 object-contain'
                />
            </div>
            <h2 className='text-lg font-semibold'>No transactions yet</h2>
            <p className='font-light text-sm text-gray-600 pb-2.5'>Add your first income or expense to<br/>get started.</p>
            <AddTransactionBtn onAddClick={onAddClick}/>
        </div>
    </section>
  )
}

export default Homepage