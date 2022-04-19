import express from 'express';
import got from 'got';

const API_URL = 'https://raw.githubusercontent.com/altkraft/for-applicants/master/frontend/titanic/passengers.json';

const app = express();
app.disable('x-powered-by');

app.get('/data', async (_req, res) => {
  const data = await got.get(API_URL).json();
  res.json(data);
});

app.use(express.static('static'));

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
