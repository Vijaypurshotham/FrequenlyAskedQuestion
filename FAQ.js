// ! Variables
const accordion = document.getElementsByClassName("content-container");

// ! toggle method which is used to add or remove the class name
for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
