const express = require('express');
const bodyParser = require('body-parser');
const { NlpManager } = require('node-nlp');


const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', async (req, res) => {
  const message = req.body.post;
  let response = null;

  // here
  const manager = new NlpManager({ languages: ['en'], forceNER: true });
  // Adds the utterances and intents for the NLP
  manager.addDocument('en', 'goodbye for now', 'greetings.bye');
  manager.addDocument('en', 'bye bye take care', 'greetings.bye');
  manager.addDocument('en', 'okay see you later', 'greetings.bye');
  manager.addDocument('en', 'bye for now', 'greetings.bye');
  manager.addDocument('en', 'i must go', 'greetings.bye');
  manager.addDocument('en', 'hello', 'greetings.hello');
  manager.addDocument('en', 'hi', 'greetings.hello');
  manager.addDocument('en', 'howdy', 'greetings.hello');

  // Train also the NLG
  manager.addAnswer('en', 'greetings.bye', 'Till next time');
  manager.addAnswer('en', 'greetings.bye', 'see you soon!');
  manager.addAnswer('en', 'greetings.hello', 'Hey there!');
  manager.addAnswer('en', 'greetings.hello', 'Greetings!');

  // Train and save the model.
  (async() => {
      await manager.train();
      manager.save();
      response = await manager.process('en', message);
      console.log(response);
      res.send(
        `Message: ${req.body.post} |
        Intent: ${response.intent} |
        Intent score: ${response.score} |
        Language: ${response.language} |
        Sentiment: ${response.sentiment.vote} with score: ${response.sentiment.score}`,
      );
  })();
});

app.listen(port, () => console.log(`Listening on port ${port}`));