const mongoose = require("mongoose");

const MONGOURI = "mongodb+srv://henley:puff@libraryfinderdb.xnhkwbc.mongodb.net/?retryWrites=true&w=majority";
const InitiateMongoServer = async () => {
    try {
        await mongoose.connect(MONGOURI, {
            useNewUrlParser: true,
        });
        console.log("Connect to DB !");
    } catch(e) {
        console.log(e);
        throw(e);
    }
}
module.exports = InitiateMongoServer;
