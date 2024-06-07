$('#nav_menu_btn').click(function () {
    $('#nav_menu_btn').css('top', '-100%');
    $('#nav_menu_xbtn').css('top', '3%');
    $('.side_bar').css('left', '0');
});

$('#nav_menu_xbtn').click(function () {
    $('#nav_menu_xbtn').css('top', '-100%');
    $('#nav_menu_btn').css('top', '4%');
    $('.side_bar').css('left', '-110%');
});

data = document.getElementById('nav_socail').innerHTML
document.getElementById('side_bar_social').innerHTML += data

// =================================================================================================

function go_insta() {
    window.open("https://www.instagram.com/haiyanali/", "_blank");
}
function go_web() {
    window.open("https://www.xpricon.com", "_blank");
}
function go_certifications() {
    window.location.href = "certifications.html";
}
function go_aboutme() {
    window.location.href = "aboutme.html";
}
function open_contact() {
    $('#contact_modal_btn').trigger('click');
}

function get_mail() {
    var emailAddress = "haiyanalikhan@gmail.com";

    var subject = "Subject";
    var body = "Body text goes here.";

    var mailtoUrl = "mailto:" + encodeURIComponent(emailAddress) +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

    window.location.href = mailtoUrl;
}

window.addEventListener('load', (event) => {
    $("#loader_div").css('display','none')
    $("#root").css('display','block')
});