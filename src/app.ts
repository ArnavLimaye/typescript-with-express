import express from 'express';
export const app = express();
const port = 4400;

const hello = () => {
  return 'hello';
};

app.get('/', (req, res) => {
  console.log('inside get');
  res.send('hell');
});

app.listen(port, () => {
  console.log(`Hello world app listening on port ${port}`);
});
