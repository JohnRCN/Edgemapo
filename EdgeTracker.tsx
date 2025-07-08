import React from 'react';

const EdgeTracker = () => {
  const edges = [
    { date: '2025-07-03', setup: 'Gap + VWAP + Volume', outcome: 'Win' },
    { date: '2025-07-02', setup: 'Inside Bar Fail', outcome: 'Loss' },
  ];

  return (
    <div className="p-4 border rounded-xl shadow mt-4">
      <h2 className="text-lg font-semibold mb-2">Edge Tracker</h2>
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="border-b p-2">Date</th>
            <th className="border-b p-2">Setup</th>
            <th className="border-b p-2">Outcome</th>
          </tr>
        </thead>
        <tbody>
          {edges.map((edge, idx) => (
            <tr key={idx}>
              <td className="p-2 border-b">{edge.date}</td>
              <td className="p-2 border-b">{edge.setup}</td>
              <td className={`p-2 border-b ${edge.outcome === 'Win' ? 'text-green-600' : 'text-red-600'}`}>
                {edge.outcome}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EdgeTracker;
