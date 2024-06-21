import Newsletter from '../models/NewsLetter.js'

export const getAllNewsletterSubscribers = async (req, res) => {
  try {
    const subscribers = await Newsletter.find()
    res.status(200).json(subscribers)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const subscribeToNewsletter = async (req, res) => {
  const { email } = req.body
  const newSubscriber = new Newsletter({ email })

  try {
    await newSubscriber.save()
    res.status(200).json({ message: 'Subscribed successfully' })
  } catch (error) {
    res.status(500).json({ message: 'An error occoured' })
  }
}
