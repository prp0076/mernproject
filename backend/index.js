const express = require('express')
const cors = require('cors');
const app = express()
const port = 8000
const mongoDB = require("./db_connnection");
mongoDB();

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// resolve cors policy error
 app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
})
app.use(express.json());
app.use(cors());
app.use('/api',require("./Routes/createUser"));
app.use('/api',require("./Routes/Displaydata"));
app.use('/api',require("./Routes/OrderData"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})