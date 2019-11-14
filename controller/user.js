const User = require('../model/user')

export const createController = async (req, res, next) => {
    const sender_id = req.body.sender_id
    const receiver = req.body.receiver_id
    const content = req.body.content
    const user = await new User().fetch()

    res.json(user.toJSON())
}