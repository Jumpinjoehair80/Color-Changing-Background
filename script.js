const container = document.getElementById('container')
const btn = document.getElementById('btn')


const colors = {
    fire: '#fddfdf',
    grass: '#DEFDE0',
    water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}




btn.addEventListener('click', () => {
    const values = Object.values(colors)
const prop = values[Math.floor(Math.random() * values.length)]
console.log(prop)

    container.style.backgroundColor = prop
})




