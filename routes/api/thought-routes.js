const router = require('express').Router();
const {
    getAllThoughts,
    getSingleThought,
    addThought,
    removeThought,
    editThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');
// /api/thoughts/
router
.route('/')
.get(getAllThoughts);
// /api/thoughts/<thoughtId>
router
.route('/:id')
.get(getSingleThought)
.put(editThought)
.delete(removeThought);

// /api/thoughts/<userId>
router
.route('/:userId')
.post(addThought);
// /api/thoughts/<thougthId>/reactions
router
.route('/:id/reactions')
.put(addReaction)


router
.route('/:id/:reactionId')
.put(removeReaction);

module.exports = router;