
let specialList = document.querySelectorAll(".special-list > li");
let toggleLi = document.querySelectorAll(".toggleLi");


$.each(specialList, function(i){
    $(this).click(function(){
        $(toggleLi[i]).slideToggle("slow");
      });

});


$(".hamburger").click(function(){
    $(".hamburger-main").slideToggle("slow");
    $(".hamburger-main").css("display", "flex");
});


function handleFirstTab(e) {
    if (e.keyCode === 9) { // the "I am a keyboard user" key
        document.body.classList.add('user-is-tabbing');
        window.removeEventListener('keydown', handleFirstTab);
    }
}

window.addEventListener('keydown', handleFirstTab);