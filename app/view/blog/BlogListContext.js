Ext.define("AJ.view.blog.BlogListContext", {
    extend: "Ext.menu.Menu",
    alias: "widget.contextmenu-blog",
    id: "contextmenu-blog",
    
    initComponent: function(){
        
        this.items = [
            {
                text: lang("btn_edit"),
                action: "edit_blog"
            },
            {
                text: lang("btn_delete"),
                action: "delete_blog"
            }
        ];
        
        this.callParent(arguments);
    }    
});