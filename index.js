const express = require("express");
const { WebhookClient } = require("dialogflow-fulfillment");
const { db } = require("./configs/firebase");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  console.log("niagi");
  res.send("Server Is Here");
});
/**
 * on this route dialogflow send the webhook request
 * For the dialogflow we need POST Route.
 * */
app.post("/webhook", (req, res) => {
  console.log("naay nisulod");
  // get agent from request
  let agent = new WebhookClient({ request: req, response: res });
  const result = req.body.queryResult;
  console.log("RESULT: ", result);

  async function handleWebHookIntent(agent) {
    // console.log()
    const { name, color } = result.parameters;
    await db.collection("profiles").add({ name, color });
    agent.add("Hello I am Webhook demo How are you...");
  }

  // create intentMap for handle intent
  let intentMap = new Map();
  // add intent map 2nd parameter pass function
  intentMap.set("UpdateProfile", handleWebHookIntent);
  // now agent is handle request and pass intent map
  agent.handleRequest(intentMap);
});

app.get("/users", async (req, res) => {
  const settingsRef = db.collection("users");
  try {
    const snapshot = await settingsRef.get();
    const users = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return res.status(200).json({ data: users });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

/**
 * now listing the server on port number 3000 :)
 * */
app.listen(3000, () => {
  console.log("Server is Running on port 3000");
});
