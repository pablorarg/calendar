
import Button from 'components/controls/Button';
import useCalendar from 'hooks/useCalendar';
import useEvents from 'hooks/useEvents';
import React, { useState } from 'react';
import './EventViewer.css';

export default function EventCreator({ selectedDay = 0, handleClose, show }) {
    const { calendar } = useCalendar()
    const { dispatch } = useEvents()
    const [name, setName] = useState(null)
    const [surname, setSurname] = useState(null)

    const showHideClassName = show ? 'modal display-block' : 'modal display-none'

    const handleSubmit = (event) => {
        event.preventDefault()

        if (name && surname) {
            dispatch({
                type: 'ADD_EVENT',
                event: {
                    date: new Date(calendar.selectedYear,
                        calendar.selectedMonth,
                        selectedDay),
                    name: name,
                    surname: surname
                }
            })
            handleClose()
        }
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleSurnameChange = (event) => {
        setSurname(event.target.value)
    }

    return (
        <div className={showHideClassName}>
            <section className='modal modal-main'>
                <h4>Create event</h4>
                <form className="event-content" onSubmit={handleSubmit}>
                    <div>
                        <p>Name</p>
                        <input autoFocus="autoFocus" onChange={handleNameChange} placeholder="René.." type="text" ></input>
                    </div>
                    <div>
                        <p>Surname</p>
                        <input type="text" onChange={handleSurnameChange} placeholder="Descartes.."></input>
                    </div>
                    <div>
                        <Button type="submit" text={'Add'} />
                        <Button onClick={handleClose} text={'Maybe later'} />
                    </div>
                </form>
            </section>
        </div>
    )
}
