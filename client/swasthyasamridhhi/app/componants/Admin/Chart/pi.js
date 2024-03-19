import React, { useState, useEffect } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

const chartSettings = {
  height: 300,
  width: 500
};

// Sample fake data
const fakeData = [
  { label: 'Disease A', value: 100 },
  { label: 'Disease B', value: 200 },
  { label: 'Disease C', value: 300 },
];

export default function PieActiveArc() {
  const [data, setData] = useState(fakeData); // Initialize with fake data
  const [selectedDisease, setSelectedDisease] = useState('');

  const handleDiseaseChange = (event) => {
    setSelectedDisease(event.target.value);
  };

  return (
    <div>
      <div>
        <label>Select Disease:</label>
        <select value={selectedDisease} onChange={handleDiseaseChange}>
          <option value="">All</option>
          <option value="Disease A">Disease A</option>
          <option value="Disease B">Disease B</option>
          <option value="Disease C">Disease C</option>
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
