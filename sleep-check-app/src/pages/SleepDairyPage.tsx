import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import jaLocale from "@fullcalendar/core/locales/ja";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import React, { useCallback, useState } from "react";
import { Box, Modal } from "@mui/material";
import { IDiaryEvent } from "../shared/interface/sleepCheckSheet";

function SleepDairyPage() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    hight: "800px",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  //modal Flag
  const [modalFlag, setModalFlag] = useState(false);
  //Event Date
  const eventData: IDiaryEvent[] = [];
  const [diaryEvents, setDiaryEvents] = useState(eventData)
  const [eventStartDate, setEventStartDate] = useState(new Date());
  const [eventEndDate, setEventEndDate] = useState(new Date());
  const [eventStartTime, setEventStartTime] = useState("23:00");
  const [eventEndTime, setEventEndTime] = useState("06:00");
  
  //handle modal flag
  const OpenModal = () => setModalFlag(true);
  const CloseModal = () => setModalFlag(false);

  //Handle to open modal, when click item on cullender
  const HandleDateClick = useCallback((arg: DateClickArg) => {
    console.log(arg.dateStr);
    OpenModal();
    setEventStartDate(arg.date);
    setEventEndDate(arg.date);
    //tomorrow date
    eventEndDate.setDate(eventEndDate.getDate() + 2);
  }, []);

  //Transform YYYY-MM-DD
  const TransYMD = (d: Date) => {
    const yyyy = String(d.getFullYear());
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return yyyy + "-" + mm + "-" + dd;
  };

  //Transform YYYY-MM-DD
  const TransYMDhm = (d: Date, t: string) => {
    const yyyy = String(d.getFullYear());
    const mm = String(d.getMonth() + 1).padStart(2, "0");
    const dd = String(d.getDate()).padStart(2, "0");
    return yyyy + "-" + mm + "-" + dd + "T" + t + "+09:00";
  };
  
  const HandleSaveEventData = () => {
    const start = TransYMDhm(eventStartDate, eventStartTime);
    const end = TransYMDhm(eventEndDate, eventEndTime);
    const diaryEvent:IDiaryEvent = {
      title: "睡眠",
      start: start,
      end: end,
    }
    //
    setDiaryEvents([...diaryEvents, diaryEvent]);
    console.log(diaryEvents)
    
    CloseModal();
  };

  return (
    <>
      <div className="h-full z-0">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          locales={[jaLocale]}
          locale="ja"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek",
          }}
          events={diaryEvents}
          dateClick={HandleDateClick}
        />
      </div>

      <div>
        <Modal open={modalFlag}>
          <Box sx={style}>
            <div className="flex justify-between">
              <h2>{TransYMD(eventStartDate)}</h2>
              <button onClick={CloseModal}>閉じる</button>
            </div>
            <div>
              <form>
                <label>
                  睡眠開始時刻：
                  <input
                    type="date"
                    value={TransYMD(eventStartDate)}
                    onChange={(e) =>
                      setEventStartDate(new Date(e.target.value))
                    }
                  />
                  <input
                    type="time"
                    value={eventStartTime}
                    onChange={(e) => setEventStartTime(e.target.value)}
                  />
                </label>
              </form>
              ～
              <form>
                <label>
                  睡眠終了時刻：
                  <input
                    type="date"
                    value={TransYMD(eventEndDate)}
                    onChange={(e) => setEventEndDate(new Date(e.target.value))}
                  />
                  <input
                    type="time"
                    value={eventEndTime}
                    onChange={(e) => setEventEndTime(e.target.value)}
                  />
                </label>
              </form>
            </div>
            <button onClick={HandleSaveEventData}>保存する</button>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default SleepDairyPage;
