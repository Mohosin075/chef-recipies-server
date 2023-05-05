const express = require("express");
const app = express();
const port = 5000;

const cors = require('cors')

app.use(cors())

const data = require('./data.json');
const popular = require('./popular.json');

// app.get("/", (req, res) => {
//   res.send("Server is running!");
// });

app.get('/', (req, res)=>{
    res.send(data)
})
app.get('/popular', (req, res)=>{
    res.send(popular)
})

app.get('/:id', (req, res)=>{
  const id = parseInt(req.params.id);
  const selected = data.find(i=>parseInt(i.id) === id);
  res.send(selected)
})

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
