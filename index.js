const buttons = document.querySelectorAll(".television__button");

for (const button of buttons) {
	button.addEventListener("click", () => {
		alert("Clic !");
	});
}

// On récupère le bouton “on”
const buttonOn = document.querySelector(".television__button--on");
// On ajoute un écouteur d’événements à ce bouton
buttonOn.addEventListener("click", () => {
	// On utilise la méthode querySelector pour sélectionner l'image
	const img = document.querySelector(".television__content");
	// On modifie son attribut src
	img.src = "https://picsum.photos/id/237/270/190?grayscale";
});

// On récupère le bouton “off”
const buttonOff = document.querySelector(".television__button--off");
// On ajoute un écouteur d’événements à ce bouton
buttonOff.addEventListener("click", () => {
	// On utilise la méthode querySelector pour sélectionner l'image
	const img = document.querySelector(".television__content");
	// On modifie son attribut src
	img.src =
		"data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==";
});

// On ajoute un nouvel élément dans la liste
// On crée l’élément <li> avec la classe "television__channel"
const channelGrayscale = document.createElement("li");
channelGrayscale.classList.add("television__channel");

// Cet élément est créé “dans le vide”.
// Pour qu’il puisse faire partie du DOM et apparaisse dans le navigateur
// On l’ajoute à un élément existant
const channels = document.querySelector(".television__channels");
channels.appendChild(channelGrayscale);

// On ajoute un bouton
const buttonGrayscale = document.createElement("button");
buttonGrayscale.type = "button";
buttonGrayscale.textContent = "T";

channelGrayscale.appendChild(buttonGrayscale);

// On ajoute un écouteur d’événements à ce nouveau bouton
buttonGrayscale.addEventListener("click", () => {
	// Pour basculer entre les images en couleur et en niveaux de gris
	// On teste l’état actuel de l’image (en couleur ou en niveaux de gris)
	// et change la source de l’image en conséquence.
	// C’est à dire ajouter ou enlever la partie ?grayscale dans l’URL
	// (mais uniquement quand la source n’est pas "data:image/gif;base64,...")
	const img = document.querySelector(".television__content");

	const isData = img.src.startsWith("data");

	if (!isData) {
		const isGrayscale = img.src.endsWith("?grayscale");

		if (isGrayscale) {
			// so sad this doesn't work :/
			// img.src -= "?grayscale";
			img.src = img.src.slice(0, -"?grayscale".length);
		} else {
			img.src += "?grayscale";
		}
	}
});
