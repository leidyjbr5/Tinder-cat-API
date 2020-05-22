const InterestsModel = require('../../models/interests')

const getInterests = async () => {
  const interests = await InterestsModel.find()
  return { interest: interests }
}

module.exports = getInterests
