Ext.define("AJ.store.StoreSeekerSkill", {
    extend: "Ext.data.Store",
    fields: [
        {name: "skill_id",      type: "int"},
        {name: "skill",         type: "string"},
        {name: "proficiency",   type: "string"},
        {name: "date_create",   type: "date",    format: "c"},
        {name: "date_modified", type: "date",    format: "c"}
    ],
    
    proxy: {
        type: "ajax",
        url: API_URL +"seeker/detail/skill",
        reader: {
            type: "json",
            root: "data"
        }
    }
});