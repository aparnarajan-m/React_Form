import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import TableData from './TableData';

function LoginForm() {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate(); // For navigation to the DataTable page

  const onSubmit = (data) => {
    // Get existing data from localStorage or initialize an empty array
    const existingData = JSON.parse(localStorage.getItem('formData')) || [];

    // Add new form data
    existingData.push(data);

    // Store the updated data in localStorage
    localStorage.setItem('formData', JSON.stringify(existingData));

    // Clear the form fields
    reset();

    // Navigate to the DataTable page
    navigate('/data');
  };

  return (
    <div className='h-[100vh] w-[100vw] flex justify-center items-center'>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login Form</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-700">Email:</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              id="email"
              {...register('email', { required:true, pattern:/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/})}
              
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700">Password:</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              id="password"
              {...register('password', { required: true, minLength: 6, maxLength: 12 })}
             
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;