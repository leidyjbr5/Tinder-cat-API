const CatModel = require('../../models/cat')

const removeInterest = async (catId, interestId) => {
  try {
    const cat = await CatModel.findById(catId)
    cat.interests.pull(interestId)
    cat.save()
    return { status: 1, cat }
  } catch (err) {
    return { status: 2, msg: 'Interest not removed to cat' }
  }
}

module.exports = removeInterest
