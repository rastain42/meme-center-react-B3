const router = require('express').Router();

const { 
    getAllChoices, 
    getChoicesById, 
    createChoices, 
    updateChoices,
    deleteChoices,
    addVote,
    deleteVote

} = require('../../controllers/choices-controller');

router.route('/').get(getAllChoices);

router.route('/:id').get(getChoicesById).put(updateChoices).delete(deleteChoices); 

router.route('/:userId').post(createChoices);

router.route('/:choiceId/votes').post(addVote);

router.route('/:choiceId/votes/:voteId').delete(deleteVote);

module.exports = router;