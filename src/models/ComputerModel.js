const mongoose = require("mongoose");

const ComputerSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["desktop", "notebook", "other"],
    required: true,
  },
  nickname: {
    type: String,
    lowercase: true,
    required: true,
  },
  brand: {
    type: String,
    uppercase: true,
    required: true,
  },
  model: {
    type: String,
    uppercase: true,
    required: true,
  },
  processor: {
    type: String,
    uppercase: true,
    required: true,
  },
  operationalSystem: {
    type: String,
    uppercase: true,
    required: true,
  },
  ip: {
    type: String,
    validate: {
      validator: function (ip) {
        return /\b([0-1]?\d{1,2}|2[0-4]\d|25[0-5])(\.([0-1]?\d{1,2}|2[0-4]\d|25[0-5])){3}\b/.test(
          ip
        );
      },
    },
  },
  networkName: {
    type: String,
    lowercase: true,
  },
  ramMemory: {
    type: String,
    required: true,
  },
  ramType: {
    type: Number,
    required: true,
  },
  otherDetails: {
    type: Object,
  },
});

module.exports = mongoose.model("Computer", ComputerSchema);
