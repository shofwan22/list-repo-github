const StatProfile = ({ ...prop }) => {
  const { type, number } = prop;
  return (
    <div className="stat py-3">
      <div className="stat-title text-slate-600 opacity-100">{type}</div>
      <div className="stat-value text-base">{number}</div>
    </div>
  );
};

export default StatProfile;
