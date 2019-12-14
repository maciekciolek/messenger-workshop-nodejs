const express = require("express");
const bodyParser = require("body-parser");
const verifyWebhook = require("./verify-webhook");
const handleWebhook = require("./handle-webhook");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", verifyWebhook);
app.post("/", handleWebhook);

app.listen(5000, () => console.log("Express server is listening on port 5000"));
