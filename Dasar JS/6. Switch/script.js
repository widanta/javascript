var item = prompt("masukkan nama makanan atau minuman : \n (cth: nasi, daging, susu, burger, softdrink");

switch (item) {
  case "nasi":
  case "daging":
  case "susu":
    alert("makanan atau minuman sehat");
    break;
  case "burger":
  case "softdrink":
    alert("makanan atau minuman tidak sehat");
    break;
  default:
    alert("anda memasukkan makanan atau minuman yang tidak ada");
    break;
}
