import dotenv from "dotenv";
import Express from "express";
import bodyParser from "body-parser";

import routes from "./routes";

dotenv.config({ path: ".env.development.local" });

const app = Express();
const port = process.env.port || 3001;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

/** API Routes */
app.use("/api", routes);

app.listen(port, () =>
  console.log(`Server started and listening on port ${port}`)
);
