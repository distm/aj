Ext.define("AJ.controller.Blog", {
    extend: "Ext.app.Controller",
    
    views: [
        "blog.Panel",
        "blog.BlogList",
        "blog.BlogListContext",
        "blog.BlogDetail",
        "blog.BlogForm"
    ],
    
    init: function(){
        
        this.control({
            
            "bloglist": {
                itemcontextmenu: this.showContext,
                selectionchange: function(sm, record){
                    Ext.getCmp("blogdetail").update(record[0].getData());
                }
            },
            "bloglist button[action='create_new_blog']": {
                click: this.createNewBlog
            }
            
        });
        
    },
    
    showContext: function(view, record, item, index, e){
        e.stopEvent();
        var menu = Ext.getCmp("contextmenu-blog");
        if(! menu){
            menu = Ext.widget("contextmenu-blog");
        }
        menu.showAt(e.getXY());
    },
    
    createNewBlog: function(btn){
        var win = Ext.getCmp("blogform");
        if(! win){
            win = Ext.widget("blogform", {
                title: btn.getText()
            });
        }        
        win.show();
    }
    
});