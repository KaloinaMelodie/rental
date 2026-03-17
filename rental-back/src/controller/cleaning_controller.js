const CleaningService = require('../services/cleaning_service');

class CleaningController {
    static async list_cleaning (req, res){
    res.json(await CleaningService.getListCleaning(req.params.date));
    }
}

module.exports = CleaningController;