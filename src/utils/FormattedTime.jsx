import React, { useEffect, useState } from "react";

const FormattedTime = () => {
  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };
  const [time, setTime] = useState(getCurrentTime());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return time;
};

export default FormattedTime;
