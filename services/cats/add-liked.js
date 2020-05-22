const CatModel = require('../../models/cat')

const addLiked = async (catId, catIdLiked) => {
  try{
    const cat = await CatModel.findById(catId)
    cat.cats_likes.push(catIdLiked)
    cat.save()
    return { status: 1, cat }
  }catch(err){
    return { status: 2 }
  }
}

module.exports = addLiked
