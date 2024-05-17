const ShoppingList = require("../models/shopping_list");

const getItems = async(req, res) => {
    const items = await ShoppingList.find({ user: req.user.id })
    res.send({ count: items.length, items: items })
}

const createItem = async(req, res) => {
    const { item, quantity, total_price } = req.body

    if(!item || !quantity || !total_price) return res.status(400).send({ error: "Please provide all the fields" })
    
    try {
        const newItem = new ShoppingList({
            user: req.user.id,
            item: item,
            quantity: quantity,
            total_price: total_price
        })
        await newItem.save()

        if(!newItem) return res.status(400).send({ error: "Something went wrong!!" });

        res.send(newItem).status(201)

    } catch (error) {
        console.log({ error: error.message });
        return res.status(400).send({ error: error.message })
    }
}

module.exports = {
    getItems,
    createItem
}