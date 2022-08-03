window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

        document.getElementsByClassName("navbar").style.background = "#1C3879";
    } else {

        document.getElementsByClassName("navbar").style.background = "none";
    }
}