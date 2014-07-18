Ext.define("AJ.store.StoreSeekerReference", {
    extend: "Ext.data.Store",
    fields: [
        {name: "reference_id",  type: "int"},
        {name: "name",          type: "string"},
        {name: "phone",         type: "string"},
        {name: "email",         type: "string"},
        {name: "company",       type: "string"},
        {name: "position",      type: "string"},
        {name: "relationship",  type: "string"},
        {name: "date_create",   type: "date",    format: "c"},
        {name: "date_modified", type: "date",    format: "c"}
    ],
    
    proxy: {
        type: "ajax",
        url: API_URL +"seeker/detail/reference",
        reader: {
            type: "json",
            root: "data"
        }
    }
});