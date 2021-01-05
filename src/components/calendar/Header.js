import useCalendar from 'hooks/useCalendar';
import React from 'react';
import './Header.css';

export default function Header() {

    const { calendar } = useCalendar()
    const calendarInfo = calendar.info[calendar.selectedMonth - 1]
    const title = `${calendarInfo ? calendarInfo.monthName : ''} ${calendar.selectedYear}`

    return (
        <header>
            <h1>{title}</h1>
        </header>
    )
}
