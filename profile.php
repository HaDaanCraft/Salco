<?php
include('private/DB.php');
$nr = $_COOKIE['user'];
$profile = DB::query('SELECT * FROM users WHERE volgnummer=:nr', array(':nr' => $nr))[0];

if (isset($_POST['submit'])) {
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

    $straat = $_POST['straat'];
    $nummer = $_POST['huisnummer'];
    $bus = $_POST['bus'];
    $postcode = $_POST['postcode'];
    $stad = $_POST['stad'];
    $gsm = $_POST['gsm'];
    $email = $_POST['email'];

    if (password_verify($oldcode, DB::query('SELECT passcode FROM users WHERE volgnummer=:nr', array(':nr' => $nr))[0]['passcode'])) {
        if ($newcode != $oldcode) {
            if ($newcode == $confirmnewcode) {
                DB::query('UPDATE users SET passcode=:passcode, straat=:straat, nummer=:nummer, bus=:bus, postcode=:postcode, stad=:stad, GSM=:gsm, email=:email WHERE volgnummer=:nr', array(':passcode' => password_hash($newcode, PASSWORD_BCRYPT), ':straat' => $straat, ':nummer' => $nummer, ':bus' => $bus, ':postcode' => $postcode, ':stad' => $stad, ':gsm' => $gsm, ':email' => $email, ':nr' => $nr));
                header("Refresh:0");
            } else {
                echo 'Toegangscodes komen niet overeen!';
            }
        } else {
            DB::query('UPDATE users SET straat=:straat, nummer=:nummer, bus=:bus, postcode=:postcode, stad=:stad, GSM=:gsm, email=:email WHERE volgnummer=:nr', array(':straat' => $straat, ':nummer' => $nummer, ':bus' => $bus, ':postcode' => $postcode, ':stad' => $stad, ':gsm' => $gsm, ':email' => $email, ':nr' => $nr));
            header("Refresh:0");
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
            <h3 class="animated fadeIn">Mijn Profiel -
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

                        <h5 class="straat">Straat:</h5>
                        <input type="text" name="straat" id="straat" value=<?php echo $profile['straat']; ?>>

                        <h5 class="huisnummer">Huisnummer:</h5>
                        <input type="text" name="huisnummer" id="huisnummer" value=<?php echo $profile['nummer']; ?>>

                        <h5 class="bus">Bus:</h5>
                        <input type="text" name="bus" id="bus" value=<?php echo $profile['bus']; ?>>

                        <h5 class="postcode">Postcode:</h5>
                        <input type="text" name="postcode" id="postcode" value=<?php echo $profile['postcode']; ?>>

                        <h5 class="stad">Stad:</h5>
                        <input type="text" name="stad" id="stad" value=<?php echo $profile['stad']; ?>>

                        <h5 class="gsm">GSM-nummer:(+32 4xx xx xx xx)</h5>
                        <input type="text" name="gsm" id="gsm" value="<?php echo $profile['GSM']; ?>">

                        <h5 class="email">E-mail:</h5>
                        <input type="text" name="email" id="email" value=<?php echo $profile['email']; ?>>

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