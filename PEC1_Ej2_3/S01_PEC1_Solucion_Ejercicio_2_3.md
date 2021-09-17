Reserva de asientos de cine con conversor de tipo de moneda (3.5 puntos).

1. Realiza una pequeña aplicación para la reserva de asientos de películas, se utilizará almacenamiento local del navegador (es similar a utilizar un fichero de texto, pero almacenado en el navegador). (1.5 puntos)
    Vídeo ejemplo para seguir: https://learning.oreilly.com/videos/20-web-projects/9781800563049/9781800563049-video3_1

2. Integra esta parte con la Calculadora de tipos de cambio de moneda de forma que la aplicación realizada para reserva de asientos de cine permita seleccionar la moneda en la que trabajara la aplicación y se ofrezcan tanto los precios de las películas, como los precios finales en la moneda seleccionada. (2 puntos)
Por ejemplo, sería algo como esto: (img "Imagen Ej2_3")

Desarrollo front-end con frameworks Javascript 13/09/2021 pág. 13
Debes incluir, un desplegable (o similar) que permita seleccionar la moneda y al cambiar la moneda seleccionada debes hacer:
- Que cambie el importe de la entrada, si antes la entrada de Avengers: Endgame, eran 10 dólares, ahora al seleccionar la moneda EUR se aplicara la conversión. En el ejemplo he supuesto que 10 dólares equivalen a 8.45 EUR, esta conversión debe realizarla online el programa consultando el API usada en el ejercicio 2.
- También debe cambiar el importe total de las entradas. Si antes 4 entradas tenían un precio de 40 dólares, ahora debe mostrar el equivalente en la moneda seleccionada, en el ejemplo 33.8 EUR.