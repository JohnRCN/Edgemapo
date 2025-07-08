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
import OutcomeFlowViewer from './components/OutcomeFlowViewer';

function App() {
  return (
    <div className="p-6">
      <OutcomeFlowViewer selectedOutcome="VWAP Rejection" />
    </div>
  );
}

export default App;

