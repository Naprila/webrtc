

const ErrorMessage = ({ errorMessage }: { errorMessage: string | null}) => {
    

  return (
    <div className='flex ml-12'>
        {errorMessage && ( <p className=' text-red-500'>{errorMessage}</p>)}
    </div>
  )
}

export default ErrorMessage