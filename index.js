// const div = document.getElementById('root')
// div.innerHTML = "<h1>Hola Mundo</h1>"
// document.body.appendChild(div)
console.log("testing")
const data  = fetch(`https://mockend.com/Ariels713/promises_demo/post`)
console.log(data)
data.then(res => console.log(res))
