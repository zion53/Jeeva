import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './Component/Form/Form';
import DataTable from './Component/Table';
import Navbar from './Component/navbar/navbar';
const App = () => {
  const [formData, setFormData] = useState([]);



  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/form/records');
      setFormData(response.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  
  useEffect(() => {
    fetchData();
  }, []);

  

  return (
    <div>
      <Navbar />
      <Form />
      <DataTable data={formData} />
    </div>
  );
};

export default App;
