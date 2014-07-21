Ext.define("AJ.view.job.JobDetail", {
    extend: "Ext.window.Window",
    alias: "widget.jobdetail",
    id: "jobdetail",
    
    width: 500,
    height: 500,
    autoScroll: true,
    constrainHeader: true,
    bodyStyle: {
        padding: "10px"
    },
    
    tpl: [
        "<table class='table-detail'>",
            "<tr>",
                "<td>"+ lang("title") +":</td>",
                "<td>{title}</td>",
            "</tr>",
            "<tr>",
                "<td>"+ lang("description") +":</td>",
                "<td>{description}</td>",
            "</tr>",
            "<tr>",
                "<td>"+ lang("requirement") +":</td>",
                "<td>",
                    "<tpl for='requirement'>{.}, </tpl>",
                "</td>",
            "</tr>",
            "<tr>",
                "<td>"+ lang("experience") +":</td>",
                "<td>",
                    "<tpl for='experience'>{.}, </tpl>",
                "</td>",
            "</tr>",
            "<tr>",
                "<td>"+ lang("month_salary") +":</td>",
                "<td>{month_salary}</td>",
            "</tr>",
            "<tr>",
                "<td>"+ lang("location") +":</td>",
                "<td>{location}</td>",
            "</tr>",
            "<tr>",
                "<td>"+ lang("category") +":</td>",
                "<td>{category}</td>",
            "</tr>",
            "<tr>",
                "<td>"+ lang("job_type") +":</td>",
                "<td>{[lang(values.job_type)]}</td>",
            "</tr>",
            "<tr>",
                "<td>"+ lang("contract_duration") +":</td>",
                "<td>{contract_duration}</td>",
            "</tr>",
            "<tr>",
                "<td>"+ lang("noj") +":</td>",
                "<td>{noj}</td>",
            "</tr>",
            "<tr>",
                "<td>"+ lang("status") +":</td>",
                "<td>{[lang(values.status)]}</td>",
            "</tr>",
            "<tr>",
                "<td>"+ lang("date_close") +":</td>",
                "<td>{date_close:date('d-m-Y')}</td>",
            "</tr>",
            "<tr>",
                "<td>"+ lang("date_create") +":</td>",
                "<td>{date_create:date('d-m-Y')}</td>",
            "</tr>",
        "</table>"
    ],
    
    initComponent: function(){
        this.html = "";
        this.buttons = [
            {
                text: lang("btn_close"),
                handler: function(btn){
                    btn.up("window").close();
                }
            }
        ];
        this.callParent(arguments);
    }
});