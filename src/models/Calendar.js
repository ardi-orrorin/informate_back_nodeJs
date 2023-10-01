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
        }
    },{
        timestamps: true,
        underscored: false,
        // modelName: 'schedule',
        tableName: 'TBL_CLNDR',
        initialAutoIncrement: "SEQ_TBL_CLNDR_CLNDR_CODE",
        updatedAt: false,
        createdAt: false,
        deletedAt: false,
        setterMethods: {
            updateData({calendar}) {
                if(calendar.id) this.CLNDR_CODE = calendar.id;
                if(calendar.name) this.CLNDR_NAME = calendar.name;
                if(calendar.indexNo) this.INDEX_NUM = calendar.indexNo;
                if(calendar.labelColor) this.LABEL_COLOR =  calendar.labelColor;
                if(calendar.defaultCalendar) this.DEFAULT_SELC = calendar.defaultCalendar;
                if(calendar.departmentCode) this.DPRMT_CODE =  calendar.departmentCode;
                if(calendar.memberCode) this.REF_MEMBER_CODE = calendar.memberCode;
                if(calendar.openStatus) this.OPEN_STATUS = calendar.openStatus;
            }
        },
    })
)