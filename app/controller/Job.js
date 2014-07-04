Ext.define("AJ.controller.Job", {
    extend: "Ext.app.Controller",
    
    views: [
        'job.JobDetail'
    ],
    
    showJobDetail: function(record){
        var win = Ext.getCmp("jobdetail");
        if(! win) {
            win = Ext.widget("jobdetail", {
                title: record.get("title")
            });
        }
        
        win.show();
        win.update(record.getData());
    }
});