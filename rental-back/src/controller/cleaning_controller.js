const CleaningService = require('../services/cleaning_service');

class CleaningController {
    static async list_cleaning (req, res){
        try{
            let cleanings = await CleaningService.getListCleaning(req.query.date);
            
            res.json(cleanings);
        }catch(e){
            res.status(400).json({ error: e.message });
        }
    }
}

module.exports = CleaningController;