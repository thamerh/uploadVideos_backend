import Video from '../models/video.js';
import multer from 'multer';

 export const createVideo = async (req, res) => {
  const { filename, mimetype, size } = req.file;
  const { title, description } = req.body;

  try {
    const video = await Video.create({
      title,
      description,
      filename,
      mimetype,
      size
    });

    res.status(201).json(video);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error uploading video' });
  }
};
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
export const upload = multer({ storage: storage }); 