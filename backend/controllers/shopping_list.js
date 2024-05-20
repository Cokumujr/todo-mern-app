const ShoppingList = require("../models/shopping_list");

const getItems = async(req, res) => {
    const items = await ShoppingList.find({ user: req.user.id })
    res.send({ count: items.length, items: items })
}


const getItemById = async(req, res) => {
    const { id } = req.params
    try {
        const item = await ShoppingList.findById({ "_id": id})
        if(!item) return res.status(404).send({ error: `Item with id: ${id} not found!!` })
        res.send(item).status(200)
    } catch (error) {
        console.log({ error: error.message })
        return res.status(400).send({ error: error.message })
    }
}

const updateItem = async(req, res) => {
    const { body, params: { id } } = req
    try {
        const item = await ShoppingList.findByIdAndUpdate(id, {...body}, { new: true })
        if(!item) return res.status(404).send({ error: `Item with id: ${id} not found!!` })
        res.send(item).status(200)
    } catch (error) {
        console.log({ error: error.message })
        return res.status(400).send({ error: error.message })
    }
}

const deleteItem = async(req, res) => {
    const { id } = req.params
    try {
        const item = await ShoppingList.findByIdAndDelete({ "_id": id })
        if(!item) return res.status(404).send({ error: `Item with id: ${id} not found!!` })
        res.send(item).status(200)
    } catch (error) {
        console.log({ error: error.message })
        return res.status(400).send({ error: error.message })
    }
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
    createItem,
    getItemById,
    updateItem,
    deleteItem
}