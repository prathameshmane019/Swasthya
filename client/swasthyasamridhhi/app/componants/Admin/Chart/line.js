import React, { useState, useEffect } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function GridDemo() {
  const [timestampRange, setTimestampRange] = useState([1, 10]);
  const [diseaseRateRange, setDiseaseRateRange] = useState([1, 10]);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [selectedCity, selectedDistrict, timestampRange, diseaseRateRange]);

  const fetchData = async () => {
    try {
      const response = await fetch('YOUR_API_ENDPOINT');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Get unique cities and districts from data
  const cities = [...new Set(data.map(item => item.city))];
  const districts = [...new Set(data.map(item => item.district))];

  // Filter data based on selected city and district
  const filteredData = data.filter(item =>
    (!selectedCity || item.city === selectedCity) &&
    (!selectedDistrict || item.district === selectedDistrict) &&
    item.timestamp >= timestampRange[0] && item.timestamp <= timestampRange[1] &&
    item.diseaseRate >= diseaseRateRange[0] && item.diseaseRate <= diseaseRateRange[1]
  );

  return (
    <div>
      <div>
        <label>Timestamp Range:</label>
        <input
          type="number"
          value={timestampRange[0]}
          onChange={e => setTimestampRange([parseInt(e.target.value), timestampRange[1]])}
        />
        <input
          type="number"
          value={timestampRange[1]}
          onChange={e => setTimestampRange([timestampRange[0], parseInt(e.target.value)])}
        />
      </div>
      <div>
        <label>Disease Rate Range:</label>
        <input
          type="number"
          value={diseaseRateRange[0]}
          onChange={e => setDiseaseRateRange([parseInt(e.target.value), diseaseRateRange[1]])}
        />
        <input
          type="number"
          value={diseaseRateRange[1]}
          onChange={e => setDiseaseRateRange([diseaseRateRange[0], parseInt(e.target.value)])}
        />
      </div>
      <div>
        <label>City:</label>
        <select
          value={selectedCity}
          onChange={e => setSelectedCity(e.target.value)}
        >
          <option value="">All</option>
          {cities.map(city => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>
      <div>
        <label>District:</label>
        <select
          value={selectedDistrict}
          onChange={e => setSelectedDistrict(e.target.value)}
        >
          <option value="">All</option>
          {districts.map(district => (
            <option key={district} value={district}>{district}</option>
          ))}
        </select>
      </div>
      <LineChart
        xAxis={[{ data: filteredData.map(item => item.timestamp) }]}
        series={[{ data: filteredData.map(item => item.diseaseRate) }]}
        height={300}
        margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
        grid={{ vertical: true, horizontal: true }}
      />
    </div>
  );
}
