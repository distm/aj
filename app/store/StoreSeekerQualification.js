Ext.define("AJ.store.StoreSeekerQualification", {
    extend: "Ext.data.Store",
    fields: [
        {name: "qualification_id",  type: "int"},
        {name: "qualification",     type: "string"},
        {name: "gpa",               type: "string"},
        {name: "department",        type: "string"},
        {name: "major",             type: "string"},
        {name: "univ_name",         type: "string"},
        {name: "date_graduated",    type: "date",    format: "c"},
        {name: "date_create",       type: "date",    format: "c"},
        {name: "date_modified",     type: "date",    format: "c"}
    ],
    
    proxy: {
        type: "ajax",
        url: API_URL +"seeker/detail/qualification",
        reader: {
            type: "json",
            root: "data"
        }
    }
});