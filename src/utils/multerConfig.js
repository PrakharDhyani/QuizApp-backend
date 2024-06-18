// src/utils/multerConfig.js
import multer from 'multer';
import path from 'path';

// Define storage for uploaded images
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', '..', 'public', 'images'));
  },
  filename: function (req, file, cb) {
    // Generate a unique filename
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// Define file filter to allow only image files
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed'), false);
  }
};

// Initialize Multer with configuration
const upload = multer({ storage: storage, fileFilter: fileFilter });

export default upload;
