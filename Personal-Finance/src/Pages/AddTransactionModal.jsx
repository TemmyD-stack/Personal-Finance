import {useState} from 'react'
import ProgressBar from '../components/ProgressBar'
import FormWithSteps from '../components/FormWithSteps'

const AddTransactionModal = ({onClose, onAddTransaction}) => {
    
    const [step, setStep] = useState(1);
    const nextStep = () => setStep(prev => prev + 1)
    const prevStep = () => setStep(prev => prev - 1)

    const [formData, setFormData] = useState({
        title: "",
        amount: "",
        type: "",
        category: "",
        date: "",
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
        ...prev,
        [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { title, amount, category, date, type } = formData;

        if (!title || !amount || !category || !date) {
        alert("Please fill all fields");
        return;
        }

        const newTransaction = {
            id: Date.now(),
            title,
            amount: Number(amount),
            category,
            type,
            date,
        };

        onAddTransaction((prev) => [...prev, newTransaction]);
        onClose();
    };

  return (
    <div className='fixed inset-0 bg-blue-100 flex flex-col items-center justify-center z-10'>
        <div className='bg-white text-xl font-semibold mb-4 w-11/12  max-w-md rounded-2xl p-6 shadow-lg'>
            <div className='flex items-center justify-between'>
                <h2 className='font-bold text-2xl'>Add Transaction</h2>
                <button 
                    type="button"
                    onClick={onClose}
                    className='px-3 py-1 rounded-full border-2 text-grey-400 hover:text-red-900'>X</button>
            
            </div>
           
            
            <FormWithSteps 
                step={step} 
                formData={formData} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit} 
                nextStep={nextStep} 
                prevStep={prevStep}
                
            />
        </div>
        <ProgressBar step={step} />
        
    </div>
  )
}

export default AddTransactionModal