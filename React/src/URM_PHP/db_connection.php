<?php
// db_connection.php

  $servername = "127.0.0.1";
    $username = "root";
    $password = "root";
    $dbname = "diversityconnect";  
    
   /*$servername = "51.81.160.157";
    $username = "axs4551_users";
    $password = "Cloud@2023";
    $dbname = "axs4551_diversityconnect"; */
   

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }

?>