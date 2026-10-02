import { getAuth } from "firebase-admin/auth";

async function verifyIdToken(req, res, next) {
    try {
        const authorization = req.headers.authorization;

        if (!authorization) {
            return res.status(401).json({
                status: "FAILED",
                message: "Authorization header is required."
            });
        }
        if (!authorization.startsWith("Bearer ")) {
            return res.status(401).json({
                status: "FAILED",
                message: "Authorization header must use the Bearer scheme."

            });
        }
        const idToken = authorization.substring("Bearer ".length).trim();

        if (!idToken) {
            return res.status(401).json({
                status: "FAILED",
                message: "Firebase ID token is missing."
            });
        }
        const decodedToken = await getAuth().verifyIdToken(idToken);
        res.locals.user = decodedToken;
        next();
    } catch (error) {
        console.error("Failed to validate Firebase ID token:", error);
        return res.status(401).json({
            status: "FAILED",
            message: 'Invalid or expired Firebase ID token.'
        });
    }
}
export default { verifyIdToken }