
import React, {useState} from 'react'

const DashboardPage = ({transactions}) => {
  ;

  return (
    <section className="p-6">
     <div >
       <div>
          
          <div>
            <h1 className="text-2xl font-semibold mb-4">Personal Finance Dashboard</h1>
            <p className="text-gray-600 mb-6">Track your income and expenses</p>
          </div>
          
        </div>
     </div>
      
      {transactions.map((t) => (
          <li key={t.id} className="bg-white p-3 mb-2 rounded">
            {t.title} — ₦{t.amount}
          </li>
        ))}
    </section>
  );
}

export default DashboardPage