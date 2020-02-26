contrastBtn = document.getElementById("contrast_button");
btnClassList = contrastBtn.classList;

function toggleContrast() {
  if(btnClassList.contains('low_contrast')) {
    document.body.style.backgroundColor = "rgb(0,0,0)";
  } else {
    document.body.style.backgroundColor = "rgb(214,214,214)";
  }
  btnClassList.toggle('low_contrast');
}

contrastBtn.addEventListener("click", toggleContrast, false);
