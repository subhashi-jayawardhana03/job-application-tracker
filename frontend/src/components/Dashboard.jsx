function Dashboard({ jobs }) {
  const total = jobs.length;
  const applied = jobs.filter((job) => job.status === 'Applied').length;
  const interview = jobs.filter((job) => job.status === 'Interview').length;
  const selected = jobs.filter((job) => job.status === 'Selected').length;
  const rejected = jobs.filter((job) => job.status === 'Rejected').length;

  const stats = [
    { label: 'Total Applications', value: total, icon: '📊', color: '#6366f1' },
    { label: 'Applied', value: applied, icon: '📤', color: '#3b82f6' },
    { label: 'Interviews', value: interview, icon: '🎤', color: '#f59e0b' },
    { label: 'Selected', value: selected, icon: '✅', color: '#10b981' },
    { label: 'Rejected', value: rejected, icon: '❌', color: '#ef4444' },
  ];

  return (
    <div className="dashboard">
      {stats.map((stat) => (
        <div key={stat.label} className="stat-card">
          <div
            className="stat-icon"
            style={{ background: `${stat.color}1a`, color: stat.color }}
          >
            {stat.icon}
          </div>
          <div className="stat-details">
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;