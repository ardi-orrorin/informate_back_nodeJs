import {Participant} from '../models/index.js';

export const participantFindAll = () => {
    return Participant.findAll();
}