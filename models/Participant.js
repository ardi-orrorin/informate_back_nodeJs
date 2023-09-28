module.exports = (sequelize, DataTypes) => (
    sequelize.define('Participant', {
        'REF_SCHDL_ID': {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        'REF_MEMBER_CODE': {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
    },{
        underscored: false,
        modelName: 'Participant',
        tableName: 'TBL_PARTICIPANT',
        updatedAt: false,
        createdAt: false,
        deletedAt: false
    })
)