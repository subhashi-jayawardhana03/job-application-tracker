const multer = require('multer');
const path = require('path');

// File එක කොහෙද save කරන්නද, මොන නමින්ද කියලා configure කරමු
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    // Unique file name එකක් හදමු: timestamp + original name
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

// PDF files විතරක් allow කරමු
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(new Error('PDF files විතරක් upload කරන්න පුළුවන්!'), false);
  }
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 }, // Max 5MB
});

module.exports = upload;