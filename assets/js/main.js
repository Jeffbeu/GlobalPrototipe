const c = (el) => {
    return document.querySelector(el);
}

function typeWriter(elemento){
	const textArray = elemento.innerHTML.split('');
	elemento.innerHTML = ''
	textArray.forEach((letra, index)=>{
		setTimeout(() => elemento.innerHTML += letra, 50 * index)
	});
}
const titulo = c('h1')
typeWriter(titulo)