Ext.define("AJ.store.StoreSeekerPreference", {
    extend: "Ext.data.Store",
    fields: [
        {name: "preference_id",   type: "int"},
        {name: "work_location",   type: "string"},
        {name: "work_type",       type: "string"},
        {name: "expected_salary", type: "float"},
        {name: "date_create",     type: "date",    format: "c"},
        {name: "date_modified",   type: "date",    format: "c"}
    ],
    
    proxy: {
        type: "ajax",
        url: API_URL +"seeker/detail/preference",
        reader: {
            type: "json",
            root: "data"
        }
    }
});