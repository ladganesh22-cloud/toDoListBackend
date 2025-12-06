const toDolistModel = require('../models/toDolist-model');

exports.getAllToDoLists = async (req, res) => {
  const allLists = await toDolistModel.find();

  if (allLists.length === 0) {
    return res.status(404).json({
      success: false,
      message: "No ToDO Lists Found !!!"
    });
  }

  res.status(200).json({
    data: allLists,
    success: true,
    message: 'To-do-lists Fetched Successfully!!!!!'
  });

};


exports.getsingleToDoListById = async (req, res) => {

  const { id } = req.params;

  const toDolistItem = await toDolistModel.findById(id);

  if (!toDolistItem) {
    return res.status(404).json({
      success: false,
      message: `ToDoList not found with id ${id}`
    });
  }

  res.status(200).json({
    data: toDolistItem,
    success: true,
  });


};


exports.createNewToDoList = async (req, res) => {

  const { data } = req.body;

  if (!data) {
    return res.status(400).json({
      success: false,
      message: "Title and Discription is required to create a to-do list"
    });
  }

  const savedToDo = await toDolistModel.create(data);

  if (!savedToDo) {
    return res.status(500).json({
      success: false,
      message: "Failed to create new to-do list"
    });
  }

  const allTodoLists = await toDolistModel.find();

  res.status(201).json({
    data: allTodoLists,
    success: true,
    message: 'Create to-do-list added successfully!!!!!'
  });

};

exports.updateToDoList = async (req, res) => {

  const { id } = req.params;

  const { data } = req.body;

  if (!data) {
    return res.status(400).json({
      success: false,
      message: "Title and Discription is required to update a to-do list"
    });
  }

  const toDolistItem = await toDolistModel.findById(id);

  if (!toDolistItem) {
    return res.status(201).json({
      success: true,
      message: `Item found with id ${id}`
    });
  }

  const updatedToDo = await toDolistModel.findByIdAndUpdate(
    id,
    data,
    { new: true }
  );

  if (!updatedToDo) {
    return res.status(404).json({
      success: false,
      message: `ToDo List not found with id ${id}`
    });
  }

  res.status(200).json({
    data: updatedToDo,
    success: true,
    message: 'To-do-list updated successfully!!!!!'
  });
};

exports.deleteToDoListById = async (req, res) => {
  const { id } = req.params;

  const deletedToDo = await toDolistModel.findById(id);

  if (!deletedToDo) {
    return res.status(404).json({
      success: false,
      message: `Item not found with id ${id}`
    });
  }

  await toDolistModel.findByIdAndDelete(id);

  res.status(200).json({
    data: deletedToDo,
    success: true,
    message: 'To-do-list deleted successfully!!!!!'
  });
};
