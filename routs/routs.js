const {Router} = require('express')
const UsersAll = require('../handlers/Users/UsersAll')
const UsersId = require('../handlers/Users/UsersId')
const UsersName = require('../handlers/Users/UsersName')

const router = Router()

router.get('/users', UsersAll)
router.get('/users/id/:id', UsersId)
router.get('/users/name/:name', UsersName)





module.exports = router;