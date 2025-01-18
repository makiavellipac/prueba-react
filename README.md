# React + TypeScript + Vite

Este proyecto fue creado con el comando 

[npm create vite prueba-react -- --template react-ts]()

## Pasos para la instalación

```js
 git clone https://github.com/makiavellipac/prueba-react.git
 npm install
 npm run dev
```

## EXAMEN DE FRONT – GRUPO SALINAS

- ¿En tus propias palabras explica qué es JavaScript y para qué se utiliza principalmente?
```js
 Es un lenguaje de programación orientado a objetos, y su función principal es para uso en desarrollo web
```
- ¿Cuál es la diferencia entre var, let y const en JavaScript?
```js
var se ocupaba anteriormente para declarar una variable que puede mutar pero hoy en día es muy raro que se ocupe por eso cambio por la palabra reservada let, y const es para declarar un variable que no puede mutar
```
- Explica el concepto de &quot;hoisting&quot; en JavaScript.
```js
Entiendo que puedes declarar cualquier función, variable en cualquier parte del codigo y no nesesariamente al inicio como en otros lengaujes
```
- Explica la diferencia entre &quot;null&quot; y &quot;undefined&quot;.
```js
Undefined el objeto no esta definido y null puede estar definido pero no tiene ningun valor asignado
```
- ¿Qué es un &quot;callback&quot; y cómo se utiliza en JavaScript?
```js
Cuando una función es pasada como parametro de otra función
```
- Explica el concepto de &quot;promises&quot; y su uso en JavaScript.
```js
Resultado de una función asyncrona y puede tener tres estados pendiente, error y finalizacion
```
- ¿Qué es &quot;async/await&quot; y cómo mejora el manejo de promesas?
```js
Se emplea para el manejo de promesas y crear un codigo mas legible, se tienen que pasar callback en caso de exito o de error como parametros
```
- ¿Qué es el &quot;scope&quot; en JavaScript y cuántos tipos de &quot;scope&quot; existen?
```js
El alcance que una variable tendrá en tu código y puede ser local y global
```
- Explica la diferencia entre &quot;== &quot; y &quot;===&quot; en JavaScript.
```js
== compara unicamente por el valor y === compara valor y tipo
```
- ¿Qué es un &quot;template literal&quot; y cuándo se utiliza?
```js
Es una cadena de caracteres que se delimita con comillas invertidas (`), lo que permite incluir expresiones y variables dentro de ella como ejemplo `Hola mundo ${age}`
```
- Define y da un ejemplo de desestructuración de objetos.
```js
Permite acceder a propiedades de objetos en java scrypt por ejemplo:
const user = {
    age:32,
    nomber:santiago,
}
const [age]= user // obtieneel parametro age del objeto user

const nUser = {
    ...user,
    age:35
} // Copia el contenido de user y muta la edad
```
- Explica la diferencia entre &quot;map&quot;, &quot;filter&quot; y &quot;reduce&quot;.
```js
Map: manipula los datos de un array
Filter: regresa los datos filtrados dentro de un array
Reduce: combina los elementos y solo te regresa un solo valor
```
- ¿Qué es un &quot;proxy&quot; en JavaScript y para qué se utiliza?
```js
Permite crear un intermediario para otro objeto, el cual puede interceptar y redefinir operaciones fundamentales para dicho objeto.
```
- ¿Qué es TypeScript y cuáles son sus principales ventajas sobre JavaScript?
```js
Lenguaje de tipado basado en javascrypt su principal funcion es manejo de errores
```
- ¿Qué es JSON y cómo se parsea en JavaScript?
```js
Lenguaje de tipado basado en javascrypt su principal funcion es manejo de errores
```