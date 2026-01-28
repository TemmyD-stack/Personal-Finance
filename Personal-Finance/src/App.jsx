import { useState } from 'react'
import Homepage from './Pages/Homepage'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AddTransactionModal from './Pages/AddTransactionModal'
import DashboardPage from './Pages/DashboardPage'


function App() {
const [isModalOpen, setIsModalOpen] = useState(false)
const [transactions, setTransactions] = useState([])
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>
          {
            transactions.length === 0 ? (
              <Homepage onAddClick={() => setIsModalOpen(true)} />
            ) : (
              <DashboardPage 
                transactions={transactions}
                onAddClick={() => setIsModalOpen(true)}
              />
            )}
            {isModalOpen && (
                <AddTransactionModal
                  onClose={() => setIsModalOpen(false)}
                  onAddTransaction={setTransactions}
                />
              )}
        </>} />
        <Route path="/add-transaction" element={<AddTransactionModal />} />
        <Route path="/dashboard" element={<>
          {transactions.length > 0 && (
            <DashboardPage transactions={transactions} />
      )}
        </>} />
      </Routes>
    </Router>
  )
}

export default App
