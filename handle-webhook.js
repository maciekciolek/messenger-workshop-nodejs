const respond = require("./send");

const handleWebhook = (req, res) => {
  const data = req.body.entry[0].messaging[0];
  const senderId = data.sender.id;
  const message = data.message;

  if (message.text) {
    const text = message.text;
    respond(senderId, { text: "Hej!" });
  }

  res.sendStatus(200);
};

module.exports = handleWebhook;
