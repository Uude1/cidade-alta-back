const EmblemsModel = require('../models/emblemsModel');
const EmblemsUserModel = require('../models/emblemsUserModel');

module.exports = {

    async assignRandomEmblemToUser(req, res) {
        const { userId } = req.body;
    
        try {
            const totalEmblems = await EmblemsModel.countTotalEmblems();
            const userEmblemsCount = await EmblemsUserModel.countUserEmblems(userId);
    
            if (userEmblemsCount >= totalEmblems) {
                return res.status(200).json({ message: 'O usuário já possui todos os emblemas disponíveis' });
            }
    
            let emblemId;
            let hasEmblem;
    
            do {
                emblemId = await EmblemsModel.findRandomEmblem();
                hasEmblem = await EmblemsUserModel.userHasEmblem(userId, emblemId);
            } while (hasEmblem);
    
            await EmblemsUserModel.insertEmblemForUser(userId, emblemId);
    
            res.status(200).json({ message: 'Emblema atribuído com sucesso' });
        } catch (error) {
            console.error('Erro ao atribuir emblema ao usuário:', error);
            res.status(500).json({ message: 'Erro interno do servidor' });
        }
    },

    async findEmblemsUser(req, res) {
        const userId = req.query.userId; 
        try {
            const emblemsUser = await EmblemsUserModel.findEmblemsUser(userId); 
    
            const emblemsDetails = await Promise.all(emblemsUser.map(async (item) => {
                const emblemDetails = await EmblemsModel.findEmblemById(item.emblem_id);
                return { ...item, emblem_details: emblemDetails };
            }));
    
            res.json(emblemsDetails);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erro ao buscar emblemas do usuário' });
        }
    }

}


