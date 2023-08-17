const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.f2ll5cg.mongodb.net/?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Conexão ao banco de dados realizada com sucesso");
  } catch (error) {
    console.error("Ocorreu um erro ao conectar com o banco de dados:", error);
  }
};

module.exports = connectToDatabase;
