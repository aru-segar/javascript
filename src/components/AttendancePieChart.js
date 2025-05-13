import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

// Dummy data
const data = [
  { status: 'Present', count: 70 },
  { status: 'Absent', count: 20 },
  { status: 'Late', count: 10 }
];

// Colors for each slice
const COLORS = ['#4CAF50', '#F44336', '#FFC107'];

const renderTooltipContent = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const total = data.reduce((sum, entry) => sum + entry.count, 0);
    const percent = ((payload[0].value / total) * 100).toFixed(1);
    return (
      <div style={{ background: '#fff', padding: '8px', border: '1px solid #ccc' }}>
        <strong>{payload[0].name}</strong>: {percent}%
      </div>
    );
  }
  return null;
};

const AttendancePieChart = () => {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <h3>Attendance Overview</h3>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="count"
            nameKey="status"
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip content={renderTooltipContent} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendancePieChart;
