
const MONGO_USERNAME = `khanhchuong`;
const MONGO_PASSWORD = `s4gXPGHGxeQL4i`;
const MONGO_DB = `SocialMedia`;
const connectionString = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}go@cluster0.upzro.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`;

module.exports = { connectionString }