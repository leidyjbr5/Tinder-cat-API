const loginService = require('../services/cats/login')
const signupService = require('../services/cats/signup')
const addInterestService = require('../services/cats/add-interest')
const removeInterestService = require('../services/cats/remove-interest')
const updatePreferencesService = require('../services/cats/update-preferences')
const addLikedService = require('../services/cats/add-liked')
const addUnLikedService = require('../services/cats/add-unliked')
const catListService = require('../services/cats/cat-list')
const autologinService = require('../services/cats/autologin')

const login = async(req, res) => {
  const { email, password } = req.query
  const response = await loginService(email, password)
  res.json(response)
}

const signup = async(req, res) => {
  const cat = req.body
  const response = await signupService(cat)
  res.json(response)
}

const autologin = async(req, res) => {
  const { catId } = req.query
  const response = await autologinService(catId)
  res.json(response)
}

const catList = async(req, res) => {
  const { catId } = req.query
  const response = await catListService(catId)
  res.json(response)
}

const liked = async(req, res) => {
  const { catId, catIdLiked } = req.body
  const response = await addLikedService ( catId, catIdLiked )
  res.json(response)
}

const unliked = async (req, res) => {
  const { catId, catIdUnLiked } = req.body
  const response = await addUnLikedService ( catId, catIdUnLiked )
  res.json(response)
}

const addInterest = async (req, res) => {
  const { catId, interestId } = req.body
  const response = await addInterestService(catId, interestId)
  res.json(response)
}

const removeInterest = async (req, res) => {
  const { catId, interestId } = req.body
  const response = await removeInterestService(catId, interestId)
  res.json(response)
}

const updatePreferences = async (req, res) => {
  const { preferences } = req.body
  const { catId } = req.query
  const response = await updatePreferencesService(catId, preferences)
  res.json(response)
}


module.exports = {
    login,
    signup,
    autologin,
    catList,
    liked,
    unliked,
    addInterest,
    removeInterest,
    updatePreferences,
}
