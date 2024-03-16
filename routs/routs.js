const {Router} = require('express')
const {UsersAll, UsersId, UsersName, PostsAll, PostsId, PostsAllId, TodosAll, TodosStatus, TodosId, TodosUserId} = require('../handlers')

const router = Router()

router.get('/users', UsersAll)
router.get('/users/id/:id', UsersId)
router.get('/users/name/:name', UsersName)
router.get('/posts', PostsAll)
router.get('/posts/:id', PostsId)
router.get('/posts/all/:id', PostsAllId)
router.get('/todos', TodosAll)
router.get('/todos/:status', TodosStatus)
router.get('/todos/id/:id', TodosId)
router.get('/todos/userid/:userId', TodosUserId)





module.exports = router;