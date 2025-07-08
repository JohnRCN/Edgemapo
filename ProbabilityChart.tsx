import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const ProbabilityChart = ({ data }) => (
  <div className="p-4 border rounded-xl shadow mt-4">
    <h2 className="text-lg font-semibold mb-2">Probabilities</h2>
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="probability" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default ProbabilityChart;
