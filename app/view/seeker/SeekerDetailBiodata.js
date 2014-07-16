Ext.define("AJ.view.seeker.SeekerDetailBiodata", {
    extend: "Ext.grid.Panel",
    alias: "widget.seekerbiodata",
    id: "seekerbiodata",
    
    store: "StoreSeekerBiodata",
    hideHeaders: true,
    selModel: {
        selType: 'cellmodel'
    },
    
    initComponent: function(){
        
        this.cellEditing = new Ext.grid.plugin.CellEditing({
            clicksToEdit: 2
        });        
        
        this.columns = [
            {text: "name",  dataIndex: "field_name",  width: 200, renderer: lang},
            {text: "value", dataIndex: "field_value", flex: 1,
                renderer: function(v, md, rec){
                    if(rec.get("field_name") === "gender"){
                        return lang("gender_"+ v);
                    }
                    if(rec.get("field_name") === "status"){
                        return lang(v);
                    }
                    if(rec.get("field_name") === "searchable"){
                        return (v ? lang("yes") : lang("no"));
                    }
                    if(rec.get("editor") === "datepicker"){
                        return Ext.util.Format.date(v, 'd-m-Y');
                    }
                    return v;
                },
                getEditor: function(record){
                    var editor = record.get("editor"),
                            field = false;
                    
                    switch(editor){
                        case "textfield":
                            field = Ext.create('Ext.form.field.Text');
                            break;
                        case "datepicker":
                            field = Ext.create("Ext.form.field.Date", {
                                value: record.get("field_value"),
                                format: "d-m-Y"
                            });
                            break;
                        case "combo-gender":
                            field = Ext.create("Ext.form.field.ComboBox", {
                                typeAhead: true,
                                triggerAction: 'all',
                                store: [
                                    ['F', lang("gender_F")],
                                    ['M', lang("gender_M")]
                                ]
                            });
                            break;
                        case "combo-searchable":
                            field = Ext.create("Ext.form.field.ComboBox", {
                                typeAhead: true,
                                triggerAction: 'all',
                                store: [
                                    ['1', lang("yes")],
                                    ['0', lang("no")]
                                ]
                            });
                            break;
                    }
                    
                    if(field !== false){
                        return Ext.create('Ext.grid.CellEditor', {
                            field: field
                        });
                    } else {
                        return false;
                    }
                }
            }
        ];
        
        this.plugins = [this.cellEditing];
        
        this.callParent(arguments);
    }
});