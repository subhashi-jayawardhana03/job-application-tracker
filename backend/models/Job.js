const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    company: {
      type: String,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    jobType: {
      type: String,
      enum: ['Internship', 'Full-time', 'Part-time'],
      default: 'Internship',
    },
    appliedDate: {
      type: Date,
      default: Date.now,
    },
    jobUrl: {
      type: String,
    },
    status: {
      type: String,
      enum: ['Applied', 'Interview', 'Selected', 'Rejected'],
      default: 'Applied',
    },
    notes: {
      type: String,
    },
        resumeUrl: {
      type: String,
      default: '',
    },
  },
  { timestamps: true } 
);

module.exports = mongoose.model('Job', jobSchema);