const express = require('express');
const router = express.Router();
const {
  getJobs,
  addJob,
  updateJob,
  deleteJob,
} = require('../controllers/jobController');
const protect = require('../middleware/authMiddleware');
const upload = require('../config/multerConfig');

router.get('/', protect, getJobs);
router.post('/', protect, upload.single('resume'), addJob);
router.put('/:id', protect, updateJob);
router.delete('/:id', protect, deleteJob);

module.exports = router;