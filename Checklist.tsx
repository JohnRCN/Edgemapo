import React, { useState } from 'react';

const Checklist = ({ onApply }) => {
  const conditions = [
    'Price above VWAP',
    'High relative volume',
    'Inside bar breakout',
    'Gap up over resistance',
  ];

  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (condition: string) =>
    setSelected(prev =>
      prev.includes(condition)
        ? prev.filter(c => c !== condition)
        : [...prev, condition]
    );

  return (
    <div className="p-4 border rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-2">Trading Conditions</h2>
      <ul className="space-y-2">
        {conditions.map((condition) => (
          <li key={condition}>
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                className="form-checkbox mr-2"
                checked={selected.includes(condition)}
                onChange={() => toggle(condition)}
              />
              {condition}
            </label>
          </li>
        ))}
      </ul>
      <button
        onClick={() => onApply(selected)}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        Apply
      </button>
    </div>
  );
};

export default Checklist;
