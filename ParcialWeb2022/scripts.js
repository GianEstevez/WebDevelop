
function obtenerParams(){
    editando = false;
    const requestParameters = new URLSearchParams(window.location.search);
    document.getElementById("eti-nombre").innerText = requestParameters.get("name");
    document.getElementById("eti-email").innerText = requestParameters.get("email");
    document.getElementById("eti-telf").innerText = requestParameters.get("phone");
    document.getElementById("eti-gustos").innerText = requestParameters.get("gusto");
    document.getElementById("eti-porc").innerText = requestParameters.get("perc");
}


var filaActual = 0;
var editando = false;

function editarGusto(row){
    if (editando){
        alert("Sólo se puede editar una linea.  Recargue la página para poder editar otra")
        return;
    }
    editando = true;
    var campo_Gusto = document.getElementById('campo-gusto-' + row);
    var campo_Porcentaje = document.getElementById('campo-porcentaje-' + row);
    var campo_Editar = document.getElementById('campo-editar-' + row);
    const valorGustoAnterior = campo_Gusto.innerText;
    const valorPorcentajeAnterior = campo_Porcentaje.innerText;
    campo_Gusto.innerHTML = '<input type="text" id="input-gusto-editar-' + row + '"class="form-control normal-input" value="' + valorGustoAnterior + '" name="gusto">';
    campo_Porcentaje.innerHTML = '<input type="text" id="input-percentage-edit-' + row + '" class="form-control normal-input" value="' + valorPorcentajeAnterior + '" name="perc">';
    campo_Editar.innerHTML = 'En edición';
    var b_editar = document.getElementById('editar-bot');
    b_editar.innerHTML = '<br> <p class="subtitle-text"> Pulse -Aceptar- para guardar los cambios o -Cancelar- para anularlos </p> <button type="submit" class="btn btn-secondary"> Aceptar </button> <button type="button" class="btn btn-danger ms-1" onclick="cancelEdit(' + row + ', ' + valorGustoAnterior + ', ' + valorPorcentajeAnterior + ')">Cancelar</button>';
}


function agregarGusto(){
    const gustos_Input = document.getElementById('gustos-ent');
    const tablaGustos = document.getElementById('gustos-tab');
    var row = tablaGustos.insertRow();
    filaActual += 1;
    var campo_Gusto = row.insertCell();
    var campo_Porcentaje = row.insertCell();
    var campo_Editar = row.insertCell();
    campo_Gusto.innerHTML = gustos_Input.value;
    campo_Porcentaje.innerHTML = 0;
    campo_Editar.innerHTML = '<a id="gusto-editar-' + filaActual + '" >Editar</a>';
    campo_Gusto.setAttribute('id', 'campo-gusto-' + filaActual);
    campo_Porcentaje.setAttribute('id', 'campo-porcentaje-' + filaActual);
    campo_Editar.setAttribute('id', 'campo-editar-' + filaActual);
    var editar_Texto = document.getElementById('gusto-editar-' + filaActual);
    editar_Texto.setAttribute('class', 'gusto-editar');
    editar_Texto.setAttribute('onclick', 'editarGusto(' + filaActual + ')');
}



function cancelEdit(row, valorGusto, valorPorcentaje){
    editando = false;
    var campo_Gusto = document.getElementById('campo-gusto-' + row);
    var campo_Porcentaje = document.getElementById('campo-porcentaje-' + row);
    var campo_Editar = document.getElementById('campo-editar-' + row);
    campo_Gusto.innerHTML = valorGusto;
    campo_Porcentaje.innerHTML = valorPorcentaje;
    campo_Editar.innerHTML = '<a id="gusto-editar-' + row + '" >Editar</a>';
    campo_Gusto.setAttribute('id', 'campo-gusto-' + row);
    campo_Porcentaje.setAttribute('id', 'campo-porcentaje-' + row);
    campo_Editar.setAttribute('id', 'campo-editar-' + row);
    var editar_Texto = document.getElementById('gusto-editar-' + row);
    editar_Texto.setAttribute('class', 'gusto-editar');
    editar_Texto.setAttribute('onclick', 'editarGusto(' + row + ')');
}

