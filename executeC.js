const util=require('util');
const exec = util.promisify(require('child_process').exec);

const executeC = async (filepath) => {
    const file=`"${filepath}"`;
    try{
      const {stderr,stdout}=await exec(`gcc ${file} -o ${file}-out && ${file}-out`);
      return stderr&&stdout?stderr:stdout
    }
    catch(err){
      return  err;
    }
};

module.exports = {
  executeC,
};