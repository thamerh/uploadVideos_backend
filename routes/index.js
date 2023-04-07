import express from 'express';
import {createVideo,upload} from '../controllers/videoController.js'


const router = express.Router();
router.post('/upload', upload.single('video'), createVideo);

export default router;