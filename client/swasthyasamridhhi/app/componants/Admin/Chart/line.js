import React, { useState, useEffect } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function GridDemo() {
  const [timestampRange, setTimestampRange] = useState([1, 5]); // Default timestamp range
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [timestampRange]);

  const fetchData = async () => {
    try {
      // Simulating fetching data from an API
      const fakeData = [
        { timestamp: 1, diseaseRate: 5 },
        { timestamp: 2, diseaseRate: 8 },
        { timestamp: 3, diseaseRate: 12 },
        { timestamp: 4, diseaseRate: 6 },
        { timestamp: 5, diseaseRate: 7 },
        { timestamp: 6, diseaseRate: 8 },
        { timestamp: 8, diseaseRate: 9 },
        { timestamp: 9, diseaseRate: 10 },
        { timestamp: 9, diseaseRate: 11 },
        
      ];
      setData(fakeData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Filter data based on selected timestamp range
  const filteredData = data.filter(item =>
    item.timestamp >= timestampRange[0] && item.timestamp <= timestampRange[1]
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
