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
        Ext.apply(this, {
            items: [
                {xtype: "seekerpreference"},
                {xtype: "seekerbiodata"},
                {xtype: "seekerexperience"},
                {xtype: "seekerlanguageskill"}
            ],
            buttons: [
                {
                    text: lang("btn_close"),
                    handler: function(btn){
                        btn.up("window").close();
                    }
                }
            ]
        });
        
        this.callParent(arguments);
    }
});