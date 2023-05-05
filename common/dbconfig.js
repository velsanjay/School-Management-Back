const mongoose = require('mongoose');
const DBName = 'StudentManagement'
const name ='sanjaymech2313'

mongoose.connect(`mongodb+srv://${name}:Jayamani12@sanjay.jhuniif.mongodb.net/${DBName}`,
{useNewUrlParser: true, useUnifiedTopology: true }
)