<?php
include('private/DB.php');

$storyOf = $_GET['storyOf'];
$story = DB::query('SELECT * FROM profiles WHERE storyOf=:storyOf', array(':storyOf' => $storyOf))[0];

$user = $_COOKIE['user'];
$alloweds = unserialize($story['viewedBy']);
$profiles = DB::query('SELECT * FROM users');

if (isset($_POST['submit'])) {
    if (isset($_POST[3])) {
        echo 'checked';
    } else {
        echo 'not checked';
    }
}

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

    <div class="storys">
        <div class="storysWrapper">
            <a href="storys.php"><img src="./assets/pictures/back.png" alt="Terug" id="back"></a>
            <h3 id="viewName">
                <?php echo $story['Voornaam'] . " " . $story['Achternaam']; ?>
            </h3>
            <div class="storyGrid">
                <div class="photo">
                    <img src="<?php echo $story['img']; ?>" />
                </div>
                <div class="text">
                    <?php echo $story['story']; ?>
                </div>
            </div>
            <?php
            if ($user == $storyOf) {
                echo '<h5>Wie mag deze story zien?</h5>';
                echo '<form action="storyview.php?storyOf=' . $storyOf . '" method="POST">';
                echo '<div class="checkboxes">';
                foreach ($profiles as $profile) {
                    if (in_array($profile['volgnummer'], $alloweds)) {
                        echo '<input type="checkbox" name="' . $profile['volgnummer'] . '" checked/>' . $profile['firstname'] . ' ' . $profile['lastname'] . '<br />';
                    } else {
                        echo '<input type="checkbox" name="' . $profile['volgnummer'] . '" />' . $profile['firstname'] . ' ' . $profile['lastname'] . '<br />';
                    }
                }
                echo '</div>';
                echo '<input type="submit" name="submit" value="Update Privacy" id="submit">';
                echo '</form>';
            }
            ?>
            <p class="dank">Met dank aan Jules Smedts, Margot Vanderhulst en Kato Verdoodt voor het mogen gebruiken van
                de Wattpad verhalen!</p>
        </div>
    </div>

</body>

</html> 