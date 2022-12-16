var yash = prompt("yashiniz");
yash = parseInt(yash);

if (!yash) {
  alert("yashinizi daxil edin");
} else if (yash < 18) {
  alert("siz daxil ola bilmezsiz");
} else if (yash >= 18 && yash < 55) {
  alert("buyurun kecin");
} else if (yash >= 55) {
  alert("agsaqqal get oyana");
}
