<?php
include('private/DB.php');

$users = DB::query('SELECT * FROM users');


?>


<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Salco - 4B</title>
    <link rel="icon" href="./assets/pictures/salcosecond.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/main.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
    <script src="https://code.jquery.com/jquery-1.10.2.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js"></script>
    <script src="js/main.js"></script>
</head>

<body>

    <div class="navResponsive" id="navResponsive">
    </div>

    <div class="nav" id="nav"></div>

    <div class="klasgenoten">
        <div class="klasgenotenWrapper">
            <h3 class="animated fadeIn">Klasgenoten</h3>
            <?php
            foreach ($users as $user) {
                if ($user['volgnummer'] != 19) {
                    ?>

            <div class="klasgenoot">
                <img src="<?php echo $user['img']; ?>" />
                <p class="name"><?php echo $user['volgnummer'].": ".$user['firstname'] . " " . $user['lastname']; ?></p>
                <p class="gegevens">Gegevens</p>
                <p class="email">Email: <?php echo $user['email']; ?></p>
                <p class="gsm">GSM: <?php echo $user['GSM']; ?></p>
                <p class="straat">Straat: <?php echo $user['straat']; ?></p>
                <p class="huisnummer">Huisnummer: <?php echo $user['nummer']; ?></p>
                <p class="bus">Bus: <?php echo $user['bus']; ?></p>
                <p class="postcode">Postcode: <?php echo $user['postcode']; ?></p>
                <p class="stad">Stad: <?php echo $user['stad']; ?></p>
                <div class="line"></div>


            </div>



            <?php

        }
    }
    ?>
        </div>
    </div>

</body>

</html> 