$(document).on('change', '#departamento', function (event) {

    let dep = $("#departamento option:selected").text();

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'https://www.datos.gov.co/resource/xdk5-pm3f.json' + '?departamento=' + dep, true);

    xhttp.send();

    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            let datos = JSON.parse(this.responseText);
            let tabla = document.querySelector('#municipio');
            tabla.innerHTML = '<option value="" selected>Seleccione Municipio</option>';

            var names = datos.map(function (mun) { return mun.municipio; });
            var sorted = names.sort();
            var unique = sorted.filter(function (value, index) {
                return value !== sorted[index + 1];
            });

            for (let item of unique) {
                tabla.innerHTML += `

                    <option value="">${item}</option>`
            }

        }
    }
});




$(document).ready(function () {

    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'https://www.datos.gov.co/resource/xdk5-pm3f.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            let datos = JSON.parse(this.responseText);
            console.log(datos);
            let departamento = document.querySelector('#departamento');
            departamento.innerHTML = '<option value="" selected>Seleccione Departamento</option>';

            var names = datos.map(function (dep) { return dep.departamento; });
            var sorted = names.sort();
            var unique = sorted.filter(function (value, index) {
                return value !== sorted[index + 1];
            });


            for (let item of unique) {

                departamento.innerHTML += `

                <option value="">${item}</option>
                `
            }
        }
    }
});



