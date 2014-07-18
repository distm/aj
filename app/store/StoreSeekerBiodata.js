Ext.define("AJ.store.StoreSeekerBiodata", {
    extend: "Ext.data.Store",
    
    fields: [
        {name: "record_id",     type: "string"},
        {name: "field_name",    type: "string"},
        {name: "field_value",   type: "string"},
        {name: "editor",        type: "string"}
    ],
    
    proxy: {
        type: "ajax",
        url: API_URL +"seeker/detail/biodata",
        extraParams: {
            seeker_id: 2
        },
        reader: {
            type: "json",
            root: "data"
        }
    },
    listeners: {
        load: function(store){
            store.filterBy(function(record){
                return /\_?id/i.test(record.get("field_name")) ? false : true;
            });
        }
    }
});