export default (sequelize, Datatypes) => (
    sequelize.define('Department', {
        'DEPT_CODE': {
            type: Datatypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        'DEPT_NAME': {
            type: Datatypes.STRING(50),
            allowNull: false,
        },
        'DEPT_ORDER': {
            type: Datatypes.INTEGER,
            allowNull: false,
        },
    },{
        initialAutoIncrement: "SEQ_TBL_DEPT_DEPT_CODE",
        modelName: 'Department',
        tableName: 'TBL_DEPT',
        underscored: false,
        timestamps: true,
        createdAt: false,
        updatedAt: false,
        deletedAt: false,
    })
)