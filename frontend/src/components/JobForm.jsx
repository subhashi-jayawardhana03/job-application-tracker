import { useState } from 'react';

function JobForm({ onAddJob }) {
  const [formData, setFormData] = useState({
    company: '',
    position: '',
    jobType: 'Internship',
    appliedDate: '',
    jobUrl: '',
    status: 'Applied',
    notes: '',
  });
  const [resumeFile, setResumeFile] = useState(null);
  const [fileName, setFileName] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // File select කරන කොට
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file && file.type !== 'application/pdf') {
      alert('PDF file එකක් විතරක් upload කරන්න!');
      e.target.value = '';
      return;
    }

    setResumeFile(file);
    setFileName(file ? file.name : '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.company || !formData.position) {
      alert('Company and Position අනිවාර්යයි!');
      return;
    }

    // FormData object එකක් හදනවා — text fields + file එකට support වෙන type එක
    const dataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      dataToSend.append(key, formData[key]);
    });
    if (resumeFile) {
      dataToSend.append('resume', resumeFile);
    }

    onAddJob(dataToSend);

    // Reset
    setFormData({
      company: '',
      position: '',
      jobType: 'Internship',
      appliedDate: '',
      jobUrl: '',
      status: 'Applied',
      notes: '',
    });
    setResumeFile(null);
    setFileName('');
    e.target.reset();
  };

  return (
    <div className="job-form-container">
      <h2>➕ Add New Application</h2>
      <form onSubmit={handleSubmit} className="job-form">
        <input
          type="text"
          name="company"
          placeholder="Company Name"
          value={formData.company}
          onChange={handleChange}
        />

        <input
          type="text"
          name="position"
          placeholder="Job Position"
          value={formData.position}
          onChange={handleChange}
        />

        <select name="jobType" value={formData.jobType} onChange={handleChange}>
          <option value="Internship">Internship</option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
        </select>

        <input
          type="date"
          name="appliedDate"
          value={formData.appliedDate}
          onChange={handleChange}
        />

        <input
          type="text"
          name="jobUrl"
          placeholder="Job URL (optional)"
          value={formData.jobUrl}
          onChange={handleChange}
        />

        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Selected">Selected</option>
          <option value="Rejected">Rejected</option>
        </select>

        <textarea
          name="notes"
          placeholder="Notes (optional)"
          value={formData.notes}
          onChange={handleChange}
        ></textarea>

        {/* CV Upload */}
        <div className="file-upload-box">
          <label htmlFor="resume-upload" className="file-upload-label">
            📎 {fileName || 'Attach CV/Resume (PDF)'}
          </label>
          <input
            id="resume-upload"
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="file-input-hidden"
          />
        </div>

        <button type="submit">Add Application</button>
      </form>
    </div>
  );
}

export default JobForm;