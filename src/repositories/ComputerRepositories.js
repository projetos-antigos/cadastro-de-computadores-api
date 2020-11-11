const { update } = require("../models/ComputerModel");
const Computer = require("../models/ComputerModel");

module.exports = {
  async store(data) {
    const computer = new Computer(data);
    await computer.save();
    computer.createdAt = undefined;
    computer.updatedAt = undefined;
    computer.__v = undefined;
    return computer;
  },

  async findById(id) {
    return await Computer.findById(id).select([
      "-createdAt",
      "-updatedAt",
      "-__v",
    ]);
  },

  async find() {
    return await Computer.find().select(["-createdAt", "-updatedAt", "-__v"]);
  },

  async delete(id) {
    const computer = Computer.findByIdAndDelete(id).select([
      "-password",
      "-createdAt",
      "-updatedAt",
      "-__v",
    ]);

    return computer;
  },

  async update(id, fields) {
    const computer = await Computer.findByIdAndUpdate(id, fields).select([
      "-password",
      "-createdAt",
      "-updatedAt",
      "-__v",
    ]);

    return computer;
  },
};
