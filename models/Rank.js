export default (sequelize, DataTypes) => (
    sequelize.define('Rank', {
        'RANK_CODE': {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        'RANK_NAME': {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        'RANK_PLACE': {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },{
        timestamps: false,
        underscored: false,
        modelName: 'Rank',
        tableName: 'TBL_RANK',
        initialAutoIncrement: "SEQ_TBL_RANK_RANK_CODE",
        updatedAt: false,
        createdAt: false,
        deletedAt: false
    })
)