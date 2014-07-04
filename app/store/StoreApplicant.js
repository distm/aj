Ext.define("AJ.store.StoreApplicant", {
    extend: "Ext.data.Store",
    
    fields: [
        {name: "job_apply_id",  type: "string"},
        {name: "seeker_id",     type: "string"},
        {name: "job_id",        type: "string"},
        {name: "job_title",     type: "string"},
        {name: "first_name",    type: "string"},
        {name: "last_name",     type: "string"},
        {name: "email",         type: "string"},
        {name: "date_create",   type: "date",   format: "c"}
    ],
    
    proxy: {
        type: "ajax",
        url: API_URL +"jobs/applicant",
        reader: {
            type: "json",
            root: "data"
        }
    }
});