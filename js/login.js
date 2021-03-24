$(document).ready(function() {

    $("#login_form").submit(function(event) {
        event.preventDefault();

        $.ajax({
            // url: 'http://127.0.0.1:8001/api/auth/login',
            url: 'http://192.168.0.146/api-san/public/api/auth/login',
            type: 'POST',
            data: $(this).serialize(),
            beforeSend: function() {},
            success: function(res) {

                localStorage.setItem('token', res.token);
                localStorage.setItem('nombre', res.user.name);
                localStorage.setItem('cedula', res.user.cedula);
                localStorage.setItem('role', res.user.role);
                localStorage.setItem('id', res.user.id);

                if (localStorage.getItem('token') != "") {
                    window.location.href = "main.html";
                }

            }
        });

        // var data = new FormData();
        // data.append("cedula", document.getElementById('cedula').value);
        // data.append("password", document.getElementById('clave').value);

        // fetch("http://192.168.0.146/api-san/public/api/auth/login", {
        //         method: "POST",
        //         body: data
        //     })
        //     .then(function(res) {

        //         console.log(res)

        //         localStorage.setItem('token', res.token);
        //         localStorage.setItem('user', res.user);

        //         if (localStorage.getItem('token') != "") {
        //             // window.location.href = "main.html";
        //         }

        //     });

    });

});