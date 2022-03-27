# Informe Práctica Práctica 6: Clases e interfaces genéricas. Principios SOLID

![img](https://i.imgur.com/G7olIvc.jpg)

## Desarrollo de Sistemas Informáticos

- Alumna: Andrea Calero Caro ([alu0101202952@ull.edu.es](alu0101202952@ull.edu.es))
- Grupo: PE102 (Fecha entrega informe 27/03/2022)

## ÍNDICE

1. Objetivo
2. Aceptación de la Asignación en GitHub Classroom
3. Creación de la estructura del proyecto
4. Desarrollo de los ejercicios (1, 2 y 3)

    4.1. Ejercicio 1

    4.2. Ejercicio 2

    4.3. Ejercicio 3

5. Uso de 
6. Desarrollo del informe con GitHub Pages
7. Dificultades
8. Conclusiones
9. Referencias

## OBJETIVO
El objetivo en esta práctica tendremos que resolver una serie de ejercicios de programación que nos permitirán conocer más en profundidad las clases e interfaces genéricas del lenguaje TypeScript. Además, también deberán utilizar los principios SOLID de diseño orientado a objetos.


## ACEPTACIÓN DE LA ASIGNACIÓN EN GITHUB CLASSROOM
Como paso previo, se acepta la asignación del GitHub classroom. Así obtener el repositorio con el que se trabajará la práctica.


## CREACIÓN DE LA ESTRUCTURA DEL PROYECTO

Como se indicó en clase se empieza a desarrollar la estructura del proyecto, el cual se alojará en el repositorio que se genera tras la aceptación de la asignación en GitHub Classroom. Se clona dicho repositorio con ```git clone [nombre_del_repositorio]``` y con ello se comienza a estructurar el trabajo. Como se ha realizado en prácticas anteriores.

Se empieza creando un nuevo directorio y espacio de trabajo que se denota por __practica6-clasesgenericas__. Desde el cual al acceder se creará el fichero __package.json__ el cual establecerá las dependencias de desarrollo y la ejecución del proyecto. Para ello se ejecua el comando ```npm init --yes```

Primero se instala las dependencias respectivas para la ejecución continua, esto con __tsc watch__. Y se añade al __package.json__

Una vez se añaden las dependencias en el package.json se crea el fichero de configuración de typescript el cual especifica las opciones del compilador de TypeScript. En este caso se hará de forma automática con el comando ```tsc --init``` y modificando el mismo para indicar estándar de JavaScript, el directorio de salida donde está el código en JavaScript(dentro de __./dist__) y el código fuente escrito en TypeScript (dentro de __./src__), entre otras especificaciones.

Se incorporará el desarrollo de la documentación perteneciente al proyecto, esto con __Typedoc__ y el desarrollo de pruebas.

La metodología que se emplea es _TDD_, y se realizarán las pruebas con __Mocha__ y __Chai__. Se empleará metodología __TDD__ ya que se implementó en otro momento y es conocido. Dicha metodología consiste en realizar primero las pruebas pertenecientes al ejercicio (lo que se espera de resultado) y luego se desarrolla el código de dicho ejercicio. Finalmente se ejecuta el código y las pruebas para comprobar que se realizó todo correctamente. Esta metodología es la que se empleó.

Se instala las dependencias de Typedoc, Mocha y Chai correspondientes y se añaden al __package.json__:

Se crea de forma manual con ```touch typedoc.json``` y se añaden las rutas relativas a los ficheros de los que se quiere realizar la documentación. Y se crea de forma manual con ```touch .mocharc.json``` y se añaden las especificaciones relativas a los tests como la ruta con terminación de los ficheros. 

Para ejecutar la documentación se ejecuta el comando ```npm run doc``` y para ejecutar los tests ```npm run test```.

Además tras el desarrollo de cada parte o método del código se desarrolló el cubrimiento del código con Coveralls, este como se realizó desde la práctica 5. Para usar __Coveralls__ se instalan y añaden las dependencias. Y con el comando ```npm run coverage``` se ejecutará los test y el cubrimiento.


Por todo ello en esta práctica la metodología por TDD es crear el test, hacer un ```git add .```, seguido de ```git commit -m "Comentario"``` y haciendo un push con ```git push --all```. Luego se realiza el código correspondiente a la prueba o pruebas, ya que en algún momento de las clases genéricas los métodos son similares, se vuelve a hacer los git correspondientes. Y por último, se realiza el comentario del código, la generación de la documentación y el cubrimiento con el comando de Coveralls. Todo ello y se vuelve a hacer los git correspondientes. Y esta será la metodología llevada a cabo.

Finalmente, se termina la estructura del proyecto creando un fichero __.gitignore__ .

Quedando de estructura final:

![img](https://i.imgur.com/ebX5NCH.jpg)


## DESARROLLO DE LOS EJERCICIOS (1 y 2)

El proyecto consta de 2 ejercicios a desarrollar en TypeScript. En este apartado se explicarán cada uno de estos y el planteamiento que se utilizó.


### EJERCICIO 1

En este ejercicio se quiere implementar una modificación de la práctica 3, donde se crea una estructura de clases que simulen a los pokemon, su pokedex y el combate entre dos pokemon.

Siguiendo la metodología TDD, primero se desarrolló el test en el directorio específico para este ejercicio __./test/ejercicio-1__ denotado el fichero como __ejercicio-1.spec.ts__.

Se quiso comenzar el ejercicio desarrollando los principios SOLID, donde cada clase será un fichero distinto __.ts__. Habrán 3 clases y por tanto 3 ficheros correspondientes. 

En el fichero __ejercicio-1.spec.ts__ se alojan todas las pruebas, donde cada _describe_ corresponde a una clase y se importaron por tanto en las pruebas. Realizando las pruebas mediante TDD, primero se desarrolló el test para un método, luego su código, se comprobó su funcionamiento, se realiza la cobertura con Coveralls como indico en el apartado __5. Uso de Coveralls__ de este informe y finalmente se realiza la documentación.

Quedando todos los test tal que:

![img](https://i.imgur.com/vVB5ntj.jpg)
![img](https://i.imgur.com/33CeN1q.jpg)

Esto no ejecutaría nada ya que no está implementado las clases que se indican (Pokemon, Pokedex y Combat), por ello se crea en el directorio __./src/ejercicio-1__ los ficheros correspondientes, según los principio __SOLID__ un fichero por cada clase.

#### Fichero pokemon.ts

Este fichero tiene la __clase Pokemon__, esta clase tiene un constructor que genera los pokemon con sus especificaciones (atributos protegidos para que en caso de herencia las clases hijas los usen). Los atributos son los siguientes:

![img](https://i.imgur.com/d6DSGKo.jpg)

A su vez la clase Pokemon tiene los setters y getters, que son métodos públicos para poder acceder haciendo uso de una buena práctica a estos atributos protegidos. Además, como el atributo estadísticas es un atributo con distintos sub-atributos asociados a él pues se realizó getters de estos en específico para más adelante si se quiere uno en particular que sea manejable usarlo.

Quedando los setters y getters de la siguiente forma:

![img](https://i.imgur.com/zlEqH2h.jpg)

![img](https://i.imgur.com/ETjFpBV.jpg)

![img](https://i.imgur.com/w2Gn8bM.jpg)

Finalizando así esta clase y mostrándose así por pantalla.

![img](https://i.imgur.com/lBEtioT.jpg)

Se ejecuta para la documentación con ```npm run doc```. Y para ejecutar el código con ```npm start```.

![img](https://i.imgur.com/wRy09ml.jpg)

Finalmente, se ejecuta el test con ```npm run test```:

![img](https://i.imgur.com/EuCeUKm.jpg)

#### Fichero pokedex.ts

Este fichero tiene la __clase Pokedex__, esta clase tiene un constructor que genera un array con los pokemons de tipo __Pokemon__ privado y así tener las especificaciones de cada Pokemon, quedando:

![img](https://i.imgur.com/xuFUEcG.jpg)

A su vez se implementó los setters y getters correspondientes para almacenar pokemons y devolverlos:

![img](https://i.imgur.com/3yS4cXh.jpg)


Finalmente, se ejecuta el test con ```npm run test```:

![img](https://i.imgur.com/9WTCDY6.jpg)


#### Fichero combat.ts

Este fichero tiene la __clase Combat__, esta clase tiene un constructor que recibe los dos pokemons que son tipo __Pokemon__ que van a luchar:

![img](https://i.imgur.com/i9dMSOQ.jpg)

Y luego tiene un método público denotado por __start()__ que simulará el combate entre pokemons. El planteamiento para el combate es similar al ejercicio de la práctica 3 en la que se basa. Donde se tiene las efectividades y los tipos y a partir de un cálculo se halla el daño que causa cada pokemon en la batalla. Sin embargo, se adapta a las clases y getter para conseguir los atributos con los que se trabajará y así comienza el combate.

Quedando el código tal que:

![img](https://i.imgur.com/oMQsgZ9.jpg)

![img](https://i.imgur.com/f2wCA1q.jpg)



Se ejecuta para la documentación con ```npm run doc```. Y para ejecutar el código con ```npm start```.

![img](https://i.imgur.com/uWxaQCH.jpg)

Finalmente, se ejecuta el test con ```npm run test```:

![img](https://i.imgur.com/f4YTJZN.jpg)


Una vez finaliza todo el código se ejecuta el cubrimiento con ```npm run coverage```:

![img](https://i.imgur.com/UK2na0M.jpg)




### EJERCICIO 2

En este ejercicio se quiere desarrollar el juego _Conecta 4_. Para su desarrollo se empleó como en el ejercicio anterior la metodología TDD y además se usó Coveralls para el cubrimiento del código y se tuvieron en cuenta los Principios __SOLID__ para que cada fichero contuviera una clase y así respectivamente.

Siguiendo la metodología TDD, primero se desarrolló el test en el directorio específico para este ejercicio __./test/ejercicio-2__ denotado el fichero como __ejercicio-2.spec.ts__.

Se quiso comenzar el ejercicio desarrollando los principios SOLID, donde cada clase será un fichero distinto __.ts__. Habrán 2 clases y por tanto 2 ficheros correspondientes. 

En el fichero __ejercicio-2.spec.ts__ se alojan todas las pruebas, donde cada _describe_ corresponde a una clase y se importaron por tanto en las pruebas. Realizando las pruebas mediante TDD, primero se desarrolló el test para un método, luego su código, se comprobó su funcionamiento, se realiza la cobertura con Coveralls como indico en el apartado __5. Uso de Coveralls__ de este informe y finalmente se realiza la documentación.

Quedando el test tal que:

![img](https://i.imgur.com/kwLHh0k.jpg)


#### Fichero tablero.ts

En este fichero se pretende desarrollar lo relativo a la generación del tablero de juego del Conecta 4, donde su constructor tiene dos atributos protegidos las filas y las columnas.

![img](https://i.imgur.com/OpVqoqt.jpg)

Luego con dichas filas y columnas se genera el tablero con un método público que genera la matriz del tablero correspondiente. 

![img](https://i.imgur.com/zKElogx.jpg)

Y se implementó un método push relativo al tablero ya que más adelante se necesitará llamar para insertar la fichas en el tablero.

![img](https://i.imgur.com/jh1b0Is.jpg)

Y a continuación se implementó los getter correspondientes a las filas y columnas para poder comprobar si una fila o columna está llena, preferiblemente columna, quedando tal que:

![img](https://i.imgur.com/Na8prSF.jpg)


Al ejecutar el código se muestra:

![img](https://i.imgur.com/5ZKdVu8.jpg)

El test se muestra:

![img](https://i.imgur.com/nsnzfag.jpg)


#### Fichero juego.ts

En este fichero se implementa la clase Juego que hereda de Tablero ya que se requiere de él para poder establecer las reglas del juego, esa es la función de esta clase. Como constantes globales habrán dos jugadores y dos colores que se denotan los principales del juego.

![img](https://i.imgur.com/A4Lnyv7.jpg)

Y se tiene en el constructor la herencia de Tablero de sus filas y columnas y una que es tablero en caso de necesitarlo.

![img](https://i.imgur.com/sANuq8e.jpg)

Se tendrá como norma que las columnas no estén llenas para poder introducir fichas en ellas para ello se requiere de conocer mediante true (está llena) o false (si no lo está)

![img](https://i.imgur.com/cjfFnUc.jpg)

El siguiente método público será __colocarPieza()__ que recibe el tablero, la columna y el jugador. Se asignará color a los jugadores y el propósito es introducir una ficha de un determinado color predeterminado en las constantes globales antes mencionadas y ponerlas en el tablero mediante el método específico que introduce la ficha (__pushFicha()__).

![img](https://i.imgur.com/KXgikMh.jpg)

Lo último que se mirará es según la colocación de la ficha se irá contando cuantas fichas de ese color en distintas posiciones, pero consecutivas se pusieron. El mínimo de rondas para ganar son 8, 4 movimientos del rival y 4 tuyos para que 4 fichas sean consecutivas del mismo color y así definir un ganador. Ese es el mínimo de movimiento. La lógica que se emplea es que si en esos movimientos hay 4 fichas del mismo color y estas son consecutivas unas de otras entonces se acepta un ganador. Debido a la dificultad de planteamiento no se acabó de desarrollar el código, no obstante se dessarrolló una parte del código.

![img](https://i.imgur.com/kBAxd79.jpg)

Al ejecutar el código se muestra:

![img](https://i.imgur.com/23nzLvW.jpg)

El test se muestra:

![img](https://i.imgur.com/wG7zZtk.jpg)


Una vez finaliza todo el código se ejecuta el cubrimiento con ```npm run coverage```:

![img](https://i.imgur.com/zDsaqyJ.jpg)


## USO DE COVERALLS

Para usar Coveralls se instaló la dependencia correspondiente mediante ```npm install --save-dev nyc coveralls``` con ello se añade dicha configuración en el __package.json__, añadiendo la línea __"coverage": "nyc npm test"__. Con ello al hacer el comando ```npm run coverage``` se ejecutará las pruebas test con nyc y coveralls y así no incluso necesitar hacer ```npm run test``` ya que con Coveralls se ejecutan los propios test a parte del cubrimiento.

Luego cuando se sube, el código actualizado al GitHub es necesario hacer público el repositorio para que en la página de Coveralls aparezca el repo asociado. Lo siguiente es guardar el token que se genera en un fichero __.coveralls.yml__ que se crea en la raíz del directorio de trabajo.

![img](https://i.imgur.com/pI4uEh7.jpg)

Y para mejorar se añade en el package.json una línea para ejecutar el cubrimiento de forma más completa. Con __"coverage": "nyc npm test && nyc report --reporter=text-lcov | coveralls && rm -rf .nyc_output"__

Este cubrimiento da a lugar al siguiente de esta práctica:

![img](https://i.imgur.com/zDsaqyJ.jpg)

Y al rato estaría enganchado el repositorio a la web de Coveralls.


## DESARROLLO DEL INFORME CON GITHUB PAGES

Siguiendo los pasos del informe 1 para crear la GitHub Pages así se prosiguió. Además se dejó el mismo tema para que a nivel visual lleven el mismo formato.

## DIFICULTADES

En esta práctica las dificultades que se presentaron fue en el planteamiento de cómo realizar el ejercicio 2 "Conecta 4" en específico la decisión del ganador, ya que a nivel de clases se tiene que asociar colores con jugadores y estos definirse como ganador a las 4 primeras fichas consecutivas del mismo color. Además hubo error con Coveralls ya que por mucho que refresque no aparece el cubrimiento que se le realizó al código mostrándose:

![img](https://i.imgur.com/NSER302.jpg)


## CONCLUSIONES

Resultó ser una práctica donde se pone en práctica los conocimientos sobre las clases y herencias. Además se quisó empezar a plantear desde el punto de implementar los principios SOLID y el uso de la herramienta Coveralls. Realizando pruebas mediante metodología TDD con las herramientas de Mocha y Chai y la generación de documentación con Typedoc.


## REFERENCIAS

- [Introducción a Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
- [GitHub Pages](https://lab.github.com/githubtraining/github-pages)
- [Essential TypeScript 4: From Beginner to Pro](https://www.oreilly.com/library/view/essential-typescript-4/9781484270110/html/Part_1.xhtml)
- [Coveralls](https://coveralls.io/)# Informe Práctica Práctica 5: Objetos, clases e interfaces


