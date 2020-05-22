const mongoose = require('mongoose')
const Schema = mongoose.Schema

const InterestsSchema = new Schema ({
  interest: String
})

const Interest = mongoose.model('interests', InterestsSchema)

module.exports = Interest
