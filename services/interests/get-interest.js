const InterestsModel = require('../../models/interests')

const getInterests = async () => {
  try {
    const interest = await InterestsModel.find()
    return { status: 1, interest }
  } catch (err) {
    return { status: 2, err }
  }

}

module.exports = getInterests
