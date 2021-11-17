let slideIndex = 1;
showSlides(slideIndex);
SlideTime();

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.querySelectorAll(".slideS");
  let dots = document.querySelectorAll(".dots");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let index = 0; index < slides.length; index++) {
    slides[index].style.display = "none";
  }

  for (let index = 0; index < slides.length; index++) {
    dots[index].className = dots[index].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function SlideTime() {
  slideIndex += 1;
  showSlides(slideIndex);
  setTimeout(SlideTime, 10000);
}

function OpenLink(n) {
  window.open("./" + n + ".html", "_self");
}
function OpenSite(n) {
  window.open("https://" + n, "_self");
}

function Sort(n) {
  let ImgList = document.querySelectorAll(".item");
  if (n == 0) {
    for (let index = 0; index < ImgList.length; index++) {
      ImgList[index].style.display = "block";
    }
  }
  if (n == 2019) {
    for (let index = 0; index < ImgList.length; index++) {
      if (ImgList[index].id != "y2019") {
        ImgList[index].style.display = "none";
      } else {
        ImgList[index].style.display = "block";
      }
    }
  }

  if (n == 2020) {
    for (let index = 0; index < ImgList.length; index++) {
      if (ImgList[index].id != "y2020") {
        ImgList[index].style.display = "none";
      } else {
        ImgList[index].style.display = "block";
      }
    }
  }

  if (n == 2021) {
    for (let index = 0; index < ImgList.length; index++) {
      if (ImgList[index].id != "y2021") {
        ImgList[index].style.display = "none";
      } else {
        ImgList[index].style.display = "block";
      }
    }
  }
}
