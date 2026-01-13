import React from "react";
import { RxCross1 } from "react-icons/rx";
import FormattedTime from "../../utils/FormattedTime";

const SideBar = ({ isOpen, onClose }) => {
  const time = FormattedTime();

  return (
    <>
      <div className="w-72 hidden md:flex h-screen flex-col bg-gray-200 p-5">
        <h1 className="text-2xl font-bold font-serif text-blue-900">Current Time is: <br/>{time}</h1>
      </div>

      {isOpen && (
        <>
          <div className="fixed top-0 left-0 w-60 h-screen bg-gray-200 p-5 z-50 md:hidden">
            <button onClick={onClose} className="absolute top-4 right-4">
              <RxCross1 size={22} className="text-blue-600" />
            </button>

            <div className="mt-4">small screen content</div>
          </div>
        </>
      )}
    </>
  );
};

export default SideBar;
