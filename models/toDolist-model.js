const mongoose = require("mongoose");


const schema = mongoose.Schema;

const toDolistSchema = new schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    completed: {
      type: String,
      required: false,
    },
    feedback: {
      type: String,
      required: false,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("ToDoList", toDolistSchema);
