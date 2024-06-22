import Users from '../models/Users.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const getAllUsers = async (req, res) => {
  try {
    const users = await Users.find()
    return res.status(200).json({ users })
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const createUser = async (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ message: 'Name, email, and password are required' })
  }

  try {
    const existingUser = await Users.findOne({ email })
    if (existingUser) {
      return res
        .status(409)
        .json({ message: 'User with this email already exists' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await Users.create({
      name,
      email,
      password: hashedPassword,
    })

    const userWithoutPassword = user.toObject()
    delete userWithoutPassword.password

    return res.status(200).json({ user: userWithoutPassword })
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Internal server error', error: error.message })
  }
}

export const updateUser = async (req, res) => {
  const { id } = req.params
  const { name, email, password } = req.body
  try {
    const hashedPassword = bcrypt.hashSync(password, 10)
    const user = await Users.findByIdAndUpdate(id, {
      name,
      email,
      password: hashedPassword,
    })
    return res.status(200).json({ user })
  } catch (error) {
    return res.status(404).json({ message: 'Error Occoured' })
  }
}

export const deleteUser = async (req, res) => {
  const { id } = req.params
  try {
    const user = await Users.findByIdAndDelete(id)
    return res.status(200).json({ user })
  } catch (error) {
    return res.status(404).json({ message: 'Error Occoured' })
  }
}

export const authenticateUser = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await Users.findOne({ email })
    if (user && bcrypt.compareSync(password, user.password)) {
      const userWithoutPassword = user.toObject()
      delete userWithoutPassword.password

      const accessToken = jwt.sign(
        { email: user.email, id: user._id },
        process.env.JWT_ACCESS_TOKEN_SECRET
      )

      return res.status(200).json({ user: userWithoutPassword, accessToken })
    } else {
      return res.status(401).json({ message: 'Invalid credentials' })
    }
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' })
  }
}
