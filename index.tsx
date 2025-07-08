import React, { useState } from 'react';
import Checklist from './Checklist';
import ProbabilityChart from './ProbabilityChart';
import EdgeTracker from './EdgeTracker';

export default function Home() {
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [probData, setProbData] = useState([
    { name: 'Setup A', probability: 0 },
    { name: 'Setup B', probability: 0 },
    { name: 'Setup C', probability: 0 },
  ]);

  const applyConditions = (conditions: string[]) => {
    setSelectedConditions(conditions);
    setProbData([
      { name: 'Setup A', probability: Math.min(conditions.length * 20 + 28, 95) },
      { name: 'Setup B', probability: Math.min(conditions.length * 15 + 22, 85) },
      { name: 'Setup C', probability: Math.min(conditions.length * 12 + 18, 75) },
    ]);
  };

  return (
    <main className="p-6 space-y-6">
      <Checklist onApply={applyConditions} />
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-gray-100 rounded-lg text-center">✅ {selectedConditions.length} Conditions Met</div>
        <div className="p-4 bg-gray-100 rounded-lg text-center">📊 Top Setup: {probData[0].probability}%</div>
        <div className="p-4 bg-gray-100 rounded-lg text-center">⏱️ Avg Hold: 15min</div>
      </div>
      <ProbabilityChart data={probData} />
      <EdgeTracker />
    </main>
  );
}
