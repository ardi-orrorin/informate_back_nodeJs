export default (sequelize, DataTypes) => (
    sequelize.define('Calendar', {
        'INDEX_NUM': {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
        },
        'OPEN_STATUS': {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        'CREATE_DATE': {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Date.now(),
        },
        'CLNDR_CODE': {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        'CLNDR_NAME': {
            type: DataTypes.STRING,
            allowNull: false,
        },
        'LABEL_COLOR': {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '#000000'
        },
        'DEFAULT_SELC': {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        'REF_MEMBER_CODE': {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        'DPRMT_CODE': {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },{
        timestamps: true,
        underscored: false,
        // modelName: 'schedule',
        tableName: 'TBL_CLNDR',
        initialAutoIncrement: "SEQ_TBL_CLNDR_CLNDR_CODE",
        updatedAt: false,
        createdAt: false,
        deletedAt: false
    })
)