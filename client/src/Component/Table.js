import React from 'react';
import AudioPlayer from 'react-audio-player';
import "./Table.css"
const DataTable = ({ data }) => {
  return (
    <div>
      <div className='tableHeading'>
            <h1>Submitted Data</h1>
        </div>
    <table>
      <thead>
        <tr>
          <th>Doctor's Name</th>
          <th>Patient's Name</th>
          <th>Patient's Age</th>
          <th>Recording Date</th>
          <th>Audio Recorded</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((entry, index) => (
          
          <tr key={index}>
            <td>{entry.doctorName}</td>
            <td>{entry.patientName}</td>
            <td>{entry.patientAge}</td>
            <td>{entry.date}</td>
            <td>
            <AudioPlayer src={`http://localhost:5000/form/soundfile/${entry._id}`}  controls/>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default DataTable;
