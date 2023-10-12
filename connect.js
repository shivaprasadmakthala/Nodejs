const {MongoClient} = require('mongodb');

module.exports = {
    selectedDb: {},
    async connect(){
        try{
           const client =  await MongoClient.connect(process.env.MONGODB_URL);
            this.selectedDb = client.db('b33wd');
            console.log("this.selectedDb");
        } catch(err){
            console.error(err);
        }
    }
}