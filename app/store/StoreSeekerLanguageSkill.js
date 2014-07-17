Ext.define("AJ.store.StoreSeekerLanguageSkill", {
    extend: "Ext.data.Store",
    fields: [
        {name: "language_id",   type: "int"},
        {name: "language",      type: "string"},
        {name: "spoken",        type: "string"},
        {name: "written",       type: "string"},
        {name: "date_create",   type: "date",   format: "c"},
        {name: "date_modified", type: "date",   format: "c"}
    ],
    
    proxy: {
        type: "ajax",
        url: API_URL +"seeker/detail/language-skill",
        reader: {
            type: "json",
            root: "data"
        }
    }
});