var router = require('express').Router()
const authMiddleware = require ('../middleware/verify-auth')
const {
  login, signup, catList,
  liked, unliked, addInterest, autologin,
  removeInterest, updatePreferences
} = require('./../controllers/catsController')


router.get('/login', login)
router.post('/signup', signup)
router.post('/autologin', authMiddleware, autologin)

router.get('/', authMiddleware, catList) // devolver la lista de los gatos
router.post('/liked', authMiddleware, liked)
router.post('/unliked', authMiddleware, unliked)
router.post('/interest', addInterest)
router.delete('/interest', removeInterest)
router.put('/preferences', authMiddleware, updatePreferences)

module.exports = router
