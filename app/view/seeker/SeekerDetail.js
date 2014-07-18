Ext.define("AJ.view.seeker.SeekerDetail", {
    extend: "Ext.window.Window",
    alias: "widget.seekerdetail",
    id: "seekerdetail",
    
    initComponent: function(){
        Ext.apply(this, {
            height: 450,
            width: 750,
            layout: "fit",
            maximizable: true,
            maximized: false,
            constrainHeader: true,
            items: [
                {
                    xtype: "tabpanel",
                    activeTab: 0,
                    border: 0,
                    defaults: {
                        border: 0
                    },
                    items: [
                        {xtype: "seekerbiodata"},
                        {xtype: "seekerexperience"},
                        {xtype: "seekerlanguageskill"},
                        {xtype: "seekerpreference"},
                        {xtype: "seekerqualification"},
                        {xtype: "seekerreference"},
                        {xtype: "seekerskill"}
                    ]
                }
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