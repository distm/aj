Ext.define("AJ.store.StoreSeekerDetail", {
    extend: "Ext.data.Store",
    
    fields: [
        {name: "table_name",    type: "string"},
        {name: "field_name",    type: "string"},
        {name: "field_value",   type: "string"},
    ],
    
    groupField: "table_name",
    autoLoad: true,
    proxy: {
        type: "ajax",
        url: API_URL +"seeker/detail",
        extraParams: {
            seeker_id: 2
        },
        reader: {
            type: "json",
            root: "data"
        }
    }
});