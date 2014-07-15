Ext.define("AJ.store.StoreSeeker", {
    extend: "Ext.data.Store",
    
    fields: [
        {name: "seeker_id",       type: "int"},
        {name: "first_name",      type: "string"},
        {name: "last_name",       type: "string"},
        {name: "email",           type: "string"},
        {name: "password",        type: "string"},
        {name: "pics",            type: "string"},
        {name: "address",         type: "string"},
        {name: "phone",           type: "string"},
        {name: "mobile",          type: "string"},
        {name: "address_idcard",  type: "string"},
        {name: "dob",             type: "date",     format: "c"},
        {name: "pob",             type: "string"},
        {name: "gender",          type: "string"},
        {name: "religion",        type: "string"},
        {name: "height",          type: "string"},
        {name: "weight",          type: "string"},
        {name: "nationality",     type: "string"},
        {name: "searchable",      type: "string"},
        {name: "status",          type: "string"},
        {name: "reg_code",        type: "string"},
        {name: "reg_platform",    type: "string"},
        {name: "reg_platform_id", type: "string"},
        {name: "date_create",     type: "date",     format: "c"},
        {name: "date_modified",   type: "date",     format: "c"}
    ],
    
    autoLoad: true,
    proxy: {
        type: "ajax",
        url: API_URL +"seeker",    
        reader: {
            type: "json",
            root: "data"
        }
    }
});