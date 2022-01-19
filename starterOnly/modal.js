// *********************************************** DOM Elements ********************************************
// ****** Burger menu ******
const burger = document.querySelector(".icon");

// ****** Modal ******
const modalbg = document.querySelector(".bground");
const openModal = document.querySelectorAll(".modal-btn");
const closeModal = document.querySelector(".close");

// ****** Form ******
const formData = document.querySelectorAll(".formData");
const input = document.getElementsByTagName("input");
const form = document.querySelector("form");

// *********************************************** Burger menu navigation ********************************************
// Je récupère mon icône pour créer un évènement au clic 

burger.addEventListener("click", () => {
  // Je crée une variable x qui contient l'ID myTopnav
  let x = document.getElementById("myTopnav");
  let ul = document.querySelector("ul");
  // Condition si dans myTopnav(x) la class est topnav alors au clic tu me rajoutes la class responsive qui va m'ouvrir ma liste
  if (x.className === "topnav") {
    x.className += "responsive";
    ul.style.width = "100%";
    // ul.style.transition = "3s"
    // Sinon la class redeviens topnav ce qui referme le menu
  } else {
    x.className = "topnav";
    // ul.style.width = "0"

  }
});

// *********************************************** Modal management ********************************************

//****** Open modal ******

// Je fais une boucle sur ma variable openModal pour avoir accès au deux boutons que je nomme btn 
// Je crée un évenement au clic sur les deux boutons
// Au clic la fonction se déclencheras et la modal passera en display block ce qui afficheras la modal
openModal.forEach((btn) => btn.addEventListener("click", () => {
  modalbg.style.display = "block";
}));

//****** Close modal ******

// Je récupère la variable qui contient le bouton close 
// Je créé un évenement au clic du bouton
// Au clic la fonction se déclencheras et la modal passera en display none ce qui fermeras la modal
closeModal.addEventListener("click", () => {
  modalbg.style.display = "none";
  // Efface le formulaire lors de la fermeture 
  form.reset();
  // Boucle sur formData pour remettre les messages d'erreurs sur false
  formData.forEach((formdata) => {
    formdata.setAttribute("data-error-visible", false);
    formdata.setAttribute("data-success-visible", false);
  });
});

// ****** Open succes modal ******
// Fonction pour remplacer le contenu de la modal inscription
successModal = () => {
  // Récupération des valeur envoyé dans le localstorage
  const firstName = localStorage.getItem('Prénom');
  const LastName = localStorage.getItem('Nom');
  const email = localStorage.getItem('Email');
  const City = localStorage.getItem('Ville');
  // Récupération dans le dom de la classe content pour la mettre en display none
  const content = document.querySelector(".content");
  content.style.display = "none";
  // J'injecte du HTML pour créer ma modal success 
  modalbg.innerHTML +=
    `
    <div class="content">
     <span class="close" onclick=CloseSuccess()></span>
      <div class="modal-body modal-success">
        <p>
           Merci <span>${firstName} ${LastName}</span> pour
           <br>votre inscription. <br>
           Le tournoi se déroulera donc à <span>${City}</span>.   
           <br>Un mail de confirmation vous a été envoyez à l'adresse <span>${email}</span>
       </p>
       <button class="btn-signup modal-btn" onclick=CloseSuccess()>
            Fermer
        </button>
      </div>
    </div>
    `
};

// ****** Close succes modal ******
// Fonction qui va fermer la modal success et qui va recharger la page pour que la modal redevienne la modal inscription
CloseSuccess = () => {
  modalbg.style.display = "none";
  window.location.reload();
}

// *********************************************** Form management ********************************************
const nameRegExp = new RegExp(
  '^[A-Z][A-Za-z\é\è\ê\ë-]+$',
);

// ****** Firstname control ******
validFirstname = () => {
  // Contient la valeur de l'input first 
  const firstValue = input.first.value;
  //  Vérifie la correspondance entre firstValue et ma nameRegexp
  const testFirstName = nameRegExp.test(firstValue);
  // Si le tableau de la valeur est supérieur ou égale à 2 et 
  // Que la correspondance entre ma regexp et la valeur est ok 
  // Alors je retourne la valeur entrée
  if (firstValue.length >= 2 && testFirstName) {
    formData[0].setAttribute("data-error-visible", false);
    formData[0].setAttribute("data-success-visible", true);
    return firstValue
    // Sinon si testFirstName est false il renvoi false
  } else if (!testFirstName) {
    // Si firstValue est vide il envoi un message correspondant à l'erreur 
    if (firstValue === '') {
      formData[0].setAttribute("data-success-visible", false);
      formData[0].setAttribute("data-error-visible", true);
      formData[0].setAttribute("data-error", `Veuillez saisir votre prénom pour valider l'inscription`);
    }
    // Sinon si le tableau firstValue est inférieur à 2 il renvoi un message erreur différent
    else if (firstValue.length < 2) {
      formData[0].setAttribute("data-success-visible", false);
      formData[0].setAttribute("data-error-visible", true);
      formData[0].setAttribute("data-error", `Votre prénom doit contenir au minimum deux lettres`);
    }
    // Sinon si la première lettre de firstValue n'est pas une majuscule il envoi un message correspondant à l'erreur 
    else if (firstValue !== '' && firstValue.length >= 2 && firstValue[0] !== firstValue[0].toUpperCase()) {
      formData[0].setAttribute("data-success-visible", false);
      formData[0].setAttribute("data-error-visible", true);
      formData[0].setAttribute("data-error", `Votre prénom doit commencer par une Majuscule`);
    }
    // Sinon le Prénom commence par une majuscule est qu'il y à une valeur il renvoi un message erreur différent
    else if (firstValue !== '' && firstValue.length >= 2 && firstValue[0] === firstValue[0].toUpperCase()) {
      formData[0].setAttribute("data-success-visible", false);
      formData[0].setAttribute("data-error-visible", true);
      formData[0].setAttribute("data-error", `Votre prénom ne doit contenir de chiffre ni de symbole`);
    }
    return false
  }
};

// ****** Lastname control ******

validLastname = () => {
  const lastValue = input.last.value;
  const testLastName = nameRegExp.test(lastValue);
  // Condition si le tableau lastValue est supérieur ou égale a 2 est que testLastName est true alors il renvoi true 
  if (lastValue.length >= 2 && testLastName) {
    formData[1].setAttribute("data-error-visible", false);
    formData[1].setAttribute("data-success-visible", true);
    return lastValue
    // Sinon si testLastName est false il renvoi false
  } else if (!testLastName) {
    // Si lastValue est vide il envoi un message correspondant à l'erreur 
    if (lastValue === '') {
      formData[1].setAttribute("data-success-visible", false);
      formData[1].setAttribute("data-error-visible", true);
      formData[1].setAttribute("data-error", `Veuillez saisir votre nom pour valider l'inscription`);
    }
    // Sinon si le tableau lastValue est inférieur à 2 il renvoi un message erreur différent
    else if (lastValue.length < 2) {
      formData[1].setAttribute("data-success-visible", false);
      formData[1].setAttribute("data-error-visible", true);
      formData[1].setAttribute("data-error", `Votre nom doit contenir au minimum deux lettres`);
    }
    // Sinon si la première lettre de lastValue n'est pas une majuscule il envoi un message correspondant à l'erreur 
    else if (lastValue !== '' && lastValue.length >= 2 && lastValue[0] !== lastValue[0].toUpperCase()) {
      formData[1].setAttribute("data-success-visible", false);
      formData[1].setAttribute("data-error-visible", true);
      formData[1].setAttribute("data-error", `Votre nom doit commencer par une Majuscule`);
    }
    // Sinon le nom commence par une majuscule est qu'il y à une valeur il renvoi un message erreur différent
    else if (lastValue !== '' && lastValue.length >= 2 && lastValue[0] === lastValue[0].toUpperCase()) {
      formData[1].setAttribute("data-success-visible", false);
      formData[1].setAttribute("data-error-visible", true);
      formData[1].setAttribute("data-error", `Votre nom ne doit contenir de chiffre ni de symbole`);
    }
    return false
  }
};

// ****** E-mail control ******

validEmail = () => {
  const emailRegExp = new RegExp(
    '^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$',
    'g'
  );
  const emailValue = input.email.value;
  const testEmail = emailRegExp.test(emailValue);
  // Condition si testEmail est true il renvoi true 
  if (testEmail) {
    formData[2].setAttribute("data-error-visible", false);
    formData[2].setAttribute("data-success-visible", true);
    return emailValue
    // Sinon si testEmail est false il renvoi false
  } else if (!testEmail) {
    // Si emailValue est vide il envoi un message d'erreur correspondant à l'erreur
    if (emailValue === '') {
      formData[2].setAttribute("data-success-visible", false);
      formData[2].setAttribute("data-error-visible", true);
      formData[2].setAttribute("data-error", `Veuillez saisir votre adresse email`);
    }
    // Sinon il renvoi un message d'erreur différent
    else {
      formData[2].setAttribute("data-success-visible", false);
      formData[2].setAttribute("data-error-visible", true);
      formData[2].setAttribute("data-error", `Votre Email n'est pas une adresse valide`);
    }
    return false
  }
};

// ****** Birthdate control ******

// Fonction qui vérifie si la valeur entrée est supérieur à la date du jour 
dateHasPassed = (birthdate) => {
  // Constante qui contient la date entrée
  const date = new Date(birthdate.value);
  // Condition si la date entrée est supérieur à la date du jour alors il retourne false
  // Sinon il retourne True
  if (date.getTime() > Date.now()) {
    return false;
  } else {
    return true;
  }
};

const date = new Date();
// Constante qui récupère la date entrée dans la variable date et qui rajoute +18 à l'année et qui conserve le mois et le jour 
const dateMajority = new Date(date.getFullYear() + 18, date.getMonth(), date.getDate());
// Fonction qui attend un paramètre et qui vérifie la majorité de l'utilisateur
majority = (birthdate) => {
  // Constante qui contient la date entrée
  const date = new Date(birthdate.value);
  // Constante qui récupère la date entrée dans la variable date et qui rajoute +18 à l'année et qui conserve le mois et le jour 
  const dateMajority = new Date(date.getFullYear() + 18, date.getMonth(), date.getDate());
  // Compare si le résultat de dateMajority et inférieur ou égale à la date du jour 
  return dateMajority.valueOf() <= Date.now();
}

validBirthdate = () => {
  const birthdate = input.birthdate;
  // Condition si la valeur est vide alors il renvoi false + un message d'erreur 
  if (birthdate.value === '') {
    formData[3].setAttribute("data-error-visible", true);
    formData[3].setAttribute("data-error", `Veuillez entrez une date pour valider votre inscription`);
    formData[3].setAttribute("data-success-visible", false);
    return false
  }
  // Sinon si la date est supérieur à la date du jour alors il renvoi false et un message d'erreur 
  else if (!dateHasPassed(birthdate)) {
    formData[3].setAttribute("data-error-visible", true);
    formData[3].setAttribute("data-error", `Veuillez entrez une date valide`);
    formData[3].setAttribute("data-success-visible", false);
    return false
  }
  // Sinon si l'utilisateur n'est pas majeur il renvoi false et un message d'erreur 
  else if (!majority(birthdate)) {
    formData[3].setAttribute("data-error-visible", true);
    formData[3].setAttribute("data-error", `Vous devez êtres majeur pour participer au tournois`);
    formData[3].setAttribute("data-success-visible", false);
    return false
  }
  // Sinon il renvoi true 
  else {
    formData[3].setAttribute("data-error-visible", false);
    formData[3].setAttribute("data-success-visible", true);
    console.log(birthdate.value);
    return birthdate.value
  }
};

// ****** Quantity control ******
validQuantity = () => {
  const quantityRegExp = new RegExp(
    '^(0|[1-9][0-9]?|99)$'
  );
  const quantityValue = input.quantity.value;
  const testQuantity = quantityRegExp.test(quantityValue);
  // Condition si testQuantity est false est quantityValue n'a aucune valeur alors il renvoi false + message d'erreur
  // Sinon il renvoi true 
  if (!testQuantity || testQuantity == '') {
    formData[4].setAttribute("data-success-visible", false);
    formData[4].setAttribute("data-error-visible", true);
    formData[4].setAttribute("data-error", `Veuillez entré un nombre entre 0 et 99`);
    return false
  } else {
    formData[4].setAttribute("data-error-visible", false);
    formData[4].setAttribute("data-success-visible", true);
    return quantityValue
  }
};

// ****** Location control ****** 
validLocation = () => {
  const inpLocation = document.getElementsByName("location");
  // Variable avec une valeur undefined
  let choice;
  // Boucle sur les inpLocation nommé location
  for (let location of inpLocation) {
    // Condition si location est checked il retourne la valeur séléctionné
    if (location.checked) {
      formData[5].setAttribute("data-error-visible", false);
      choice = location.value;
      return choice;
      // Sinon il retourne rien
    } else {
      formData[5].setAttribute("data-error-visible", true);
      formData[5].setAttribute("data-error", `Veuillez sélectionner une ville`);
    }
  };
};

// ****** Accept condition control ******
validCondition = () => {
  // Constante qui contient l'input checkbox1
  const checkbox = input.checkbox1;
  // Condition si checked est false alors il renvoi false + un message d'erreur
  // Sinon il renvoi true
  if (!checkbox.checked) {
    formData[6].setAttribute("data-error-visible", true);
    formData[6].setAttribute("data-error", `Veuillez accepter les conditions d'utilisation`);
    return false
  }
  else {
    formData[6].setAttribute("data-error-visible", false);
    return true
  }
};


// ****** Submission of the form ******
// Au clic sur le input de type submit les conditions seront vérifié
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Si toutes les fonctions envoi la réponse return bien leur valeur alors le formulaire seras envoyé 
  // Et les données seront envoyés dans le localstorage
  // Ensuite la modal de confirmation s'ouvriras
  if (
    validFirstname() &&
    validLastname() &&
    validEmail() &&
    validBirthdate() &&
    validQuantity() &&
    validLocation() &&
    validCondition()
  ) {
    localStorage.setItem('Prénom', validFirstname());
    localStorage.setItem('Nom', validLastname());
    localStorage.setItem('Email', validEmail());
    localStorage.setItem('Date de naissance', validBirthdate());
    localStorage.setItem('Nombre de tournois', validQuantity());
    localStorage.setItem('Ville', validLocation());
    localStorage.setItem('Condition accépté', validCondition());
    successModal()
  }
});


