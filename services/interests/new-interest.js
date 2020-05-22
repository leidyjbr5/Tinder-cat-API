const InterestModel = require('../../models/interests')

const newInterest = async(interestData) => {
  try {
    const interest = await InterestModel(interestData).save()
    return { status: 1, interest }
  } catch(err){
    return { status: 2, msg: 'Error saving nwe interest'}
  }

}

module.exports = newInterest
