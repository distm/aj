Ext.define("AJ.view.seeker.SeekerDetail", {
    extend: "Ext.window.Window",
    alias: "widget.seeker-detail",
    id: "seeker-detail",
    
    height: 450,
    width: 750,
    layout: "accordion",
    maximizable: true,
    maximized: false,
    initComponent: function(){
        
        this.items = [
            {
                xtype: "seekerbiodata"
            },
            {
                title: "Bar Foo"
            }
        ];
        this.callParent(arguments);
    }
});