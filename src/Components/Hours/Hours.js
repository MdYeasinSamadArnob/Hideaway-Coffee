import React from 'react'

function Hours() {
    return (
        <div className='w-full'>
        <div className='md:w-2/3  mx-auto'>
      <div className="py-8">
        <h3 className="text-2xl font-bold">Hours of Operation</h3>
        <table className="w-full mt-4">
          <tbody>
            <tr className="border-b-2 border-gray-200">
              <td className="py-2 pr-4 text-gray-500 font-medium">Monday</td>
              <td className="py-2 pl-4">8am–4pm</td>
            </tr>
            <tr className="border-b-2 border-gray-200">
              <td className="py-2 pr-4 text-gray-500 font-medium">Tuesday</td>
              <td className="py-2 pl-4">8am–4pm</td>
            </tr>
            <tr className="border-b-2 border-gray-200">
              <td className="py-2 pr-4 text-gray-500 font-medium">Wednesday</td>
              <td className="py-2 pl-4">8am–4pm</td>
            </tr>
            <tr className="border-b-2 border-gray-200">
              <td className="py-2 pr-4 text-gray-500 font-medium">Thursday</td>
              <td className="py-2 pl-4">8am–4pm</td>
            </tr>
            <tr className="border-b-2 border-gray-200">
              <td className="py-2 pr-4 text-gray-500 font-medium">Friday</td>
              <td className="py-2 pl-4">8am–4pm</td>
            </tr>
            <tr className="border-b-2 border-gray-200">
              <td className="py-2 pr-4 text-gray-500 font-medium">Saturday</td>
              <td className="py-2 pl-4">10am–4pm</td>
            </tr>
            <tr>
              <td className="py-2 pr-4 text-gray-500 font-medium">Sunday</td>
              <td className="py-2 pl-4">Closed</td>
            </tr>
          </tbody>
        </table>
      </div>
        </div>
        </div>
    );
  }
  

export default Hours