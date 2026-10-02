import { Shadow } from '../models/ShadowdbModels.js'

const getAllShadows = async () => {
    try {
        const shadowsDb = await Shadow.find();
        return shadowsDb;
    }
    catch (error) {
        throw error;
    }

};

const getOneShadow = async (shadowId) => {
    try {
        const shadow = await Shadow.findById(shadowId)
        return shadow;
    }
    catch (error) {
        throw error;
    }
}
// creating a new element POST 

const createAnewPlayer = async (createAnewPlayer) => {
    try 
    {
        let playerToInsert = new Shadow(createAnewPlayer);
        const createdPlayer = await playerToInsert.save();
        return createdPlayer;

    }
    catch (error) {
        throw error;
    }
};

//UPDATING ELEMENTS WITH PATCH

const updatePlayer = async(shadowId, updates) =>{

    try{
        let updatedPlayer = await Shadow.findByIdAndUpdate(shadowId, {$set:updates}, {new:true});

        return updatedPlayer;
    }
    catch (error)
    {
        throw error;
    }
}

const deleteOnePlayer = async (shadowId) =>{

    try{
        let deletedPlayer = await Shadow.findByIdAndDelete(shadowId);
        return deletedPlayer;
    }
    catch(error)
    {
        throw error;
    }
};


export {
    getAllShadows,
    getOneShadow,
    createAnewPlayer, //ADD
    updatePlayer,
    deleteOnePlayer
}