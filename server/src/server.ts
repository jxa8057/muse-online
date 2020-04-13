import Express from "express";
import bodyParser from "body-parser";

const app = Express();
const port = process.env.port || 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/api/test", (req, res) => {
  res.json({ testing: true });
});

app.post("/api/posttest", (req, res) => {
  console.log(req.body);
  res.json({ whatYouSent: req.body.post });
});

app.listen(port, () =>
  console.log(`Server started and listening on port ${port}`)
);
