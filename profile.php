<?php
include('private/DB.php');
$nr = $_COOKIE['user'];
$profile = DB::query('SELECT * FROM users WHERE volgnummer=:nr', array(':nr' => $nr))[0];

if (isset($_POST['submit'])) {
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $oldcode = $_POST['oldcode'];
    if ($_POST['newcode']) {
        $newcode = $_POST['newcode'];
    } else {
        $newcode = $oldcode;
    }
    if ($_POST['confirmnewcode']) {
        $confirmnewcode = $_POST['confirmnewcode'];
    } else {
        $confirmnewcode = $oldcode;
    }

    if (password_verify($oldcode, DB::query('SELECT passcode FROM users WHERE volgnummer=:nr', array(':nr' => $nr))[0]['passcode'])) {
        if ($newcode != $oldcode) {
            if ($newcode == $confirmnewcode) {
                DB::query('UPDATE users SET firstname=:firstname, lastname=:lastname, passcode=:passcode WHERE volgnummer=:nr', array(':firstname' => $firstname, ':lastname' => $lastname, ':passcode' => password_hash($newcode, PASSWORD_BCRYPT), ':nr' => $nr));
            } else {
                echo 'Toegangscodes komen niet overeen!';
            }
        } else {
            DB::query('UPDATE users SET firstname=:firstname, lastname=:lastname WHERE volgnummer=:nr', array(':firstname' => $firstname, ':lastname' => $lastname, ':nr' => $nr));
        }
    } else {
        echo 'Foute oude toegangscode';
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

    <div class="profile">
        <div class="profileWrapper">
            <h3>Mijn Profiel -
                <?php echo $profile['firstname'] . " " . $profile['lastname']; ?>
            </h3>
            <div class="profileEdit">
                <form action="profile.php" method="post">
                    <div class="profileEditForm">
                        <h5 class="firstname">Voornaam: </h5>
                        <input type="text" disabled="true" name="firstname" id="firstname" value=<?php echo $profile['firstname']; ?>>
                        <h5 class="lastname">Achternaam: </h5>
                        <input type="text" disabled="true" name="lastname" id="lastname" value=<?php echo $profile['lastname']; ?>>
                        <h5 class="number">Volgnummer:</h5>
                        <input type="text" disabled="true" name="nr" id="nr" value=<?php echo $profile['volgnummer']; ?>>
                        <h5 class="newcode">Nieuwe toegangscode: </h5>
                        <input type="password" name="newcode" id="newcode">
                        <h5 class="confirmnewcode">Bevestig nieuwe toegangscode: </h5>
                        <input type="password" name="confirmnewcode" id="confirmnewcode">
                        <h5 class="oldcode">Oude toegangscode: </h5>
                        <input type="password" name="oldcode" id="oldcode">
                        <input type="submit" name="submit" value="Submit Changes" id="submit">
                    </div>
                </form>
                <h6>Opmerking: Altijd oude toegangscode ingeven bij verandering van gegevens! Zelfs als je de code niet
                    verandert!</h6>
            </div>
        </div>
    </div>
</body>

</html> 