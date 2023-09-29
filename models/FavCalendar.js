export default (sequelize, DataTypes) => (
    sequelize.define('favCalendar', {
        'FVRT_CLNDR_ID': {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        'APPROVAL_STATUS': {
            type: DataTypes.STRING,
            allowNull: false,
        },
        'REQUEST_DATE': {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Date.now(),
        },
        'LABEL_COLOR': {
            type: DataTypes.STRING(30),
            allowNull: false,
            defaultValue: '#000000'
        },
        'REF_CLDNR_ID': {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        'REF_MEMBER_CODE': {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },{
        initialAutoIncrement: "SEQ_TBL_FVRT_CLNDR_FVRT_CLNDR_ID",
        modelName: 'FavCalendar',
        tableName: 'TBL_FVRT_CLNDR',
        underscored: false,
        timestamps: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: false,
    })
)