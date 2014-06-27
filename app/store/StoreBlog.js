Ext.define("AJ.store.StoreBlog", {
    extend: "Ext.data.Store",
    fields: [
        {name: "id",            type: "string"},
        {name: "title",         type: "string"},
        {name: "tag",           type: "string"},
        {name: "summary",       type: "string"},
        {name: "blog_content",  type: "string"},
        {name: "status",        type: "string"},
        {name: "view_count",    type: "integer"},
        {name: "date_create",   type: "date", format: "c"},
        {name: "date_modified", type: "date", format: "c"}
    ],
    
    autoLoad: true,
    proxy: {
        type: "ajax",
        url: API_URL+ "blog",
        reader: {
            type: "json",
            root: "data"
        }
    }
});