import { FaCheck} from 'react-icons/fa'

const ProgressBar = ({ step, progress }) => {
    const steps = ['Details', 'Category', 'Date']
    
    return ( 
        <div className="w-full lg:w-3/7 mt-12 flex justify-between text-white">
         {steps.map((label, i) => {
        const isActive = step === i + 1
        const isComplete = step > i + 1

        return (
          <div
            key={i}
            className="relative flex flex-col items-center justify-center flex-1"
          >
            {/* The Line */}
            {i !== 0 && (
              <div
                className={`absolute top-1/3 -translate-y-1/2 h-0.75 w-full right-1/2 ${
                  isComplete ? 'bg-blue-600' : 'bg-slate-300'
                }`}
              />
            )}

            {/* The Circle */}
            <div
              className={`w-10 h-10 z-10 flex items-center justify-center rounded-full font-semibold text-white ${
                isComplete
                  ? 'bg-blue-900'
                  : isActive
                  ? 'bg-blue-600'
                  : 'bg-slate-700'
              }`}
            >
              {isComplete ? <FaCheck size={18} /> : i + 1}
            </div>

            {/* The Label */}
            <p
              className={`mt-2 text-xs ${
                isComplete ? 'text-blue-900' : 'text-gray-500'
              }`}
            >
              {label}
            </p>
          </div>
        )
      })}
      </div>

       )
}

export default ProgressBar