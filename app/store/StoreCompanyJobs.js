Ext.define("AJ.store.StoreCompanyJobs", {
    extend: "Ext.data.Store",
    
    fields: [
        {name: "job_id",            type: "string"},
        {name: "company_id",        type: "string"},
        {name: "title",             type: "string"},
        {name: "description",       type: "string"},
        {name: "requirement",       type: "object"},
        {name: "experience",        type: "object"},
        {name: "month_salary",      type: "string"},
        {name: "location",          type: "string"},
        {name: "category",          type: "string"},
        {name: "job_type",          type: "string"},
        {name: "contract_duration", type: "string"},
        {name: "noa",               type: "integer"},
        {name: "noj",               type: "integer"},
        {name: "date_close",        type: "string"},
        {name: "status",            type: "string"},
        {name: "date_create",       type: "date",   format: "c"},
        {name: "date_modified",     type: "date",   format: "c"}
    ],
    
    autoLoad: false,
    proxy: {
        type: "ajax",
        url: API_URL +"company/jobs",
        reader: {
            type: "json",
            root: "data"
        }
    }
});