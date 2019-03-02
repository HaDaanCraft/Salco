<?php
include('private/DB.php');

$profiles = DB::query('SELECT * FROM profiles');

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

    <div class="nav" id="nav"></div>

    <div class="storys">
        <div class="storysWrapper">
            <h3 class="animated fadeIn">Story's</h3>
            <div class="storysGrid">
                <?php
                foreach ($profiles as $profile) {
                  echo '<div class="profile"><a href="storyview.php?id=' . $profile['id'] . '">';
                  echo '<div class="photo"><img src="' . $profile['img'] . '" /></div>';
                  echo '<p class="voornaam">' . $profile['Voornaam'] . '</p>';
                  echo '<p class="achternaam">' . $profile['Achternaam'] . '</p>';
                  echo '</a></div>';
                }
                ?>
            </div>
        </div>
    </div>

</body>

</html> 