require('dotenv').config()
const PORT = process.env.PORT || 5000;
const express = require('express');
const sequelize = require('./db');
const cors = require('cors')
const router = require('./routes/index');
const path = require('path')
const fileUpload = require('express-fileupload');
const models = require('./models/models')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);



// Помилки ініціюються останніми
app.use(errorHandler);


const start = async() =>{
  try{
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on  port ${PORT} `))
  }catch(e){
    console.log(e)
  }
}

start();
