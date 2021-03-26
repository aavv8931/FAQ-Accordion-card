let question = document.getElementsByClassName("accordion-question");
//let content = document.getElementsByClassName("accordion-content");

function click_action() {
     $(".accordion-question").removeClass("active");
     $(".accordion-content").removeClass("show");

    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("show");
}

for (let i = 0; i < question.length; i++) {
    question[i].onclick = click_action;
}
