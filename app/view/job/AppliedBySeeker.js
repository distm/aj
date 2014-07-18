Ext.define("AJ.view.job.AppliedBySeeker", {
    extend: "Ext.window.Window",
    alias: "widget.jobappliedbyseeker",
    id: "jobappliedbyseeker",
    
    initComponent: function(){
        Ext.apply(this, {
            width: 600,
            height: 400,
            constrainHeader: true,
            title: lang("applied_job")
        });        
        
        this.callParent(arguments);
    }
});