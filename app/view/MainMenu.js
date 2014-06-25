Ext.define("AJ.view.MainMenu", {
    extend: "Ext.tree.Panel",
    alias: "widget.mainmenu",
    id: "mainmenu",
    
    title: "Main Menu",
    store: "StoreMainMenu",
    rootVisible: false,
    
    initComponent: function(){
        this.callParent(arguments);
    }
});