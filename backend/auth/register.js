const bcrypt = require("bcryptjs");
const User = require("../models/user");

const register = async(req, res) => {
    const { username, email, first_name, last_name, password } = req.body

    try {
        const existingUser = await User.findOne({ "email": email })

        if(existingUser) return res.status(400).send({ error: "User already exists" })

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username: username,
            email: email,
            first_name: first_name,
            last_name: last_name,
            password: hashedPassword
        });
        await newUser.save();
        if(!newUser) return res.status(400).send({ error: "User could not be created" })
        res.send(newUser).status(201)

    } catch (error) {
        console.log({ error: error.message })
        return res.status(400).send({ error: error.message })
    }
}

module.exports = {
    register
}