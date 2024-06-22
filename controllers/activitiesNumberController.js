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

export const updateActivitiesNumber = async (req, res) => {
  const { happyPeople, offices, staff, volunteers } = req.body

  try {
    const updatedActivitiesNumber = await ActivitiesNumber.findOneAndUpdate(
      {},
      { happyPeople, offices, staff, volunteers },
      { new: true }
    )

    return res.status(200).json({ actNumber: updatedActivitiesNumber })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: 'An Error Occured',
    })
  }
}
