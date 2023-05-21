const express = require("express");
const cors = require("cors");
const app = express();
const port = 80 || process.env.PORT;

app.use(cors()); //put this line before other app.use always!!

require("./db/server");
app.use(express.json());
app.use(require("./routes"));

app.listen(port, () => {
    console.log("App is listening on port " + port);
})