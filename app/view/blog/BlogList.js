Ext.define("AJ.view.blog.BlogList", {
    extend: "Ext.grid.Panel",
    alias: "widget.bloglist",
    id: "bloglist",
    
    store: "StoreBlog",
    emptyText: lang("msg_grid_empty_text"),
    
    initComponent: function(){
        
        // set columns
        this.columns = [
            {xtype: "rownumberer",      width: 30},
            {text: lang("title"),       width: 300, dataIndex: "title", flex: 1},
            {text: lang("date"),        width: 150, dataIndex: "date_create", xtype: "datecolumn", format: "d M Y H:i"},
            {text: lang("status"),      width: 75,  dataIndex: "status",
                renderer: function(v){
                    return v == "active" ? lang("active") : lang("inactive");
                }
            },
            {text: lang("view_count"),  width: 75,  dataIndex: "view_count", align: "right"}
        ];
        
        // docked items
        this.dockedItems = [
            {
                xtype: "toolbar",
                dock: "top",
                items: [
                    {
                        text: lang("btn_create_new_blog"),
                        action: "create_new_blog"
                    }
                ]
            },
            {
                xtype: "pagingtoolbar",
                store: "StoreBlog",
                displayInfo: true,
                dock: "bottom"
            }
        ];
        
        this.callParent(arguments);
    }
});