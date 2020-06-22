contrastBtn = document.getElementById("contrast_button");
btnClassList = contrastBtn.classList;

function toggleContrast() {
  if(btnClassList.contains('low_contrast')) {
    document.body.style.backgroundColor = "rgb(0,0,0)";
  } else {
    document.body.style.backgroundColor = "rgb(193,193,193)";
  }
  btnClassList.toggle('low_contrast');
}

contrastBtn.addEventListener("click", toggleContrast, false);



contrastBtnDesktop = document.getElementById("contrast_button_desktop");
btnClassListDesktop = contrastBtnDesktop.classList;

function toggleContrast() {
  if(btnClassListDesktop.contains('low_contrast')) {
    document.body.style.backgroundColor = "rgb(0,0,0)";
  } else {
    document.body.style.backgroundColor = "rgb(193,193,193)";
  }
  btnClassListDesktop.toggle('low_contrast');
}

contrastBtnDesktop.addEventListener("click", toggleContrast, false);
