const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

// set up GET and POST at /api/users
router
.route('/')
.get(getAllUsers)
.post(createUser);

//set up GET one, PUT, and DELETE at /api/users/:id
router
.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

router
.route('/:userId/friends/:friendId')
.put(addFriend)
.delete(deleteFriend);

router
.route('/:userId/removefriend/:friendId')
.put(deleteFriend);

module.exports = router;