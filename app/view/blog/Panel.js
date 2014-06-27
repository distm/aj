Ext.define("AJ.view.blog.Panel", {
    extend: "Ext.panel.Panel",
    alias: "widget.panel-blog",
    id: "panel-blog",
    
    title: lang("blog"),
    layout: "border",
    
    initComponent: function(){
        
        this.items = [
            {
                xtype: "bloglist",
                border: 0,
                region: "center"
            },
            {
                xtype: "blogdetail",
                margin: "-1 0",
                region: "east",
                width: "40%"
            }
        ];
        
        this.callParent(arguments);
    }
});