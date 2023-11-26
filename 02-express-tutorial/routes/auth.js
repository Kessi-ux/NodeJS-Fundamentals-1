const express = require ('express')
const router = express.Router()

router.post('/', (req, res) => {
    console.log(req.body)
    const { name } = req.body;
    if (name) {
        if (name) {
            return res.status(200).send(`Welcome ${name}`)
        }
    }
    res.status(401).send('Please send your credentials')
})

module.exports = router