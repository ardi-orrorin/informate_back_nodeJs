import { Participant, Schedule, Member } from '../models/index.js';

export const participantFindAll = () => {
    return Participant.findAll({include: [Schedule, Member]});
}