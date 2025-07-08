import outcomeData from '../../data/edgemap_outcome_flow.json';

export default function handler(req, res) {
  const { confirmed_outcome } = req.query;

  if (confirmed_outcome) {
    const result = outcomeData.find(
      item => item.confirmed_outcome.toLowerCase() === confirmed_outcome.toLowerCase()
    );
    if (result) return res.status(200).json(result);
    return res.status(404).json({ message: 'Outcome not found' });
  }

  res.status(200).json(outcomeData);
}