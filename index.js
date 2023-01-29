const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const configuration = new Configuration({
  organization: "org-6Cta5L2FSblAYbFykVvgpZZN",
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

// api

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 443;

app.post("/", async (req, res) => {
  const { message } = req.body;

  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${message}`,
    max_tokens: 100,
    temperature: 0.5,
  });
  res.json({
    message: response.data.choices[0].text,
  });
});
// app.get("/models", async (req, res) => {
//   const response = await openai.listEngines();

//   res.json({
//     models: response.data.data,
//   });
// });

app.listen(port, () => {
  console.log(
    `Server running at http://https://chatgpt-angular-clon.vercel.app/:${port}`
  );
});
