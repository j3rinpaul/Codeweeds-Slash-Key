const { urlencoded } = require('express');
const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  return res.json({Hello :'World!'});
});

app.post('/run', (req, res) => {
    //extracting the language and code data from the request body
    const { language = "cpp", code } = req.body;

    if(code === undefined) {
        return res.status(400).json({
            success: false,
            error: "No code provided"
        });
    }
    console.log(language, code);
    return res.json({language, code});
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});