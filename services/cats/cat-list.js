const CatModel = require('./../../models/cat')

const MONTHS_YEAR = 12

const listCats = async (catId) => {
  try {
    const catLogged = await CatModel.findById(catId)
    const excludeCatsIds = [
      catLogged.id,
      ...catLogged.cats_likes,
      ...catLogged.cats_unlikes,
      ...catLogged.cats_matches
    ]

    const minPreferenceAgeInMonths = catLogged.preferences.age_min * MONTHS_YEAR
    const maxPreferenceAgeInMonths = catLogged.preferences.age_max * MONTHS_YEAR

    const currentDate = new Date()
    const dateTo = currentDate.setMonth(currentDate.getMonth() - minPreferenceAgeInMonths)
    const dateFrom = currentDate.setMonth(currentDate.getMonth() - maxPreferenceAgeInMonths)

    const catsAvailable = await CatModel.find({
      gender: catLogged.preferences.gender,
      birthday: { $gte: dateFrom, $lte: dateTo },
      interests: { $in: catLogged.interests },
      _id: { $nin: excludeCatsIds }
    })

    return { status: 1, catsAvailable }
  } catch (err) {
    console.log(err)
    return { status: 2, msg: 'Error list cats' }
  }
}

module.exports = listCats
