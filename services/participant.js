const { Participant, Schedule, Member } = require('../models');

exports.participantFindAll = () => {
    return Participant.findAll({include: [Schedule, Member]});
}