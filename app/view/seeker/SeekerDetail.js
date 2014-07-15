Ext.define("AJ.view.seeker.SeekerDetail", {
    extend: "Ext.window.Window",
    alias: "widget.seeker-detail",
    id: "seeker-detail",
    
    height: 450,
    width: 750,
    layout: "fit",
    maximizable: true,
    maximized: false,
    initComponent: function(){
        
        this.items = [
            {
                xtype: "grid",
                store: "StoreSeekerDetail",
                columns: [
                    {text: lang("field_name"),  dataIndex: "field_name",    width: 150},
                    {text: lang("field_value"), dataIndex: "field_value",   flex: 1}
                ],
                features: [{
                    ftype: "grouping",
                    groupHeaderTpl: '{name}',
                    hideGroupedHeader: true,
                    startCollapsed: true,
                    id: "seeker-detail-grouping"
                }]
            }
        ];
        this.callParent(arguments);
    }
});