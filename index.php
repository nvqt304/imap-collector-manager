<?php
    $p = '';
    if(isset($_GET['p'])){
        $p = $_GET['p'];
    }else{
        $p = 'tong-quan';
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
    <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css">
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    <link rel="stylesheet" href="dist/css/adminlte.min.css">
    <title>Quản lý thu thập</title>
</head>
<body class="hold-transition sidebar-mini">
    <!-- Navbar -->
        <?php 
            include './blocks/navbar.php';
        ?>
    <!-- /navbar -->
    <!-- Sidebar -->
    <?php 
            include './blocks/sidebar.php';
        ?>
    <!-- /sidebar -->

    <!-- Content wrapper -->
    <div class="content-wrapper">
        <div class="container-fluid" style="margin-top:20px;">
            <div class="row">


            <?php
                switch($p){
                    case 'tong-quan':
                        require './pages/dashboard.php';
                        break;
                    case 'quan-ly-nguoi-thu-thap':
                        require './pages/collector.php';
                        break;
                    case 'them-moi-nguoi-thu-thap':
                        require './pages/collector-add.php';
                        break;
                    case 'chi-tiet-nguoi-thu-thap':
                        require './pages/collector-detail.php';
                        break;
                    default:  require './pages/dashboard.php';
                }
            ?>
            </div>
        </div>
    </div>
    <!-- /content-wrapper -->
    <script src="plugins/jquery/jquery.min.js"></script>
    <script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="dist/js/adminlte.js"></script>
    <script src="dist/js/demo.js"></script>
    <script src="plugins/chart.js/Chart.min.js"></script>
    <script src="dist/js/pages/dashboard3.js"></script>
</body>
</html>