const UsersAll = require('../handlers/Users/UsersAll')
const UsersId = require('../handlers/Users/UsersId')
const UsersName = require('../handlers/Users/UsersName')
const PostsAll = require('../handlers/Posts/PostsAll')
const PostsId = require('../handlers/Posts/PostsId')
const PostsAllId = require('../handlers/Posts/PostsAllId')
const TodosAll = require('../handlers/Todos/TodosAll')
const TodosStatus = require('../handlers/Todos/TodosStatus')
const TodosId = require('../handlers/Todos/TodosId')
const TodosUserId = require('../handlers/Todos/TodosUserId')

module.exports = {
    UsersAll, UsersId, UsersName, PostsAll, PostsId, PostsAllId, TodosAll, TodosStatus, TodosId, TodosUserId
}