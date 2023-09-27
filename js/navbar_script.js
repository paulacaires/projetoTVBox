let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Função para verificar a posição atual do scroll
function onScroll() {
	sections.forEach(sec => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 300;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');
		
		if (top >= offset && top < offset + height) {
			navLinks.forEach(link => {
				link.classList.remove('active');
			});

			// Adiciona a classe 'active' ao link correspondente
			document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
		}
	});
}

// Adiciona o evento de rolagem ao documento
window.addEventListener('scroll', onScroll);
