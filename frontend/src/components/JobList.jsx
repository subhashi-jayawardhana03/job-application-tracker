import JobItem from './JobItem';

function JobList({ jobs, onUpdate, onDelete }) {
  if (jobs.length === 0) {
    return <p className="no-jobs">No applications yet. Add one above!</p>;
  }

  return (
    <table className="job-table">
      <thead>
        <tr>
          <th>Company</th>
          <th>Position</th>
          <th>Type</th>
          <th>Applied Date</th>
          <th>Status</th>
          <th>CV</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {jobs.map((job) => (
          <JobItem
            key={job._id}
            job={job}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
}

export default JobList;