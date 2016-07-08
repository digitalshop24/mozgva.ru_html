<?

include("data.php");

$subject="Регистрация - Мозгва";

// $tel = clearData($_POST[_fixed_name("entry.110359585")]);

$body="Имя капитана: ".clearData($_POST[_fixed_name("entry_751817998")])."
Название команды: ".clearData($_POST[_fixed_name("entry.1622386422")])."
Количество человек: ".clearData($_POST[_fixed_name("entry.1926264121")])."
Телефон или электропочта: ".clearData($_POST[_fixed_name("entry.1250708141")])."
Имя боцмана: ".clearData($_POST[_fixed_name("entry.191141737")])."
Телефон или электропочта: ".clearData($_POST[_fixed_name("entry.307300218")])."
";

@mail($email,$subject,$body,"From:$email\r\nContent-type: text/plain; charset=utf-8\r\nContent-Transfer-Encoding: 8bit\r\n");
?>	