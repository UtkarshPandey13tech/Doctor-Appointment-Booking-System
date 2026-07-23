import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div>
      <p className="text-black text-lg font-medium">
        Browse through the doctors specialist.
      </p>

      <div className="flex flex-col  sm:flex-row item-start gap-5 my-5">
        <div className="flex flex-col gap-4 text-sm text-gray-600">
          <p
            onClick={() => navigate('/doctors/General physician')}
            className="w-56 cursor-pointer rounded-lg border border-gray-300 px-4 py-3 transition hover:bg-indigo-50"
          >
            General Physician
          </p>

          <p
            onClick={() => navigate('/doctors/Gynecologist')}
            className="w-56 cursor-pointer rounded-lg border border-gray-300 px-4 py-3 transition hover:bg-indigo-50"
          >
            Gynecologist
          </p>

          <p
            onClick={() => navigate('/doctors/Dermatologist')}
            className="w-56 cursor-pointer rounded-lg border border-gray-300 px-4 py-3 transition hover:bg-indigo-50"
          >
            Dermatologist
          </p>

          <p
            onClick={() => navigate('/doctors/Pediatricians')}
            className="w-56 cursor-pointer rounded-lg border border-gray-300 px-4 py-3 transition hover:bg-indigo-50"
          >
            Pediatricians
          </p>

          <p
            onClick={() => navigate('/doctors/Neurologist')}
            className="w-56 cursor-pointer rounded-lg border border-gray-300 px-4 py-3 transition hover:bg-indigo-50"
          >
            Neurologist
          </p>

          <p
            onClick={() => navigate('/doctors/Gastroenterologist')}
            className="w-56 cursor-pointer rounded-lg border border-gray-300 px-4 py-3 transition hover:bg-indigo-50"
          >
            Gastroenterologist
          </p>
        </div>
        <div className="w-full grid grid-cols- 1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-4 gap-6">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="bg-white border border-blue-100 rounded-xl overflow-hidden cursor-pointer transform hover:-translate-y-2 transition-transform duration-300 shadow-sm"
              key={index}
            >
              <div className="bg-indigo-50 flex items-center justify-center h-56 p-6">
                <img
                  className="object-contain h-44"
                  src={item.image}
                  alt={item.name}
                />
              </div>

              <div className="p-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
                  <span className="text-green-600 font-medium">Available</span>
                </div>

                <p className="mt-2 text-lg font-semibold text-gray-900">
                  {item.name}
                </p>
                <p className="mt-1 text-sm text-gray-600">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
