const express = require('express');
const { generateC } = "./executeC.js"
const { generateFile } = require("./generateFile");
const { executePy } = require("./executePy");
const { executeC } = require('./executeC');
const cors = require('cors')
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  return res.json({Hello :'World!'});
});

app.post('/run', async (req, res) => {
    //extracting the language and code data from the request body
    const { language = "py", code } = req.body;
    //if the code is undefined, return an error
    if(code === undefined) {
        return res.status(400).json({
            success: false,
            error: "No code provided"
        });
    }

    //file generated using function
        const filePath = await generateFile(language, code);
        let result
        if(language == "py"){
          result=await executePy(filePath);
        }
        if(language == "c"){
          result=await executeC(filePath);
        }
        console.log("result: "+result);
        // let mres = JSON.parse(result)
        return res.json({result});
        // return res.json({mres});


})
app.listen(5000, () => {
  console.log('Server started on port 5000');
});