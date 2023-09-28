const router = require('express').Router();
const { departmentFinAllController } = require('../controllers/department');

router.get('/', departmentFinAllController);

module.exports = router;