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

5. Desarrollo del informe con GitHub Pages
6. Dificultades
7. Conclusiones
8. Referencias

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

![img](https://i.imgur.com/tTRd3lC.jpg)


## DESARROLLO DE LOS EJERCICIOS (1, 2 y 3)

El proyecto consta de 3 ejercicios a desarrollar en TypeScript. En este apartado se explicarán cada uno de estos y el planteamiento que se utilizó.


### EJERCICIO 1

En este ejercicio se quiere implementar una modificación de la práctica 5, donde se crea una estructura de clases que simulen a los pokemon, su pokedex y el combate entre dos pokemon. En esta se pide que mediante una estructura de clases genéricas se pueda competir entre distintos mundos.

Siguiendo la metodología TDD, primero se desarrolló el test en el directorio específico para este ejercicio __./test/ejercicio-1__ denotado el fichero como __ejercicio-1.spec.ts__.

Se quiso comenzar el ejercicio desarrollando los principios SOLID, donde cada clase será un fichero distinto __.ts__. Por ello cada clase está contenida en un ficher .ts particular. Siendo la estructura:

![img](https://i.imgur.com/zfbMPL4.jpg)

En el fichero __ejercicio-1.spec.ts__ se alojan todas las pruebas, donde cada _describe_ corresponde a una clase y se importaron por tanto en las pruebas. Realizando las pruebas mediante TDD, primero se desarrolló el test para un método, luego su código, se comprobó su funcionamiento, se realiza la cobertura con Coveralls como indico y finalmente se realiza la documentación.

La idea es crear 4 clases independientes: la clase abstracta __Fighter__, dos super clases que se ayudarán de la clase Fighter para definir el combate entre dos luchadores de distinto o mismo mundo (__Combat__) y donde se almacene el luchador/es (__Pokedex__). A su vez una super clase que se ayuda de Pokedex que será __PokedexPrinter__ que se definió siguiendo el principio SOLID de _Single responsibility principle_, ya que ahí muestra un ejemplo donde si se quiere imprimir la Pokedex pues sea una clase distinta. Finalmente por cada mundo, se tiene 4 mundos (Pokemon, Marvel, Kimetsu No Yaiba y One Piece) y para ellos se definió una clase y fichero .ts que tiene las especificaciones de cada mundo. Estas son sub clases de __Fighter__.

Quedando todos los test para cada clase tal que:

![img](https://i.imgur.com/YjMddT6.jpg)

![img](https://i.imgur.com/SO61Uew.jpg)

![img](https://i.imgur.com/loXhKmh.jpg)

![img](https://i.imgur.com/g6mPkth.jpg)

![img](https://i.imgur.com/UBwQnxz.jpg)

![img](https://i.imgur.com/I7obon7.jpg)

Como cada clase tiene sus métodos particulares del mundo se hace una prueba por cada una y además por los dos atributos que coge las subclases (cada mundo) que es el nombre del luchador y las estadísticas. Estos atributos serán los que heredan cada subclase. Luego cada subclase tiene su propios atributos y métodos.


#### Fichero Fighter

Este fichero tiene la __clase abstracta Fighter__, esta clase tiene un constructor que genera los luchadores con sus especificaciones (atributos protegidos para que en caso de herencia las clases hijas los usen). Los atributos son el nombre y las estadísticas. Quedando el código tal que:

![img](https://i.imgur.com/EuEXWvg.jpg)

Como es una clase abstracta no se necesitan pruebas. Y tampoco hay mucho que compilar.

Finalizando así esta clase.


#### Ficheros Pokemon, Marvel, Kimetsu No Yaiba y One Piece

Estos ficheros corresponden a las subclases que heredan el nombre y estadísticas de la superclase __Fighter__ y tiene cada una las especificaciones de cada mundo. Ya que cada mundo tiene unas especificaciones determinadas. La clase __Pokemon__ no cambió ya que se aprovechó la que ya se desarrolló.

Quedando la clase y fichero __Pokemon__:

![img](https://i.imgur.com/WJxkZeA.jpg)

La clase y fichero Marvel tiene a los superhéroes del mundo Marvel y tiene como atributos específicos el superpoder y la debilidad del superhéroe, esto a parte del nombre y estadísticas como se indicaron.

Quedando la clase y fichero __Marvel__:

![img](https://i.imgur.com/vSCZzsy.jpg)

La clase y fichero Kimetsu No Yaiba tiene a los cazademonios del anime Kimetsu No Yaiba y tiene como atributo específico la respiración que es como la habilidad del cazador, pudiendo ser relacionado con elementos, esto a parte del nombre y estadísticas como se indicaron.

Quedando la clase y fichero __KimetsuNoYaiba__:

![img](https://i.imgur.com/WdAndru.jpg)

Finalmente, la clase y fichero One Piece tiene a los piratas del anime One Piece y tiene como atributos específicos la fruta que le otorga habilidades a los piratas de la tripulación y la habilidad que tiene el pirata gracias a esta fruta o por mérito propio, esto a parte del nombre y estadísticas como se indicaron.

Quedando la clase y fichero __OnePiece__:

![img](https://i.imgur.com/Jy8rIQQ.jpg)


#### Fichero combat.ts

Este fichero tiene la __clase Combat__, esta clase tiene un constructor que recibe los dos luchadores que son tipo __Fighter__ que van a luchar y por tanto puede pertenecer a cualquiera de los 4 mundos específicos:

Por un lado la clase tiene un método público que se llama __getPhrase()__ que otorga frases genéricas (acorde con el mundo) a los luchadores, esto comprobando la instancia a qué clase pertenece esta, quedando de tal manera:

![img](https://i.imgur.com/lDo0zmV.jpg)

Y por otro lado está el método público __start()__ el cual da comienzo al combate. Como los contrincantes pueden ser del mismo o distinto mundo las dos condiciones que se deben de dar esenciales y por cuales se entorna el código es que golpea primero el más rápido de los dos y esto es hasta que alguna de las vidas __getHP()__ llegue a 0. Por tanto si la vida es superior a 0, se mira dos casos concretos. El primero es que ambos sean del mundo __Pokemon__ ya que en el mundo pokemon se tiene en cuenta el tipo de pokemon. Y por ello la fórmula incluirá la respectiva comparativa de efectividad de cada tipo sobre el otro. El daño se redondea y se le resta a la vida. Y después del ataque cada pokemon tiene algo que decir y se invoca al método __getPhrase()__ para que digan su frase.

Quedando esta parte del código tal que:

![img](https://i.imgur.com/tNkMDZn.jpg)

![img](https://i.imgur.com/Feeth8x.jpg)

El otro caso será si son de distinto o mismo mundo, todos los casos posibles menos que sean dos luchadores del mundo Pokemon. Entonces el criterio que se tomó fue la misma fórmula sin tomar la efectividad de tipo, ya que no importa, ahora importa el ataque y la defensa. Y se ejecuta los otros pasos ya nombrados anteriormente, de redondear el daño y restarlo a la vida y que los luchadores digan sus frases correspondientes.

Quedando esta parte del código tal que:

![img](https://i.imgur.com/RJtdIcz.jpg)

![img](https://i.imgur.com/4tz9sg1.jpg)

Se ejecuta para la documentación con ```npm run doc```. Y para ejecutar el código con ```npm start``` para mostrar el combate 1 (mismo mundo Pokemon) y el combate 2 (distinto mundo Pokemon vs Marvel).

![img](https://i.imgur.com/28rWlEE.jpg)


Una vez finaliza todo el código se ejecuta el cubrimiento con ```npm run coverage```:

![img](https://i.imgur.com/tJQH8im.jpg)

![img](https://i.imgur.com/w2FQMCh.jpg)


#### Fichero Pokedex

Este fichero se cambió ya que ahora Pokedex almacena luchadores y por eso recibe de la clase abstracta __Fighter__. Y por ello se modificó:

![img](https://i.imgur.com/h9SUU3S.jpg)


#### Fichero PokedexPrinter

Este fichero es un añadido ya que a nivel estético si se quiere mostrar el nombre y estadísticas del luchador se recurre a los datos guardados en la Pokedex, pero para respestar el principio SOLID _Single responsibility principle_, se creó esta nueva clase para imprimir los datos de la Pokedex mediante el método __print()__. Quedando tal que:

![img](https://i.imgur.com/ZVYHk3t.jpg)


Finalizando así todo el código del ejercicio 1, la documentación, los test y el cubrimiento con Coveralls.



### EJERCICIO 2

En este ejercicio se quiere desarrollar una plataforma de vídeo en streaming (DSIFlix). Para su desarrollo se empleó como en el ejercicio anterior la metodología TDD y además se usó Coveralls para el cubrimiento del código y se tuvieron en cuenta los Principios __SOLID__ para que cada fichero contuviera una clase y así respectivamente.

Siguiendo la metodología TDD, primero se desarrolló el test en el directorio específico para este ejercicio __./test/ejercicio-2__ denotado el fichero como __ejercicio-2.spec.ts__.

Se quiso comenzar el ejercicio desarrollando los principios SOLID, donde cada clase será un fichero distinto __.ts__. Por ello cada clase está contenida en un ficher .ts particular. Siendo la estructura:

![img](https://i.imgur.com/2o47OJo.jpg)

En el fichero __ejercicio-2.spec.ts__ se alojan todas las pruebas, donde cada _describe_ corresponde a una clase y se importaron por tanto en las pruebas. Realizando las pruebas mediante TDD, primero se desarrolló el test para un método, luego su código, se comprobó su funcionamiento, se realiza la cobertura con Coveralls como indico y finalmente se realiza la documentación.

La idea es del desarrollo es tener una interfaz genérica __Streamable__ con los métodos que luego se usarán para buscar vídeos en las colecciones distintas. Una clase abstracta genérica __BasicStreamableCollection__ que implementa algunos métodos sin embargo, los dedicados a la búsqueda son abstracto ya que lo lógico es que sean métodos que implementen las colecciones, ya que son búsquedas dentro de ellas. A continuación vendrán 3 superclases, __Series__, __Peliculas__ y __Documentales__ que tendrán las características respectivas a las series, películas y documentales de la plataforma. Finalmente una colección por cada super clase (__ColeccionSeries__, 
__ColeccionPeliculas__  y __ColeccionDocumentales__), estas son subclases de la superclase abstracta __BasicStreamableCollection T__ donde el tipo genérico corresponde con la colección a la que haga referencia. Estas clases son las encargadas de implementar los métodos de búsqueda (de series, pelicula y documentales) según algunos requisitos. Los métodos son __getVideoByName()__, __getVideoByYear()__ y __getVideoByAuthor()__.

Quedando el test tal que:

![img](https://i.imgur.com/nsdqA2Y.jpg)
    
![img](https://i.imgur.com/SPWH0kz.jpg)

![img](https://i.imgur.com/iSujTtl.jpg)


#### Fichero Streamable

En este fichero define la interfaz genérica __Streamable__ que define los métodos que realizarán la búsqueda de los distintos videos por el criterio del nombre, del año de publicación y del autor, entre otros métodos. Quedando el código tal que:
    
![img](https://i.imgur.com/XWgoKaI.jpg)
    
    
#### Fichero BasicStreamableCollection

En este fichero define la clase abstracta genérica __BasicStreamableCollection__ que implementa algunos métodos, sin embargo los métodos de búsqueda serán abstracto, esto se nombraron se implementan en clase más acorde con dicha función que serán las colecciones de series, películas y documentales. Quedando el código tal que:
    
![img](https://i.imgur.com/rvOoi56.jpg)


#### Fichero Series, Películas y Documentales

Estos ficheros están destinado a definir características propias de cada tipo de vídeo de la plataforma. El nombre, autor o director, los actores(en caso de las peliculas que es un array de string), un array de género y el año.  

Por ello las series tiene el siguiente código:

![img](https://i.imgur.com/71nxF0y.jpg)


La clase películas tiene el siguiente código:

![img](https://i.imgur.com/bAveDiJ.jpg)

![img](https://i.imgur.com/YYo8LTd.jpg)


Y la clase documentales tiene el siguiente código:

![img](https://i.imgur.com/Riss0Wc.jpg)



#### Fichero ColeccionSeries, ColeccionPelículas y ColeccionDocumentales

Estos ficheros están destinado a implementar los métodos de búsqueda de vídeos según su nombre, año y autor (__getVideoByName()__, __getVideoByYear()__ y __getVideoByAuthor()__).  

La lógica de la implementación es recibir un nombre, un año o un autor y comparar si verdaderamente está en el array de series, películas y documentales que compartan nombre, año o autor.

Como en todas las colecciones es la misma lógica, se muestra el de __ColeccionSeries__:

![img](https://i.imgur.com/8K1Vzg8.jpg)

![img](https://i.imgur.com/Ax8Jlxd.jpg)


Una vez finaliza todo el código se ejecuta el cubrimiento con ```npm run coverage```:

![img](https://i.imgur.com/KmQiqhI.jpg)

![img](https://i.imgur.com/F6lmV2S.jpg)


### EJERCICIO 3

En este ejercicio se quiere desarrollar el Cifrado César, pasando un mensaje, una clave y un alfabeto. Para su desarrollo se empleó como en el ejercicio anterior la metodología TDD y además se usó Coveralls para el cubrimiento del código y se tuvieron en cuenta los Principios __SOLID__ para que cada fichero contuviera una clase y así respectivamente.

Siguiendo la metodología TDD, primero se desarrolló el test en el directorio específico para este ejercicio __./test/ejercicio-3__ denotado el fichero como __ejercicio-3.spec.ts__.

Se quiso comenzar el ejercicio desarrollando los principios SOLID, donde cada clase será un fichero distinto __.ts__. Por ello cada clase está contenida en un ficher .ts particular. Siendo la estructura:

![img](https://i.imgur.com/YLs1vvf.jpg)

En el fichero __ejercicio-3.spec.ts__ se alojan todas las pruebas, donde cada _describe_ corresponde a una clase y se importaron por tanto en las pruebas. Realizando las pruebas mediante TDD, primero se desarrolló el test para un método, luego su código, se comprobó su funcionamiento, se realiza la cobertura con Coveralls como indico y finalmente se realiza la documentación.

La idea es del desarrollo es tener 3 clases independientes, dos de ellas tienen las especificaciones de los mensajes (class __Mensaje__) y las de la clave (class __Clave__). Y luego una clase que tenga el Cifrado César, para el cifrado que necesita la clave se basa también en el Cifrado Vigenere. La clase __CifradoCesar__ recibe el mensaje y la clave, tiene un atributo privado alfabeto, los getter determinados, el método público __generarClave()__ que repetirá la clave tantas veces como el tamaño del mensaje. Finalmente la clase tendrá la encriptacion (__encriptar()__) del mensaje y la desencriptación (__desencriptar()__).

Quedando el test tal que:

![img](https://i.imgur.com/6idDE4d.jpg)
    
![img](https://i.imgur.com/JWlkEDX.jpg)


#### Fichero Mensaje

En este fichero define la clase __Mensaje__ que define los métodos que devuelven el mensaje, el tamaño del mensaje y se busca un caracter pasándole el índice, este último implementa el método _charAt()_ de los tipo String. Quedando el código tal que:
    
![img](https://i.imgur.com/BEh13qs.jpg)


#### Fichero Clave

En este fichero define la clase __Clave__ que define los métodos que devuelven la clave, el tamaño de la clave y se busca un caracter pasándole el índice, este último implementa el método _charAt()_ de los tipo String. Quedando el código tal que:
    
![img](https://i.imgur.com/P4MiiUl.jpg)



#### Fichero CifradoCesar

En este fichero define la clase __CifradoCesar__ que define los métodos que devuelven el mensaje, la clave y el alfabeto, además implementa la función __generarClave()__ que repite la clave tantas veces como el tamaño del mensaje. Finalmente la clase tendrá la encriptacion (__encriptar()__) del mensaje y la desencriptación (__desencriptar()__). Quedando el código tal que:
    
![img](https://i.imgur.com/V4HESP9.jpg)

![img](https://i.imgur.com/CT30FTr.jpg)

Para encriptar() se tuvo que hacer varias conversiones de tipos para trabajar con la clave y cada caracter, y se sigue la lógica de que para encriptar al mensaje se le suma la clave módulo 26 que es el alfabeto y se suma la A para convertirlo en el alfabeto ASCII que sea en mayúsculas de lo contrario no se reconocería. Quedando el código tal que:

![img](https://i.imgur.com/UCRnSIv.jpg)


Para desencriptar es la operación inversa, se le tiene que por ello a la lógica anterior. Se resta y para evitar números negativos se suma por la cantidad de letras del abecedario. Quedando el código tal que:

![img](https://i.imgur.com/nDZqzpN.jpg)


Una vez finaliza todo el código se ejecuta el cubrimiento con ```npm run coverage```:

![img](https://i.imgur.com/8Q8YXeS.jpg)


> SIN EMBARGO NO ENCRIPTA Y DESENCRIPTA BIEN, MUESTRA EN BLANCO

Quedando el cubrimiento total tal que:

![img](https://i.imgur.com/cMMmtmQ.jpg)



## DESARROLLO DEL INFORME CON GITHUB PAGES

Siguiendo los pasos del informe 1 para crear la GitHub Pages así se prosiguió. Además se dejó el mismo tema para que a nivel visual lleven el mismo formato.



## DIFICULTADES

En esta práctica las dificultades que se presentaron fue en la ejecución del cifradocesar.ts ya que no muestra ni el encriptado y desencriptado del mensaje, mostrando:

![img](https://i.imgur.com/zOuGHM3.jpg)


## CONCLUSIONES

Resultó ser una práctica donde se pone en práctica los conocimientos sobre las clases y herencias genéricas. Poniendo en práctica los ya principios SOLID y el uso de la herramienta Coveralls. Realizando pruebas mediante metodología TDD con las herramientas de Mocha y Chai y la generación de documentación con Typedoc.


## REFERENCIAS

- [Introducción a Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)
- [GitHub Pages](https://lab.github.com/githubtraining/github-pages)
- [Essential TypeScript 4: From Beginner to Pro](https://www.oreilly.com/library/view/essential-typescript-4/9781484270110/html/Part_1.xhtml)
- [Coveralls](https://coveralls.io/)# Informe Práctica Práctica 5: Objetos, clases e interfaces


