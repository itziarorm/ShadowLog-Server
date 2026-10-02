import { getAllShadowService, getOneShadowService, createAnewPlayerService, updatePlayerService } from '../services/DbService.js'

const getAllShadowsController = async (req, res) => {
    try {
        const allShadows = await getAllShadowService();
        if (allShadows.length === 0) {
            return res.status(404).send({ message: "No Existen Workouts" });
        }
        res.send({ status: "OK", data: allShadows });
    }
    catch (error) {
        res
            .status(error?.status || 500)
            .send({
                status: 'FAILED',
                message: "ERROR al realizar la peticion:",
                data: { error: error?.message || error }
            });
    }
}

const getOnePlayerController = async (req, res) => {
    const { params: { shadowId } } = req;

    if (!shadowId) {
        return res
            .status(400)
            .send({
                status: "FAILED",
                data: { error: "Parameter ':shadowId' can not be empty" }
            });
    }
    try {
        const shadow = await getOneShadowService(shadowId);
        if (!shadow) {
            return res
                .status(404)
                .send({
                    status: "FAILED",
                    data: { error: `Cant find shadow with the id '${shadowId}'` }
                });
        }
        res.send({ status: "OK", data: shadow });
    }
    catch (error) {
        res
            .status(error?.status || 500)
            .send({
                status: "FAILED",
                message: "ERROR AL REALIZAR LA PETICION",
                data: { error: error?.message || error }
            });

    }
}

const createAnewPlayerController = async (req, res) => {
    const { body } = req;
    if (
        !body.name ||
        !body.mode ||
        !body.equipment
    ) {
        res
            .status(400)
            .send({
                status: "FAILED",
                data: {
                    error:
                        "One of the follwoing characters is missing or is empty in request body",
                },
            });
        return;
    }
    const newPlayer = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment
    };

    try {
        const createdPlayer = await createAnewPlayerService(newPlayer);
        res.status(201).send({ status: "OK", data: createdPlayer })
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({
                status: "FAILED",
                message: "Error al realizar la peticion:",
                data: { error: error?.message || error }
            });
    }
};

const updateOnePlayerController = async (req, res) => {
    const
        {
            body,
            params: { shadowId },
        } = req;
    if (!shadowId) {
        return res
            .status(400)
            .send({
                status: "FAILED",
                data: { error: "Parameter ':workoutId' can not be empty" },
            });
    }
    try {
        const updatedPlayer =  await updatePlayerService(shadowId, body)
        if (!updatedPlayer) {
            return res
                .status(404)
                .send({
                    status: "FAILED",
                    data: { error: `Can't find workout with the id '${shadowId}'` }
                });
        }
        res.send({ status: "OK", data: updatedPlayer });

    }
    catch (error) {
        res
            .status(error?.status || 500)
            .send({
                status: "FAILED",
                message: "Error al realizar la peticion",
                data: { error: error?.message || error }
            });
    }
};




export {
    getAllShadowsController,
    getOnePlayerController,
    createAnewPlayerController,
    updateOnePlayerController
}