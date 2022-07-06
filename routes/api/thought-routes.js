const router = require('express').Router();
const {
    addThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

router.route('/:userId').post(addThought);

router
.route('/:userId/:thoughtId')
.put(addReaction)
.delete(removeThought);

router.route('/:userId/:thougthId/;reactionId').delete(removeReaction);

module.exports = router;