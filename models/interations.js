const mongoose = require('mongoose')
const Schema = mongoose.Schema

const InterationsSchema = new Schema ({
  cat_id: String,
  cats_likes: [String],
  cats_unlikes: [String],
  cats_matches: [String]
})

const Interation = mongoose.model('interactions', InterationsSchema)

module.exports = Interation
