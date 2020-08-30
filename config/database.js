var mongoose = require('mongoose');

// mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

// database connection event
// mongoose.connection.on('connected', function () {
//   console.log(`Mongoose connected to: ${process.env.DATABASE_URL}`);
// });

mongoose.connect('mongodb://localhost:27017/seasons',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
});


module.exports = mongoose;