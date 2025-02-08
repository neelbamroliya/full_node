const { Router } = require('express')
const { signup } = require('../controllers/auth')

const router = Router()

router.post('/signup', signup).post('/signin',() => {})

router.post('/forgot-password', () => {})

module.exports = router