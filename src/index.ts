import 'reflect-metadata';
import Express from "express";
import Router from "./routes/router";
import sequelize from "./config/db";

const app = Express();

app.use(Express.json());

app.use("/api", Router);

const startServer = async () => {
  try {
    sequelize.authenticate();
    console.log("database connected");
    sequelize.sync();

    app.listen(3000, () => {
      console.log("Server started on port 3000");
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
};
startServer();
