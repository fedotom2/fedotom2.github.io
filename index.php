<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<title>Welcome</title>
		<!-- Styles -->
		<link rel="stylesheet" type="text/css" href="bower_components/bootstrap/dist/css/bootstrap.min.css" />
		<link rel="stylesheet" type="text/css" href="bower_components/bootstrap/dist/css/bootstrap-theme.min.css" />
		<link rel="stylesheet" type="text/css" href="css/style.css" />
		<!-- Scripts -->
		<script type="text/javascript" src="bower_components/jquery/dist/jquery.min.js"></script>
		<script type="text/javascript" src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
		<script type="text/javascript" src="js/script.js"></script>
	</head>
	<body>
		<h1>
			<?php 
				if ($_GET['write']) {
					$write = $_GET['write'];
					if ($write == "") {
						unset($write);
					}

					if (empty($write)) {
						$write = "Hello World";
					}
				} else {
					$write = "Hello World";
				}

				echo $write;
			?>
		</h1>
	</body>
</html>