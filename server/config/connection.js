const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://makeithappenmike:13Benny!Buddy79*@cluster0.oj3hbc6.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;