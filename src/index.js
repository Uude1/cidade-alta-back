const express = require('express'); 
const app = express();
require('dotenv').config();
const session = require('express-session');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');

var path = require('path');

const PORT = 3001;

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use("/api", routes);

app.use(session({ secret: 'kasdakhdjakdajhkjhaksdjhakdjhakdjhkajhsd' }));
app.use(routes);
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: path.join(__dirname, 'temp')
}));

app.listen(PORT, () => {
  console.log(`Servidor executando na porta ${PORT}`);
});

