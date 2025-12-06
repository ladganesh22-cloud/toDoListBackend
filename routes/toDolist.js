const express = require('express');

const toDoLists = require('../models/toDolist-model');

const { getAllToDoLists, getsingleToDoListById, createNewToDoList, updateToDoList, deleteToDoListById } = require('../controllers/toDolist-controller');

const router = express.Router();

/**
 * Method: GET
 * URL: /todolists
 * Description: To get all to-do lists
 * Access: Public
 * Parameters: None
 */
router.get('/', getAllToDoLists);


/**
 * Method: GET
 * URL: /todolists/:id
 * Description: To get a single to-do list by ID
 * Access: Public
 * Parameters: id
 */
router.get('/:id', getsingleToDoListById);



/**
 * Method: POST
 * URL: /todolists
 * Description: To add a new to-do list
 * Access: Public
 * Parameters: None
 */
router.post('/', createNewToDoList);

/**
 * Method: PUT
 * URL: /todolists/:id
 * Description: To update a to-do list
 * Access: Public
 * Parameters: id
 */
router.put('/:id', updateToDoList);


/**
 * Method: DELETE
 * URL: /todolists/:id
 * Description: To delete a to-do list
 * Access: Public
 * Parameters: id
 */
router.delete('/:id', deleteToDoListById);

module.exports = router;
