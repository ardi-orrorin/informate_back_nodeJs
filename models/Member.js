module.exports = (sequelize, DataTypes) => (
    sequelize.define('Member',{
        'MEMBER_CODE': {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        'MEMBER_PWD': {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        'MEMBER_NAME': {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        'MEMBER_ID': {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        'MEMBER_EMAIL': {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        'MEMBER_PHONE': {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        'MEMBER_NO': {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        'MEMBER_STATUS': {
            type: DataTypes.STRING(2),
            allowNull: false,
        },
        'EXTENSION_NUMBER': {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        'MEMBER_ADDRESS': {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        'HIRE_DATE': {
            type: DataTypes.DATE,
            allowNull: false,
        },
        'DEPT_CODE': {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        'MEMBER_PIC': {
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        'RANK_CODE': {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        'MEMBER_OFF': {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        'MEMBER_PIC_ORIGIN': {
            type: DataTypes.STRING(500),
            allowNull: false,
        },
    },{
        initialAutoIncrement: "SEQ_TBL_MEMBER_MEMBER_CODE",
        modelName: 'Member',
        tableName: 'TBL_MEMBER',
        underscored: false,
        timestamps: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: false,

    })
)