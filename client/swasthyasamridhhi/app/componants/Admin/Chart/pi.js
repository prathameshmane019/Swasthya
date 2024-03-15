import React, { useState, useEffect } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const chartSettings = {
  height: 300,
  width: 500
};

export default function PieActiveArc() {
  const [data, setData] = useState([]);
  const [selectedDisease, setSelectedDisease] = useState('');

  useEffect(() => {
    fetchData();
  }, [selectedDisease]);

  const fetchData = async () => {
    try {
      const response = await fetch('YOUR_API_ENDPOINT');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDiseaseChange = (event) => {
    setSelectedDisease(event.target.value);
  };

  return (
    <div>
      <div>
        <label>Select Disease:</label>
        <select value={selectedDisease} onChange={handleDiseaseChange}>
          <option value="">All</option>
          <option value="series A">Series A</option>
          <option value="series B">Series B</option>
          <option value="series C">Series C</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <PieChart
        series={[
          {
            data: selectedDisease ? data.filter(item => item.label === selectedDisease) : data,
            highlightScope: { faded: 'global', highlighted: 'item' },
            faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          },
        ]}
        {...chartSettings}
      />
    </div>
  );
}
