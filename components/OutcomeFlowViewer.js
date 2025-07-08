import { useEffect, useState } from 'react';

export default function OutcomeFlowViewer({ selectedOutcome }) {
  const [flow, setFlow] = useState(null);

  useEffect(() => {
    if (!selectedOutcome) return;

    fetch(`/api/outcome?confirmed_outcome=${encodeURIComponent(selectedOutcome)}`)
      .then(res => res.json())
      .then(data => setFlow(data));
  }, [selectedOutcome]);

  if (!flow) return <div>Loading outcome flow...</div>;

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