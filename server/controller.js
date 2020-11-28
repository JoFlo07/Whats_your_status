const fetch = require('node-fetch');
const slackToken = require('./.private.js');

exports.enableEvent = async function (req, res) {
  try {
    console.log('in controller');
    const { challenge } = req.body
    res.setHeader('content-type', 'text/plain');
    res.status(200).send(challenge);
  } catch (e) {
    res.status(500).send(e);
  }
}

exports.event = async function (req, res) {
  try {
    // RECEIVE POST
    req.io.broadcast.emit('update')
    console.log(req.body);
  } catch (e) {
    res.status(500).send(e);
  }
}

exports.users = async function (req, res) {
  try {
    const users = await fetch('https://slack.com/api/users.list', {headers: { 'Authorization': `Bearer ${slackToken}`}});
    const response = await users.json();
    res.send(response.members);
  } catch (e) {
    res.status(500).send(e);
  }
}