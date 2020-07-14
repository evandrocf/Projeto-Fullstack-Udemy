const express = require('express');
const router = express.Router();

const TaskController = require('../controller/TaskController.js');
const TaskValidation = require('../middlewares/TaskValidation.js');

router.post('/', TaskValidation, TaskController.create);
router.put('/:id', TaskValidation, TaskController.update);
router.delete('/:id', TaskController.delete);
router.put('/:id/:done', TaskController.done);

router.get('/filter/all/:macaddress',TaskController.all);
router.get('/:id', TaskController.show);
router.get('/filter/late/:macaddress', TaskController.late);
router.get('/filter/today/:macaddress', TaskController.today);
router.get('/filter/week/:macaddress', TaskController.week);
router.get('/filter/month/:macaddress', TaskController.week);
router.get('/filter/yea/:macaddress', TaskController.year);

module.exports = router;
