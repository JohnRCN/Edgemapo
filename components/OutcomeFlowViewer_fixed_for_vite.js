import { useEffect, useState } from 'react';
import outcomeData from '../data/edgemap_outcome_flow.json';

export default function OutcomeFlowViewer({ selectedOutcome }) {
  const [flow, setFlow] = useState(null);

  useEffect(() => {
    if (!selectedOutcome) return;

    const result = outcomeData.find(
      item => item.confirmed_outcome.toLowerCase() === selectedOutcome.toLowerCase()
    );

    setFlow(result || null);
  }, [selectedOutcome]);

  if (!flow) return <div>Outcome not found or loading...</div>;

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">{flow.confirmed_outcome} → Next Probable Outcomes</h2>
      <ul className="list-disc ml-6">
        {flow.next_outcomes.map((item, index) => (
          <li key={index}>
            <strong>{item.name}</strong> ({Math.round(item.probability * 100)}%) – {item.trigger} [{item.category}]
          </li>
        ))}
      </ul>
    </div>
  );
}