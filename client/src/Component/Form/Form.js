import React, { useState } from 'react';
import axios from 'axios';
import "./form.css"
function DataForm() {
    const [formData, setFormData] = useState({
        doctorName: '',
        patientName: '',
        patientAge: '',
        date: '',
        file: null
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            file: e.target.files[0]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(formData)
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            };


            const response = await axios.post('http://localhost:5000/form/submit', formData, config);
               
            setFormData({
                doctorName: '',
                patientName: '',
                patientAge: '',
                date: '',
                file: null
            });

            alert('Recording stored successfully');

        } catch (error) {
            console.error('Error:', error);
            alert('Failed to store recording');
        }
    };
    

    return (
        <div>

        <div className='formHeading'>
            <h1>Upload Data</h1>
        </div>
        <form onSubmit={handleSubmit}>
            <label>Doctor's Name:</label>
            <input type="text" name="doctorName" value={formData.doctorName} onChange={handleInputChange} />
            <label>Patient's Name:</label>
            <input type="text" name="patientName" value={formData.patientName} onChange={handleInputChange} />
            <label>Patient's Age:</label>
            <input type="number" name="patientAge" value={formData.patientAge} onChange={handleInputChange} styele />
            <label>Date of Recording:</label>
            <input type="date" name="date" value={formData.recordingDate} onChange={handleInputChange} />
            <label>Upload Sound File:</label>
            <input type="file" name="soundFile" onChange={handleFileChange} />
            <button type="submit">Submit</button>
        </form>

        </div>
    );
}

export default DataForm;
