function validador(cedula) {
    cedula = cedula.trim();

    // En caso de enviar un campo vacio
    if (cedula.length === 0) return 'Campo vacio';

    if (cedula.length !== 10) return 'Numero de Cedula Incompleto.'

    const id_provincia = {
        '01': 'Azuay', '02': 'Bolivar', '03': 'Cañar', '04': 'Carchi', '05': 'Cotopaxi',
        '06': 'Chimborazo', '07': 'El Oro', '08': 'Esmeraldas', '09': 'Guayas',
        '10': 'Imbabura', '11': 'Loja', '12': 'Los Rios', '13': 'Manabi', '14': 'Morona Santiago',
        '15': 'Napo', '16': 'Pastaza', '17': 'Pichincha','18': 'Tungurahua',
        '19': 'Zamora Chinchipe', '20': 'Galapagos', '21': 'Sucumbios', '22': 'Orellana',
        '23': 'Santo Domingo de los Tsachilas', '24': 'Santa Elena', '30': 'Extranjero'
    };
    const provincia = cedula.substring(0, 2);
    if (!id_provincia.hasOwnProperty(provincia))
    {
        return 'ID Provincia Invalida.';
    }

    const secuencial = cedula.substring(2, 9);

    const multiplicador = [2, 1, 2, 1, 2, 1, 2, 1, 2];
    let total = 0;
    let digito = 0;
    for (let i = 0; i < multiplicador.length; i++)
    {
        let valor = parseInt(cedula[i]) * multiplicador[i];
        if (valor > 9) valor -= 9;
        total += valor;
    }
    
    if (total % 10 !== 0) digito = 10 - (total % 10);
    console.log(digito);

    const success = 'Cedula Valida.<br>Origen: ' + id_provincia[provincia] + '<br>Secuencial: ' + secuencial;
    return parseInt(cedula.substring(cedula.length - 1)) === digito ? success : 'Digito Verificador Invalido.';
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#form').onsubmit = () => {
        const respuesta = validador(document.querySelector('#cedula').value);

        const li = document.createElement('li');
        li.setAttribute('class', 'list-group-item')
        li.innerHTML = document.querySelector('#cedula').value + ': ' + respuesta;
        document.querySelector('#results').append(li);

        document.querySelector('#cedula').value = '';
        document.querySelector('button').disabled = true;
        return false;
    }

    document.querySelector('button').disabled = true;

    document.querySelector('#cedula').onkeyup = () => {
        if (document.querySelector('#cedula').value.length > 0) {
            document.querySelector('button').disabled = false;
        } else {
            document.querySelector('button').disabled = true;
        }
    };
});