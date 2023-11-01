const userRepository = require("../repositories/users")

const getUsers = () => {
    return userRepository.getUsers();

}

const getUsersById = (idUser) => {

   return userRepository.getUsersById(idUser);

}

const creatUser = (body) => {

    return userRepository.creatUser(body);

}

const deleteUser = (idUser) => {

    return  userRepository.deleteUser(idUser);

}

const updateUser = (idUser, body) => {

    return userRepository.updateUser(idUser, body);

}

module.exports = {
    getUsers,
    getUsersById,
    creatUser,
    deleteUser,
    updateUser
}