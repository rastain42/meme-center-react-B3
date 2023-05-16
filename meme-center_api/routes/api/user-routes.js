
const router = require('express').Router();

const {
  AllUsers,
  OneUser,
  createUsers,
  updateUsers,
  deleteUsers,
  addFriend,
  deleteFriend,
  register,
  sign_in,
  loginRequired,
  profile
} = require('../../controllers/users-controller');

router.route('/').get(AllUsers).post(createUsers);

router.route('/:id').get(OneUser).put(updateUsers).delete(deleteUsers);

router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend);

router.route('/auth/register').post(register);

router.route('/auth/sign_in').post(sign_in);

router.route('/profil')
  .post(loginRequired, profile);

module.exports = router;

