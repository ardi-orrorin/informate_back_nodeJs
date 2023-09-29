import { participantFindAll } from '../services/participant.js';

export const  participantByFindAllController = async (req, res, next) => {
    const participantList = await participantFindAll();
    return res.status(200).json(participantList);
}