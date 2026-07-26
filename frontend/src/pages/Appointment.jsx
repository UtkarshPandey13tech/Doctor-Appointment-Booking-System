import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets_frontend/assets';
import RelatedDoctors from '../components/RelatedDoctors';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvaliableSlots = async () => {
    setDocSlots([]);

    let today = new Date();

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getAvaliableSlots();
  }, [docInfo]);

  return (
    docInfo && (
      <div>
        <div className="my-5 flex flex-col items-start gap-5 md:flex-row">
          <div className="mx-auto w-full max-w-xs md:mx-0 md:max-w-none md:w-auto">
            <img
              className="w-full rounded-lg bg-blue-500 sm:w-60"
              src={docInfo?.image}
              alt={docInfo?.name}
            />
          </div>

          <div className="flex-1 rounded-lg border border-gray-300 bg-white p-5 sm:p-8 dark:bg-slate-900 dark:border-slate-700">
            <p className="flex flex-wrap items-center gap-2 text-xl font-medium text-gray-900 sm:text-2xl dark:text-gray-100">
              {docInfo?.name}
              <img className="w-5" src={assets.verified_icon} alt="" />
            </p>

            <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              <p>
                {docInfo?.degree} - {docInfo?.speciality}
              </p>
              <p className="mt-1">{docInfo?.experience}</p>
            </div>

            <div className="mt-4">
              <p className="flex items-center gap-2 font-medium text-gray-800 dark:text-gray-200">
                About <img src={assets.info_icon} alt="" />
              </p>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{docInfo?.about}</p>
            </div>

            <p className="mt-4 font-medium">
              Appointment Fee : <span>{currencySymbol}{docInfo.fees}</span>
            </p>
          </div>
        </div>

        <div className="font-medium text-gray-700 dark:text-gray-300">
          <p>Booking Slots</p>
          <div className="scrollbar-hide mt-4 flex w-full items-center gap-3 overflow-x-auto pb-2">
            {docSlots.length &&
              docSlots.map((item, index) => (
                <div
                  onClick={() => setSlotIndex(index)}
                  className={`min-w-16 shrink-0 cursor-pointer rounded-full py-4 text-center sm:py-6 ${slotIndex === index ? 'bg-blue-500 text-white' : 'border border-gray-200 dark:border-slate-600'}`}
                  key={index}
                >
                  <p className="text-xs sm:text-sm">{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                  <p className="text-sm sm:text-base">{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>

          <div className="scrollbar-hide mt-4 flex w-full items-center gap-3 overflow-x-auto pb-2">
            {docSlots.length &&
              docSlots[slotIndex].map((item, index) => (
                <p
                  onClick={() => setSlotTime(item.time)}
                  className={`shrink-0 cursor-pointer rounded-full px-4 py-2 text-sm font-light sm:px-5 ${item.time === slotTime ? 'bg-blue-500 text-white' : 'border border-gray-300 dark:border-slate-600'}`}
                  key={index}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>

          <button className="my-6 w-full cursor-pointer rounded-full bg-blue-500 px-8 py-3 text-sm font-light text-white sm:w-auto sm:px-14">
            Book an Appointment
          </button>
        </div>

        <RelatedDoctors docId={docId} speciality={docInfo.speciality} />
      </div>
    )
  );
};

export default Appointment;
