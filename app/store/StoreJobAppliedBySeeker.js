Ext.define("AJ.store.StoreJobAppliedBySeeker", {
    extend: "Ext.data.Store",
    
    fields: [
        {name: "job_apply_id",  type: "int"},
        {name: "job_id",        type: "int"},
        {name: "job_title",     type: "string"},
        {name: "location",      type: "string"},
        {name: "company_name",  type: "string"},
        {name: "phone",         type: "string"},
        {name: "date_create",   type: "date",   format: "c"}
    ],
    
    proxy: {
        type: "ajax",
        url: API_URL +"jobs/applied",
        reader: {
            type: "json",
            root: "data"
        }
    }
});