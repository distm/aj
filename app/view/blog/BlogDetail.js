Ext.define("AJ.view.blog.BlogDetail", {
    extend: "Ext.panel.Panel",
    alias: "widget.blogdetail",
    id: "blogdetail",
    
    autoScroll: true,
    bodyStyle: {
        padding: "10px"
    },
    tpl: [
        "<h2>{title}</h2>",
        "<div style='text-align:right'>",
            lang("date_create")+ ": <strong>{date_create:date('d M Y H:i')}</strong><br />",
            lang("status")+ ": <strong>{status}</strong><br />",
            lang("view_count")+ ": <strong>{view_count} "+ lang("views") +"</strong>",
        "</div>",
        "<p><strong>"+ lang("summary") +":</strong></p>",
        "<div>{summary}</div>",
        "<p>&nbsp;</p>",
        "<p><strong>"+ lang("content") +":</strong></p>",
        "<div>{blog_content}</div>"
    ],
    startingMarkup: lang("msg_please_select_blog"),
    
    initComponent: function(){
        
        // init message
        this.html = this.startingMarkup;
        
        this.callParent(arguments);
    }
});