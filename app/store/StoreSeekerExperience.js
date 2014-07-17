Ext.define("AJ.store.StoreSeekerExperience", {
    extend: "Ext.data.Store",
    fields: [
        {name: "experience_id",  type: "int"},
        {name: "company_name",   type: "string"},
        {name: "position",       type: "string"},
        {name: "specialization", type: "string"},
        {name: "role",           type: "string"},
        {name: "industry",       type: "string"},
        {name: "month_salary",   type: "string"},
        {name: "work_desc",      type: "string"},
        {name: "date_from",      type: "string"},
        {name: "date_to",        type: "string"},
        {name: "position_level", type: "string"},
        {name: "date_create",    type: "date",    format: "c"},
        {name: "date_modified",  type: "date",    format: "c"}
    ],
    
    proxy: {
        type: "ajax",
        url: API_URL +"seeker/detail/experience",
        reader: {
            type: "json",
            root: "data"
        }
    }
});