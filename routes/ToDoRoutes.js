const {Router} = require("express")
const {getToDo,saveToDo,updateTo,deletedTo} = require('../Controllers/ToDoControllers')
const router = Router();

router.get('/',getToDo)
router.post('/save',saveToDo)
router.post('/update',updateTo)
router.post('/delete',deletedTo)

module.exports =router