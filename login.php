<?php
include('private/DB.php');

if (isset($_POST['login'])) {
    $pin = $_POST['pin'];
    $nr = $_POST['nr'];

    if (DB::query('SELECT * FROM users WHERE volgnummer=:nr', array(':nr' => $nr))) {
        $volgnummer = DB::query('SELECT volgnummer FROM users WHERE passcode=:pin AND volgnummer=:nr', array(':pin' => $pin, ':nr' => $nr))[0]['volgnummer'];
        echo '<script src="https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js"></script>';
        echo '<script type="text/javascript">',
            'Cookies.set("user", "' . $volgnummer . '", { expires: 1 });',
            '</script>';
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

<body class="loginFile">

    <div class="nav">
        <div class="navWrapper">
            <img src="./assets/pictures/salcosecond.ico" alt="Salco Second Icon">
        </div>
    </div>

    <div class="login">
        <div class="loginWrapper">
            <h3>Login</h3>
            <form action="login.php" method="post">
                <input type="text" name="nr" placeholder="Volgnummer..." id="nr">
                <br />
                <input type="password" name="pin" placeholder="Pin..." id="pin">
                <br />
                <input type="submit" name="login" value="Login" id="button">
            </form>
        </div>
    </div>

</html> 