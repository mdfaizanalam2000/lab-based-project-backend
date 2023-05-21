const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 80;

app.use(cors()); //put this line before other app.use always!!

require("./db/server");
app.use(express.json());
app.use(require("./routes"));

app.listen(port, () => {
    console.log("App is listening on port " + port);
})