const express = require('express');
const bodyParser = require('body-parser');
const { NlpManager } = require('node-nlp');

const app = express();
const port = process.env.PORT || 5000;

const { labeledData, LANGUAGE } = require('./constants');

const performAnalysis = async (message, res) => {
  const manager = new NlpManager({ languages: ['en'], forceNER: true });
  let response;
  // Adds the utterances and intents for the NLP
  labeledData.forEach((labeledSample) => {
    manager.addDocument(LANGUAGE, labeledSample.sample, labeledSample.label);
  });

  // Train and save the model.
  (async () => {
    await manager.train();
    manager.save();
    response = await manager.process('en', message);

    // console.log(response);

    res.send(
      `Intent: ${response.intent} | Intent score: ${response.score} | Language: ${response.language} | Sentiment: ${response.sentiment.vote} with score: ${response.sentiment.score}`,
    );
  })();
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', async (req, res) => {
  const message = req.body.post;
  await performAnalysis(message, res);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
