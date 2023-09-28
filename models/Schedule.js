
module.exports = (sequelize, DataTypes) => (
    sequelize.define('Schedule', {
        'SCHDL_ID': {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        'TITLE': {
            type: DataTypes.STRING(512),
            allowNull: false,
        },
        'START_DATE': {
            type: DataTypes.DATE,
            allowNull: false,
        },
        'END_DATE': {
            type: DataTypes.DATE,
            allowNull: false,
        },
        'ADDRESS': {
            type: DataTypes.STRING,
            allowNull: true,
        },
        'ALL_DAY': {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        'COPR_SCHDL': {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        'REPEAT': {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        'IMPORTANT': {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        'CONTENT': {
            type: DataTypes.STRING,
        },
        // 'REF_CLNDR_ID': {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
    },{
        timestamps: true,
        underscored: false,
        modelName: 'Schedule',
        tableName: 'TBL_SCHDL',
        initialAutoIncrement: "SEQ_TBL_SCHDL_SCHDL_ID",
        updatedAt: false,
        createdAt: false,
        deletedAt: false
    })
)