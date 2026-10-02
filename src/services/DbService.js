import { getAllShadows, getOneShadow, createAnewPlayer, updatePlayer } from '../database/Shadowdb.js';

const getAllShadowService = async () => {
    try {
        const shadows = getAllShadows();
        return shadows;
    }
    catch (error) {
        throw error;
    }
};

const getOneShadowService = async (shadowId) => {
    try {
        const shadow = getOneShadow(shadowId)
        return shadow;

    }
    catch (error) {
        throw error;
    }
};

const createAnewPlayerService = async (newPlayer) => {
    try {
        const createdPlayer = createAnewPlayer(newPlayer);

        return createdPlayer;
    }
    catch (error) {
        throw error;
    }
}

const updatePlayerService = async (shadowId, updates) => {

    try {
        const updatedPlayer = updatePlayer(shadowId, updates)
        return updatedPlayer
    }
    catch(error)
    {
        throw error
    }

}

export {

    getAllShadowService,
    getOneShadowService,
    createAnewPlayerService,
    updatePlayerService

}