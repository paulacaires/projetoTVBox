let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Função para verificar a posição atual do scroll
function onScroll() {
	sections.forEach(sec => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 500;
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

/* Função para abrir o mobile menu  */
function menuShow() {
	let menuMobile = document.querySelector('.mobile_menu');
		
	/* Se já estiver aberto quando clicar no ícone do menu */
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/close.svg";
    }
}
