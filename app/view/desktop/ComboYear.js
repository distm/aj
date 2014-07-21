Ext.define("AJ.view.desktop.ComboYear", {
    extend: "Ext.form.field.ComboBox",
    alias: "widget.comboyear",
    id: "comboyear",
    
    initComponent: function(){
        var data = [];
        for(var i=2010; i<=(new Date()).getFullYear(); i++){
            data.push({year: i});
        }
        
        var store = Ext.create("Ext.data.JsonStore", {
            fields: ['year'],
            data: data
        });
        
        Ext.apply(this, {
            store: store,
            queryMode: 'local',
            displayField: 'year'
        });
        this.callParent();
    }
});