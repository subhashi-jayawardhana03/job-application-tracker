import { useState } from 'react';

function JobItem({ job, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({ ...job });

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    onUpdate(job._id, { status: newStatus });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleSave = () => {
    onUpdate(job._id, editData);
    setIsEditing(false);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Applied':
        return '#3498db';
      case 'Interview':
        return '#f39c12';
      case 'Selected':
        return '#2ecc71';
      case 'Rejected':
        return '#e74c3c';
      default:
        return '#95a5a6';
    }
  };

  if (isEditing) {
    return (
      <tr>
        <td>
          <input
            name="company"
            value={editData.company}
            onChange={handleEditChange}
          />
        </td>
        <td>
          <input
            name="position"
            value={editData.position}
            onChange={handleEditChange}
          />
        </td>
        <td>{editData.jobType}</td>
        <td>
          <input
            type="date"
            name="appliedDate"
            value={editData.appliedDate?.slice(0, 10)}
            onChange={handleEditChange}
          />
        </td>
        <td>{editData.status}</td>
        <td>
          {job.resumeUrl ? (
            <a
              href={`http://localhost:5000${job.resumeUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cv-link"
            >
              CV
            </a>
          ) : (
            <span className="no-cv">-</span>
          )}
        </td>
        <td>
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </td>
      </tr>
    );
  }

  return (
    <tr>
      <td>{job.company}</td>
      <td>{job.position}</td>
      <td>{job.jobType}</td>
      <td>{job.appliedDate ? job.appliedDate.slice(0, 10) : '-'}</td>
      <td>
        <select
          value={job.status}
          onChange={handleStatusChange}
          style={{ color: getStatusColor(job.status), fontWeight: 'bold' }}
        >
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Selected">Selected</option>
          <option value="Rejected">Rejected</option>
        </select>
      </td>
      <td>
        {job.resumeUrl ? (
          <a
            href={`http://localhost:5000${job.resumeUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="cv-link"
          >
            CV
          </a>
        ) : (
          <span className="no-cv">-</span>
        )}
      </td>
      <td>
        <button onClick={() => setIsEditing(true)}>Edit</button>
        <button onClick={() => onDelete(job._id)}>Delete</button>
      </td>
    </tr>
  );
}

export default JobItem;