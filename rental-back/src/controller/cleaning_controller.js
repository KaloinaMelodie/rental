const CleaningService = require('../services/cleaning_service');

class CleaningController {
    static async list_cleaning (req, res){
            let cleanings = await CleaningService.getListCleaning(req.query.date);            
            res.json({success: 200, data:cleanings});
    }
}

module.exports = CleaningController;