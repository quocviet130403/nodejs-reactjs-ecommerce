const express = require('express')
const app = express()
const port = 5000;
app.use(express.json())

app.get('/', (req, res) => {
    res.send("okie")
})

app.listen(port, () => {
    console.log(`Chạy trên port ${port}`);
})