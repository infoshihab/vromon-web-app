const mongoose = require("mongoose");
const mongo_url = "mongodb://127.0.0.1:27017/vromon";
const initData = require("./data.js");
const Listing = require("../models/listing.js");

main()
  .then(() => {
    console.log("Connected to db");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(mongo_url);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "67fd40d12780616968b67718",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};
initDB();
