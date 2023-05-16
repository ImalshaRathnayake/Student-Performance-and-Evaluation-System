const mongoose = require("mongoose");
//create a schema in the db
const schema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    registration_number: { type: String, required: true, unique: true },
    index_number: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    re_enter_password: { type: String, required: true },
  },
  { collection: "users" } // Use 'collection' instead of 'collation'
);
//create a user in users collection in pes db
const User = mongoose.model("User", schema);

module.exports = User;
