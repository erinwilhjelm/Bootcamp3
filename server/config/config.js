//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb+srv://erin:123@bootcamp2-34fd6.mongodb.net/test?retryWrites=true&w=majority'
  }, 
  openCage: {
    key: '090538dd5b864c08af6d6761ebdea087' //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
  },
  port: 8080
};