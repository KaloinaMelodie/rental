const CleaningService = require('../services/cleaning_service');

class CleaningController {
    static async list_cleaning (req, res){
    res.json(await CleaningService.getListCleaning(req.query.date));
    }
}

module.exports = CleaningController;