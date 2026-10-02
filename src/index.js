import "dotenv/config";
import "./config/firebase-admin.js"
import { httpServer } from "./config/server.js";
import mongoose from 'mongoose';



const mongodbRoute = process.env.MONGO_DB_URL


const port = process.env.PORT;


async function start() {

    try {
        await mongoose.connect(mongodbRoute);

        console.log('Conexion con Mongo Correcta.')

        httpServer.listen(port, () => {
            console.log(`API Is listening on por ${port}`)
        });
    }
    catch (error) {
        console.log(`Error al conectar a la base de datos: ${error.message}`)
    }
}
start()
