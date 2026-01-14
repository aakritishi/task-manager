import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";

const Calendar = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar
        defaultValue={dayjs()}
        sx={{
          width: 240,
          overflow: "visible", 
          "& .MuiPickersCalendarHeader-root": {
            overflow: "visible",
          },
          "& .MuiDayCalendar-monthContainer": {
            overflow: "visible",
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default Calendar;
