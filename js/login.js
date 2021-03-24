$(document).ready(function() {

    $("#login_form").submit(function(event) {
        event.preventDefault();

        // $.ajax({
        //     // url: 'http://127.0.0.1:8001/api/auth/login',
        //     url: 'http://192.168.0.146/api-san/public/auth/login',

        //     type: 'POST',
        //     data: $(this).serialize(),
        //     beforeSend: function() {
        //         // toastr.info('Status', 'Procesando...', { timeOut: 3000 });
        //     },
        //     success: function(res) {

        //         alert('logeado')

        //         // localStorage.setItem('token', res.access_token);

        //         // if (localStorage.getItem('token') != "") {
        //         //     location.href = "main.html";
        //         // }

        //     }
        // });

        var data = new FormData();
        data.append("cedula", document.getElementById('cedula').value);
        data.append("password", document.getElementById('clave').value);

        fetch("http://192.168.0.146/api-san/public/api/auth/login", {
                method: "POST",
                body: data
            })
            .then(function(res) {

                localStorage.setItem('token', res.access_token);
                if (localStorage.getItem('token') != "") {
                    window.location.href = "main.html";
                }

            });

    });

});