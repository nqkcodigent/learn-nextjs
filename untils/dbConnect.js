const mongoose = require("mongoose");

async function dbConnect() {
  try {
   await mongoose.connect(
      "mongodb+srv://nqkcodient:KhanhNguyen121120@cluster0.w6r3w.mongodb.net/nextjs",{use}
    );
  } catch (error) {}
}
