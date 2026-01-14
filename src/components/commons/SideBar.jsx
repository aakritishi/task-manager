import React from "react";
import { RxCross1 } from "react-icons/rx";
import FormattedTime from "../../utils/FormattedTime";
import Calendar from "../calendar/Calendar";
import sidebarimg from "../../assets/sidebarimg.jpg";
import sidebarimg1 from "../../assets/sidebarimg1.jpg";
import sidebarimg2 from "../../assets/sidebarimg2.jpg";

const SideBar = ({ isOpen, onClose }) => {
  const time = FormattedTime();

  return (
    <>
      <div className="w-72 hidden md:flex h-auto flex-col bg-gray-200 p-5">
        <h1 className="text-2xl font-bold font-serif text-blue-900">
          Current Time is: <br />
          {time}
        </h1>
        <Calendar />
        <img
          src={sidebarimg}
          alt="sidebarimg"
          className="w-full object-cover rounded-lg"
        />
        <img
          src={sidebarimg1}
          alt="sidebarimg1"
          className="w-full object-cover rounded-lg mt-4"
        />
        {/* <img src={sidebarimg2} alt="sidebarimg2" className="mt-5"/> */}
      </div>

      {isOpen && (
        <>
          <div className="fixed top-0 left-0 w-72 h-screen bg-gray-200 p-5 z-50 md:hidden">
            <button onClick={onClose} className="absolute top-4 right-4">
              <RxCross1 size={22} className="text-blue-600 font-bold" />
            </button>

            <div className="mt-4">
              <h1 className="text-2xl font-bold font-serif text-blue-900">
                Current Time is: <br />
                {time}
              </h1>
              <Calendar />
              <img
                src={sidebarimg}
                alt="sidebarimg"
                className="w-full object-cover rounded-lg"
              />
              <img
                src={sidebarimg1}
                alt="sidebarimg1"
                className="w-full object-cover rounded-lg mt-4"
              />
              <img
                src={sidebarimg2}
                alt="sidebarimg2"
                className="w-full object-cover rounded-lg mt-4"
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SideBar;
