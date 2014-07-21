Ext.define("AJ.store.StoreCompany", {
    extend: "Ext.data.Store",
    
    fields: [
        {name: "company_id",          type: "string"},
        {name: "name",                type: "string"},
        {name: "description",         type: "string"},
        {name: "city",                type: "string"},
        {name: "address",             type: "string"},
        {name: "country",             type: "string"},
        {name: "phone",               type: "string"},
        {name: "industry",            type: "string"},
        {name: "registrant_name",     type: "string"},
        {name: "registrant_email",    type: "string"},
        {name: "registrant_password", type: "string"},
        {name: "reg_code",            type: "string"},
        {name: "status",              type: "string"},
        {name: "date_create",         type: "date", dateFormat: "c"},
        {name: "date_modified",       type: "date", dateFormat: "c"}
    ],
    
    proxy: {
        type: "ajax",
        url: API_URL +"company",
        reader: {
            type: "json",
            root: "data"
        }
    }
});
