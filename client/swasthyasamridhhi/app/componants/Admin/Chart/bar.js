import React, { useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const chartSetting = {
  xAxis: [
    {
      label: 'Disease',
    },
  ],
  width: 600,
  height: 400,
};

const dataset = [
  {
    Typhoid: 59,
    Dengue: 57,
    Arithritis: 86,
    BloodPressure: 21,
    month: 'Jan',
  },
  {
    Typhoid: 50,
    Dengue: 52,
    Arithritis: 78,
    BloodPressure: 28,
    month: 'Fev',
  },
  {
    Typhoid: 47,
    Dengue: 53,
    Arithritis: 106,
    BloodPressure: 41,
    month: 'Mar',
  },
  {
    Typhoid: 54,
    Dengue: 56,
    Arithritis: 92,
    BloodPressure: 73,
    month: 'Apr',
  },
  {
    Typhoid: 57,
    Dengue: 69,
    Arithritis: 92,
    BloodPressure: 99,
    month: 'May',
  },
  {
    Typhoid: 60,
    Dengue: 63,
    Arithritis: 103,
    BloodPressure: 144,
    month: 'June',
  },
  {
    Typhoid: 59,
    Dengue: 60,
    Arithritis: 105,
    BloodPressure: 319,
    month: 'July',
  },
  {
    Typhoid: 65,
    Dengue: 60,
    Arithritis: 106,
    BloodPressure: 249,
    month: 'Aug',
  },
  {
    Typhoid: 51,
    Dengue: 51,
    Arithritis: 95,
    BloodPressure: 131,
    month: 'Sept',
  },
  {
    Typhoid: 60,
    Dengue: 65,
    Arithritis: 97,
    BloodPressure: 55,
    month: 'Oct',
  },
  {
    Typhoid: 67,
    Dengue: 64,
    Arithritis: 76,
    BloodPressure: 48,
    month: 'Nov',
  },
  {
    Typhoid: 61,
    Dengue: 70,
    Arithritis: 103,
    BloodPressure: 25,
    month: 'Dec',
  },
];

const valueFormatter = (value) => `${value}mm`;

export default function HorizontalBars() {
  const [selectedDisease, setSelectedDisease] = useState('Blood-Pressure');

  const handleDiseaseChange = (event) => {
    setSelectedDisease(event.target.value);
  };

  return (
    <div>
      <div>
        <label>Select Disease:</label>
        <select value={selectedDisease} onChange={handleDiseaseChange}>
          <option value="Typhoid">Typhoid</option>
          <option value="Dengue">Dengue</option>
          <option value="Arithritis">Arithritis</option>
          <option value="BloodPressure">Blood Pressure</option>
        </select>
      </div>
      <BarChart
        dataset={dataset}
        yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
        series={[{ dataKey: selectedDisease, label: `${selectedDisease} Disease`, valueFormatter }]}
        layout="horizontal"
        {...chartSetting}
      />
    </div>
  );
}
