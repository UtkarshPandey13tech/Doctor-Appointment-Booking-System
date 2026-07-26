import React, { useContext, useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const specialities = [
  'General physician',
  'Gynecologist',
  'Dermatologist',
  'Pediatricians',
  'Neurologist',
  'Gastroenterologist',
];

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
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
      <p className="text-lg font-medium text-gray-900 dark:text-gray-100">
        Browse through the doctors specialist.
      </p>

      <div className="my-5 flex flex-col items-start gap-5 sm:flex-row">
        <button
          type="button"
          className={`rounded border px-3 py-1.5 text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : 'text-gray-600'}`}
          onClick={() => setShowFilter((prev) => !prev)}
        >
          {showFilter ? 'Hide Filters' : 'Filters'}
        </button>

        <div className={`w-full flex-shrink-0 flex-col gap-3 text-sm text-gray-600 sm:flex sm:w-56 ${showFilter ? 'flex' : 'hidden'}`}>
          {specialities.map((item) => (
            <p
              key={item}
              onClick={() => {
                navigate(`/doctors/${item}`);
                setShowFilter(false);
              }}
              className={`cursor-pointer rounded-lg border px-4 py-3 transition hover:bg-indigo-50 dark:hover:bg-slate-800 ${speciality === item ? 'border-primary bg-indigo-50 text-primary dark:bg-slate-800' : 'border-gray-300'}`}
            >
              {item}
            </p>
          ))}
        </div>

        <div className="grid w-full grid-cols-1 gap-y-4 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filterDoc.map((item) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="cursor-pointer overflow-hidden rounded-xl border border-blue-100 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-2 dark:bg-slate-900 dark:border-slate-700"
              key={item._id}
            >
              <div className="flex h-48 items-center justify-center bg-indigo-50 p-4 sm:h-56 sm:p-6 dark:bg-slate-800">
                <img
                  className="h-36 object-contain sm:h-44"
                  src={item.image}
                  alt={item.name}
                />
              </div>

              <div className="p-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="inline-block h-2 w-2 rounded-full bg-green-500"></span>
                  <span className="font-medium text-green-600">Available</span>
                </div>

                <p className="mt-2 text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {item.name}
                </p>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
