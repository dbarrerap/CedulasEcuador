import sys

def validador(cedula):
    id_provincia = {
        '01': 'Azuay', '02': 'Bolivar', '03': 'Cañar', '04': 'Carchi', '05': 'Cotopaxi',
        '06': 'Chimborazo', '07': 'El Oro', '08': 'Esmeraldas', '09': 'Guayas',
        '10': 'Imbabura', '11': 'Loja', '12': 'Los Rios', '13': 'Manabi', '14': 'Morona Santiago',
        '15': 'Napo', '16': 'Pastaza', '17': 'Pichincha','18': 'Tungurahua',
        '19': 'Zamora Chinchipe', '20': 'Galapagos', '21': 'Sucumbios', '22': 'Orellana',
        '23': 'Santo Domingo de los Tsachilas', '24': 'Santa Elena', '30': 'Extranjero'
    }

    provincia = cedula[0:2]
    if provincia not in id_provincia:
        return 'ID Provincia Invalida.'
    secuencial = cedula[2:9]

    multiplicador = [2, 1, 2, 1, 2, 1, 2, 1, 2]
    total = 0
    digito = 0
    for i in range(len(multiplicador)):
        valor = int(cedula[i]) * multiplicador[i]
        if valor > 9:
            valor -= 9
        total += valor

    if total % 10 != 0:
        digito = 10 - (total % 10)

    return f'Cedula valida.\nEmitida en: {id_provincia[provincia]}\nSecuencia: {secuencial}' if int(cedula[-1]) == digito else 'Digito Verificador Invalido.'

def usage():
    return "Usage: python cedula_ec.py 'xxxxxxxxxx'"

if __name__ == "__main__":
    # Check for valid arguments
    if len(sys.argv) != 2:
        print(usage())
        sys.exit(1)
    
    print(validador(sys.argv[1]))
