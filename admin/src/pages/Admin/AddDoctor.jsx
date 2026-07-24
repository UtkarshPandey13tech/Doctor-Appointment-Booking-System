import React from "react";
import { assets } from "../../assets/assets_admin/assets";

const inputClass =
  "w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:bg-white";

const AddDoctor = () => {
  return (
    <form className="m-5 w-full">
      <div className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Add Doctor</h2>
        <p className="text-sm text-gray-500">
          Fill in the details below to create a new doctor profile.
        </p>
      </div>

      <div className="w-full max-w-5xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex flex-col items-center gap-4 rounded-xl border border-dashed border-gray-300 bg-gray-50 p-4 text-gray-600 sm:flex-row">
          <label htmlFor="doc-img" className="cursor-pointer">
            <img
              className="h-16 w-16 rounded-full border border-gray-200 bg-white object-cover p-2"
              src={assets.upload_area}
              alt="Upload doctor"
            />
          </label>
          <div>
            <p className="font-medium text-gray-700">Upload Doctor Picture</p>
            <p className="text-sm text-gray-500">
              PNG, JPG, or JPEG up to 5MB
            </p>
          </div>
          <input type="file" id="doc-img" hidden />
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Doctor Name
              </label>
              <input type="text" placeholder="Name" required className={inputClass} />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Doctor Email
              </label>
              <input type="email" placeholder="Email" required className={inputClass} />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Doctor Password
              </label>
              <input type="password" placeholder="Password" required className={inputClass} />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Experience
              </label>
              <select className={inputClass}>
                <option value="">Choose Option</option>
                <option value="1 Year">1 Year</option>
                <option value="2 Year">2 Year</option>
                <option value="3 Year">3 Year</option>
                <option value="4 Year">4 Year</option>
                <option value="5 Year">5 Year</option>
                <option value="6 Year">6 Year</option>
                <option value="7 Year">7 Year</option>
                <option value="8 Year">8 Year</option>
                <option value="9 Year">9 Year</option>
                <option value="10 Year">10 Year</option>
              </select>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Fees
              </label>
              <input type="number" placeholder="Fees" required className={inputClass} />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Speciality
              </label>
              <select className={inputClass}>
                <option value="">Choose any option</option>
                <option value="General Physician">General Physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Education
              </label>
              <input type="text" placeholder="Education" required className={inputClass} />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Address
              </label>
              <input type="text" placeholder="Address 1" className={inputClass} />
              <input type="text" placeholder="Address 2" className={`${inputClass} mt-2`} />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            About Doctor
          </label>
          <textarea
            placeholder="Write about the doctor"
            rows={5}
            required
            className={`${inputClass} min-h-[120px] resize-y`}
          />
        </div>

        <button
          type="submit"
          className="mt-6 rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700"
        >
          Add Doctor
        </button>
      </div>
    </form>
  );
};

export default AddDoctor;