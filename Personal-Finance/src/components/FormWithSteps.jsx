// import React from 'react'

const FormWithSteps = ({ step, formData, handleChange, handleSubmit, nextStep, prevStep }) => {
    const isStepOneValid = formData.title && formData.amount
    const isStepTwoValid = formData.type && formData.category
    const isStepThreeValid = formData.date



  return (
    <form 
        action="" 
        onSubmit={handleSubmit} 
        className='mt-4'>

        {/* Step 1 form */}
        {step === 1 && (
        <>
            
            <label htmlFor="title" className='font-semibold text-gray-600'>Title</label>
            <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Grocery Shopping"
            className="w-full border rounded-lg px-3 py-2 mb-2"
            />

            <label htmlFor="amount" className='font-semibold text-gray-600'>Amount</label>
            <input
            name="amount"
            type="number"
            value={formData.amount}
            onChange={handleChange}
            placeholder="6000"
            className="w-full border rounded-lg px-3 py-2 mb-2"
            />

            <button
            type="button"
            onClick={nextStep}
            disabled={!isStepOneValid}
            className="w-full bg-blue-600 text-white py-3 rounded-lg mt-5 disabled:opacity-50"
            >
            Next
            </button>
        </>
        )}

        {/* Step 2 form */}
        {step === 2 && (
            <>
                <label htmlFor="type" className='font-semibold text-gray-600'>Type</label>
                <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 mb-2"
                >
                <option value="">Select type</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
                </select>

                <label htmlFor="category" className='font-semibold text-gray-600'>Category</label>
                <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 mb-2"
                >
                <option value="">Select category</option>
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="Shopping">Shopping</option>
                <option value="Salary">Salary</option>
                <option value="Others">Others</option>

                </select>

                <div className="flex gap-3 mt-5">
                    <button
                        type="button"
                        onClick={prevStep}
                        className="w-full border py-3 rounded-lg"
                    >
                        Back
                    </button>

                    <button
                        type="button"
                        onClick={nextStep}
                        disabled={!isStepTwoValid}
                        className="w-full bg-blue-600 text-white py-3 rounded-lg disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </>
        )}

        {/* Step 3 form */}
            { step === 3 && (
                <>
                    <label htmlFor="date" className='font-semibold text-gray-600'>Date</label>
                    <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full border rounded-lg px-3 py-2 mb-8"
                    />

                    <div className="flex gap-3">
                        <button
                            type="button"
                            onClick={prevStep}
                            className="w-full border py-3 rounded-lg"
                        >
                            Back
                        </button>

                        <button
                            type="submit"
                            disabled={!isStepThreeValid}
                            className="w-full bg-blue-600 text-white py-3 rounded-lg disabled:opacity-50"
                        >
                            Add Transaction
                        </button>
                    </div>
                </>
            )}

    </form>
  )
}

export default FormWithSteps