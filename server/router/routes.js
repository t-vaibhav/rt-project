import { Router } from "express";
const router = Router();

/** import controllers */
import * as controller from '../controllers/controller.js';

/** Questions Routes API */

router.route('/register')
    .get(controller.getDetails) /** GET Request */
    .post(controller.storeDetails) /** POST Request */
    .delete(controller.dropDetails) /** DELETE Request */

router.route('/login')
    .post(controller.inputDetails) /** POST Request */

router.route('/post')
    .post(controller.addPost)

export default router;