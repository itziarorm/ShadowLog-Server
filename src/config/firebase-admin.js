import { initializeApp, applicationDefault, cert } from "firebase-admin/app";
import serviceAccount from "../../secrets/firebase-service-account.json" with {type: "json"}


initializeApp({
    credential: cert(serviceAccount), 

});