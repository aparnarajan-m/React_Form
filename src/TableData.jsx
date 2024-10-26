import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function TableData() {
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    // Retrieve form data from localStorage
    const storedData = JSON.parse(localStorage.getItem('formData')) || [];
    setFormData(storedData);
  }, []);

  return (
    <div className="h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Stored Data</h2>
        {formData.length > 0 ? (
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="py-2 px-4 border">Email</th>
                <th className="py-2 px-4 border">Password</th>
              </tr>
            </thead>
            <tbody>
              {formData.map((data, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border">{data.email}</td>
                  <td className="py-2 px-4 border">{data.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No data stored</p>
        )}
        <div className="mt-4 text-center">
          <Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded-md">
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TableData;
