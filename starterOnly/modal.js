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
  // Condition si dans myTopnav(x) la class est topnav alors au clic tu me rajoutes la class responsive qui va m'ouvrir ma liste
  if (x.className === "topnav") {
    x.className += " responsive";
    // Sinon la class redeviens topnav ce qui referme le menu
  } else {
    x.className = "topnav";
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

// Je récupère mon bouton close 
// Je créé un évenement au clic du bouton
// Au clic la fonction se déclencheras et la modal passera en display none ce qui fermeras la modal
closeModal.addEventListener("click", () => {
  modalbg.style.display = "none";
});


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
  // Alors je retourne la valeur true 
  if (firstValue.length >= 2 && testFirstName) {
    formData[0].setAttribute("data-error-visible", false);
    formData[0].setAttribute("data-success-visible", true);
    return true
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
      formData[0].setAttribute("data-error", `Votre nom ne doit contenir de chiffre ni de symbole`);
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
    return true
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
    return true
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
  // Constante qui contient la date du jour 
  const date = new Date(birthdate.value);
  // Condition si la date entrée est supérieur à la date du jour alors il retourne false
  // Sinon il retourne True
  if (date.getTime() > Date.now()) {
    return false;
  } else {
    return true;
  }
};

// Fonction qui vérifie la majorité de l'utilisateur
majority = (birthdate) => {
  const date = new Date(birthdate.value);
  const dateMajority = new Date(date.getFullYear() + 18, date.getMonth(), date.getDate());
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
    return true
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
    return true
  }
};

// ****** Location control ****** 
validLocation = () => {
  const inpLocation = document.getElementsByName("location");
  // Variable avec une valeur undefined
  let choice;
  // Boucle sur les inpLocation nommer location
  // Condition si location n'est pas checkedil retourne false + message d'erreur
  // Sinon il retourne true avec la valeur de location qui est stocké dans la variable choice
  for (let location of inpLocation) {
    if (!location.checked) {
      formData[5].setAttribute("data-error-visible", true);
      formData[5].setAttribute("data-error", `Veuillez sélectionner une ville`);
      return false
    } else {
      choice = location.value;
      formData[5].setAttribute("data-error-visible", false);
      console.log(choice);
      return choice, true
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

// ****** Validation of fields on value change ******
form.addEventListener("change", () => {
  validFirstname(this),
    validLastname(this),
    validEmail(this),
    validBirthdate(this),
    validQuantity(this),
    validLocation(this),
    validCondition(this)
});

// ****** Submission of the form ******
// Au clic sur le input de type submit les conditions seront vérifié
// Si toutes les fonctions envois la réponse true alors le formulaire seras envoyé 
// Sinon les messages d'erreur seront affichés
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    validFirstname() &&
    validLastname() &&
    validEmail() &&
    validBirthdate() &&
    validQuantity() &&
    validLocation() &&
    validCondition()
  ) {
    console.log(validFirstname(),
      validLastname(),
      validEmail(),
      validBirthdate(),
      validQuantity(),
      validLocation(),
      validCondition()
    );
  }
});


