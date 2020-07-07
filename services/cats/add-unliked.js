const CatModel = require('../../models/cat')

const addUnLiked = async (catId, catIdUnLiked) => {
  try{
    const cat = await CatModel.findById(catId)
    cat.cats_unlikes.push(catIdUnLiked)
    cat.save()
    return { status: 1, cat }
  }catch(err){
    return { status: 2, msg: 'interaction not added'}
  }
}

module.exports = addUnLiked
