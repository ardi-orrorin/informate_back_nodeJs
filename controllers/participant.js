const {participantFindAll} = require('../services/participant');

exports.participantByFindAllController = async (req, res, next) => {
    const participantList = await participantFindAll();
    return res.status(200).json(participantList);
}