import './MarkAttendance.css';
import React from 'react';

export default function MarkAttendance(){
  function openWifiSettings(){
    if (window.navigator && window.navigator.connection) {
        if (window.navigator.connection.saveData) {
          // This is a data-saving connection; prompt the user to turn on Wi-Fi
          if (window.confirm('You are on a data-saving connection. Would you like to turn on Wi-Fi?')) {
            // You can't directly control Wi-Fi settings, but you can encourage the user to enable Wi-Fi
          }
        }
      }
  };
    return (
      <div>
        <button onClick={openWifiSettings} className="attendanceMark">Mark Attendance</button>
      </div>
    );
}
