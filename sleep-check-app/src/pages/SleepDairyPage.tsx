import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import jaLocale from '@fullcalendar/core/locales/ja'
import React, { useState } from 'react'

function SleepDairyPage() {
  const dailyEvents = [
    {title:'睡眠', start: '2024-09-30T00:00', end: '2024-09-30T06:00'},
    {title:'睡眠', start: '2024-10-01T00:30', end: '2024-10-01T07:30'}
  ]

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        locales={[jaLocale]}
        locale='ja'
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek',
        }}
        events={dailyEvents}
      />
    </>
  )
}

export default SleepDairyPage