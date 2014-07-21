Ext.define("AJ.store.StoreStatisticChart", {
    extend: "Ext.data.Store",
    
    fields: [
        {name: "period",  type: "string"},
        {name: "seeker",  type: "int"},
        {name: "company", type: "int"}
    ],
    
    proxy: {
        type: "ajax",
        url: API_URL +"statistic/data",
        reader: {
            type: "json",
            root: "data"
        }
    }
});