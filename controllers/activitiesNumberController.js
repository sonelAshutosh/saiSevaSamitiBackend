import ActivitiesNumber from '../models/ActivitiesNumber.js'

export const getActivitiesNumber = async (req, res) => {
  try {
    const actNumber = await ActivitiesNumber.find()

    return res.status(200).json({
      actNumber: actNumber[0],
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: 'An Error Occured',
    })
  }
}
