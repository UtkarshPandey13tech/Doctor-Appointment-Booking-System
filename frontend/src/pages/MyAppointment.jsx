import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const MyAppointment = () => {
  const { doctors } = useContext(AppContext);

  return (
    <div>
      <p className="mt-8 border-b pb-3 font-medium text-zinc-700 sm:mt-12 dark:text-zinc-300">
        My Appointment
      </p>

      <div>
        {doctors.slice(0, 2).map((item, index) => (
          <div
            className="flex flex-col gap-4 border-b py-4 sm:flex-row sm:items-center sm:gap-6 sm:py-6"
            key={index}
          >
            <div className="shrink-0">
              <img className="w-28 rounded-lg bg-indigo-50 sm:w-32 dark:bg-slate-800" src={item.image} alt={item.name} />
            </div>

            <div className="min-w-0 flex-1 text-sm text-zinc-600 dark:text-zinc-400">
              <p className="font-semibold text-neutral-800 dark:text-neutral-200">{item.name}</p>
              <p>{item.speciality}</p>
              <p className="mt-1 font-medium text-zinc-700 dark:text-zinc-300">Address:</p>
              <p className="text-xs">{item.address.line1}</p>
              <p className="text-xs">{item.address.line2}</p>
              <p className="mt-1 text-xs">
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Date & Time:</span>{' '}
                25, July, 2026 | 8:30 PM
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:min-w-44">
              <button className="cursor-pointer border py-2 text-sm text-stone-500 transition-all duration-300 hover:bg-primary hover:text-blue-500 dark:border-slate-600">
                Pay Online
              </button>
              <button className="cursor-pointer border py-2 text-sm text-stone-500 transition-all duration-300 hover:bg-primary hover:text-blue-500 dark:border-slate-600">
                Cancel appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointment;
