const USERS = require("../models/users.model");

async function getUsers(req, res) {
  try {
    let user = await USERS.getUsers();

    const data = JSON.stringify(user, (key, value) =>
      typeof value === "bigint" ? value.toString() + "n" : value
    );

    const temp = JSON.parse(data);

    const result = {
      "status": true,
      "data": temp
    }

    return res.status(200).send(result);
  } catch (err) {
    return res.status(404).send({
      "status": false,
      "message": "No users have been found."
    });
  }
}

async function getUser(req, res) {
  try {
    const user_id = req.params.id;
    let user = await USERS.getUser(user_id);

    const data = JSON.stringify(user, (key, value) =>
      typeof value === "bigint" ? value.toString() + "n" : value
    );

    const temp = JSON.parse(data);

    const result = {
      "status": true,
      "data": temp
    }

    return res.status(200).send(result);

  } catch (err) {
    return res.status(404).send({
      "status": false,
      "message": "No user has been found."
    });
  }
}

async function createUser(req, res) {
  try {
    const body = req.body;
    let user = await USERS.createUser(body);

    const data = JSON.stringify(user, (key, value) =>
      typeof value === "bigint" ? value.toString() + "n" : value
    );

    const temp = JSON.parse(data);

    const result = {
      "status": true,
      "data": temp
    }

    return res.status(201).send(result);
  } catch (err) {
    return res.status(400).send({
      "status": false,
      "message": "Create user failed. Please complete your data request."
    });
  }
}

async function updateUser(req, res) {
  try {
    const body = req.body;
    const user_id = req.params.id
    let user = await USERS.updateUser(user_id, body);

    const data = JSON.stringify(user, (key, value) =>
      typeof value === "bigint" ? value.toString() + "n" : value
    );

    const temp = JSON.parse(data);

    const result = {
      "status": true,
      "data": temp
    }

    return res.status(200).send(result);
  } catch (err) {
    return res.status(400).send({
      "status": false,
      "message": "Update user failed. Please complete your data request."
    });
  }
}

async function deleteUser(req, res) {
  try {
    const user_id = req.params.id
    let user = await USERS.deleteUser(user_id);

    const data = JSON.stringify(user, (key, value) =>
      typeof value === "bigint" ? value.toString() + "n" : value
    );

    const temp = JSON.parse(data);

    const result = {
      "status": true,
      "data": temp
    }

    return res.status(200).send(result);
  } catch (err) {
    return res.status(400).send({
      "status": false,
      "message": "Delete user failed. Please complete your data request."
    });
  }
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
};