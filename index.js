// const div = document.getElementById('root')
// div.innerHTML = "<h1>Hola Mundo</h1>"
// document.body.appendChild(div)
console.log("testing")
const data  = fetch("https://run.mocky.io/v3/375803f5-55fd-4dd7-80dc-2e68377a14e2")
console.log(data)
data.then(res => res.json())
.then(res => console.log(res))
