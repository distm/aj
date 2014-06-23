Ext.define("AJ.view.MainMenu", {
    extend: "Ext.tree.Panel",
    alias: "widget.mainmenu",
    
    title: "Main Menu",
    store: "MainMenu",
    rootVisible: false,
    
    initComponent: function(){
        this.callParent(arguments);
    }
});