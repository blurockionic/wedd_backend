import express from 'express';
import { saveTemplate, getLatestTemplate } from '../controllers/templateController.js'; 

const router = express.Router();

router.post('/api/templates', saveTemplate);
router.get("/api/templates/latest", getLatestTemplate);

export default router;