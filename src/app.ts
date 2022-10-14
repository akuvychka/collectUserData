import express from 'express';
import {collectUserData} from "./service/collectUserData";
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  let data
  try {
    data = collectUserData({
      ...req.query,
      //due: new Date(),
    })
  } catch (error) {
    res.status(400)
    res.send("Check your params");
  }

  res.send(data);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
