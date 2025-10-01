import React, { useState } from 'react';
import { FiCalendar, FiPlus, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  // Sample events data
  const events = [
    { id: 1, title: 'Web Development Class', date: '2023-10-15', time: '10:00 AM - 12:00 PM', type: 'class' },
    { id: 2, title: 'Project Deadline', date: '2023-10-20', time: '11:59 PM', type: 'deadline' },
    { id: 3, title: 'Career Counseling', date: '2023-10-25', time: '2:00 PM - 3:00 PM', type: 'meeting' },
  ];

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month, 1).getDay();
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDayOfMonth = getFirstDayOfMonth(currentDate);
    const today = new Date();
    
    let daysArray = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      daysArray.push(<div key={`empty-${i}`} className="h-24 p-2 border border-gray-100"></div>);
    }

    // Add cells for each day of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
      const dateString = date.toISOString().split('T')[0];
      const dayEvents = events.filter(event => event.date === dateString);
      const isToday = date.toDateString() === today.toDateString();
      const isSelected = date.toDateString() === selectedDate.toDateString();
      
      daysArray.push(
        <div 
          key={i} 
          className={`h-24 p-2 border border-gray-100 overflow-y-auto ${
            isToday ? 'bg-blue-50' : ''
          } ${
            isSelected ? 'ring-2 ring-blue-500' : ''
          }`}
          onClick={() => setSelectedDate(date)}
        >
          <div className="flex justify-between items-center">
            <span className={`text-sm font-medium ${
              isToday ? 'bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center' : ''
            }`}>
              {i}
            </span>
            {dayEvents.length > 0 && (
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            )}
          </div>
          <div className="mt-1 space-y-1">
            {dayEvents.slice(0, 2).map(event => (
              <div key={event.id} className="text-xs p-1 bg-blue-100 text-blue-800 rounded truncate">
                {event.time} - {event.title}
              </div>
            ))}
            {dayEvents.length > 2 && (
              <div className="text-xs text-blue-600">+{dayEvents.length - 2} more</div>
            )}
          </div>
        </div>
      );
    }

    return daysArray;
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const selectedDateEvents = events.filter(
    event => event.date === selectedDate.toISOString().split('T')[0]
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Calendar</h1>
          <p className="text-sm text-gray-500">Manage your schedule and events</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#2A65F5] to-[#19D7B5] rounded-lg hover:bg-blue-700">
          <FiPlus className="w-4 h-4" />
          Add Event
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <button 
            onClick={prevMonth}
            className="p-2 text-gray-500 hover:bg-gray-100 rounded-full"
          >
            <FiChevronLeft className="w-5 h-5" />
          </button>
          <h2 className="text-xl font-semibold text-gray-800">
            {months[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h2>
          <button 
            onClick={nextMonth}
            className="p-2 text-gray-500 hover:bg-gray-100 rounded-full"
          >
            <FiChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-0">
          {days.map(day => (
            <div key={day} className="text-center font-medium text-gray-500 py-2">
              {day}
            </div>
          ))}
          {renderCalendar()}
        </div>
      </div>

      {selectedDateEvents.length > 0 && (
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Events on {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
          </h3>
          <div className="space-y-3">
            {selectedDateEvents.map(event => (
              <div key={event.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <div className={`p-2 rounded-lg ${
                    event.type === 'class' ? 'bg-green-100 text-green-600' :
                    event.type === 'deadline' ? 'bg-red-100 text-red-600' :
                    'bg-blue-100 text-blue-600'
                  }`}>
                    <FiCalendar className="w-5 h-5" />
                  </div>
                  <div className="ml-4 flex-1">
                    <h4 className="font-medium text-gray-900">{event.title}</h4>
                    <p className="text-sm text-gray-500">{event.time}</p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
