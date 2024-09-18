const express = require('express')

const app = express()

app.get('/number/:value1/:value2', (req, res) => {
    try {
        let { value1, value2 } = req.params
        if (value1 < 0 && value2 < 0) {
            throw new Error("value must greater then 0");
        }
        let result = value1 / value2
        res.json(result)
    } catch (error) {
        throw new Error(error);

    }

})


app.listen(3000)