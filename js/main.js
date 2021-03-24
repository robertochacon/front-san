$(document).ready(function() {

    $("#logout").click(function() {
        localStorage.removeItem('token');
        location.href = "index.html";
    });

});