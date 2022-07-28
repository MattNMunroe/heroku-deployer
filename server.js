const app = require('./app');

require('dotenv').config();


const PORT = process.env.PORT || 3003;

app.listen(process.env.PORT || 3003, (() => {
    console.log(`Listening on port ${process.env.PORT}`)
    }))