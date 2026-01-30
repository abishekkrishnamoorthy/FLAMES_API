const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {create}=require('../controllers/controller');
const validation = require('../middleware/validation');
const data = require('../model/Data')
router.post('/data', validation(data), create);

module.exports = router;
