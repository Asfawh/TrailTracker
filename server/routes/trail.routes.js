import { Router } from 'express';
import {
  createTrail,
  getOneTrail,
  getAllTrail,
  updateOneTrail,
  deleteOneTrail,
} from '../controllers/trail.controller.js';

const router = Router();

router.route('/').get(getAllTrail).post(createTrail);

router
  .route('/:id')
  .get(getOneTrail)
  .put(updateOneTrail)
  .delete(deleteOneTrail);

export default router;
