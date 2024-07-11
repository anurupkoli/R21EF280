const express = require("express");
const cors = require("cors");
const app = express();

const PORT = 8000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/data", require('./routes/data'));

app.listen(PORT,()=>{
    console.log(PORT);
})