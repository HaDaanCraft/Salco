<?php
include('private/DB.php');

$id = $_GET['id'];
$story = DB::query('SELECT * FROM profiles WHERE id=:id', array(':id'=>$id))[0];

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
    <script src="js/main.js"></script>
  </head>
  <body>

    <div class="nav" id="nav"></div>

    <div class="storys">
      <div class="storysWrapper">
        <a href="storys.php"><img src="./assets/pictures/back.png" alt="Terug" id="back"></a>
        <h3 id="viewName"><?php echo $story['Voornaam']." ".$story['Achternaam'];?></h3>
        <div class="storyGrid">
          <div class="photo">
            <img src="<?php echo $story['img']; ?>" />
          </div>
          <div class="text">
            <?php echo $story['story']; ?>
          </div>
        </div>
      </div>
    </div>

  </body>
</html>
