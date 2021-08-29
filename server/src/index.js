import express from 'express';
import router from './routes/index.js';

const app = express()


app.use("/api", router)

const port = 3000

app.listen(port, (req, res) => {
    console.log("server is running on port: " + port)
})