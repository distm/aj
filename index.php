<?php 
session_start();

// check token
$logged_in = FALSE;
if(isset($_SESSION['token']) && $_SESSION['token']!='' && $_SESSION['token']==$_GET['token'])
{
    $logged_in = TRUE;
}
else
{
    session_destroy();
}

// logout
if(isset($_GET['q']) && strtolower($_GET['q']) == 'logout')
{
    $base_url = 'http://'. $_SERVER['HTTP_HOST'] .'/aj';
    session_destroy();
    header('Location: '. $base_url);
}
?>
<html>
    <head>
        <title>Admin - Job4Career.Com</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" type="text/css" href="ext4/resources/css/ext-all-neptune.css" />
        <link rel="stylesheet" type="text/css" href="app/ux/form/HtmlEditor/css/iframe_styles.css" />
        <link rel="stylesheet" type="text/css" href="shared/css/styles.css" />
    </head>
    <body>
        <script type="text/javascript">
            var BASE_URL = location.protocol +"//"+ location.host +"/aj/",
                API_URL = BASE_URL +"api-server/",
                TOKEN = <?php echo (isset($_SESSION['token']) && $_SESSION['token']!='' ? '"'.$_SESSION['token'].'"' : 'false'); ?>;
        </script>
        <script type="text/javascript" src="ext4/ext-all.js"></script>
        <script type="text/javascript" src="ext4/locale/ext-lang-id.js"></script>
        <script type="text/javascript" src="shared/js/lang-id.js"></script>
        <?php if(! $logged_in): ?>
            <script type="text/javascript" src="shared/js/app-login.js"></script>
        <?php else: ?>
            <script type="text/javascript" src="shared/js/app.js"></script>
        <?php endif; ?>
    </body>
</html>
