const util=require('util');
const exec = util.promisify(require('child_process').exec);

const executePy = async (filepath) => {
    const file=`"${filepath}"`;
    try{
      const {stderr,stdout}=await exec(`python ${file}`);
      return stderr&&stdout?stderr:stdout
    }
    catch(err){
      return  err;
    }
};

module.exports = {
  executePy,
};