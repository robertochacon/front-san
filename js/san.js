$(document).ready(function() {

    getSans()

    $("#san_form").submit(function(event) {
        event.preventDefault();

        $.ajax({
            url: 'http://api-san.herokuapp.com/api/auth/sans',
            type: 'POST',
            data: $(this).serialize(),
            beforeSend: function() {},
            success: function(res) {
                console.log(res)
                getSans()
                $("#add_san").modal('hide');
            }
        });

    });

    function getSans() {
        $.ajax({
            url: 'http://api-san.herokuapp.com/api/auth/sans',
            // url: 'http://192.168.111.176/api-san/public/api/auth/sans',
            type: 'GET',
            beforeSend: function() {
                $("#datos_san").html('<img src="https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif">');
            },
            success: function(res) {
                var template = '';
                template += `<div class="table-responsive"><table id="sans" class="table table-striped table-bordered responsive" style="width:100%">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Estado</th>
                        <th>Desde</th>
                        <th>Hasta</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>`;

                for (let i = 0; i < res.data.length; i++) {
                    template += `<tr>
                        <td>${res.data[i].name}</td>
                        <td>${res.data[i].status}</td>
                        <td>${res.data[i].from}</td>
                        <td>${res.data[i].to}</td>
                        <td><button onclick="delete_san(${res.data[i].id})" class="btn btn-danger">Eliminar</button></td>
                    </tr>`;
                }

                template += `</body></table></div>`;
                $("#datos_san").html(template);
                $('#sans').DataTable();

            }
        });
    }

});

function delete_san(id) {
    $.ajax({
        url: 'http://api-san.herokuapp.com/api/auth/sans',
        type: 'DELETE',
        data: { id: id },
        beforeSend: function() {},
        success: function(res) {
            console.log(res)
        }
    });
}