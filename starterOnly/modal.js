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
// Je crée une variable x qui contient l'ID myTopnav
// Je fais une condition si dans myTopnav(x) la class est topnav alors au clic tu me rajoutes la class responsive qui va m'ouvrir ma liste 
// Sinon la class redeviens topnav ce qui referme le menu
burger.addEventListener("click", () => {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
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
// ****** Restriction ******
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
  // Sinon je retourne la valeur false 
  if (firstValue.length >= 2 && testFirstName) {
    return true
  } else {
    return false
  }
};


// ****** Lastname control ******
validLastname = () => {
  const lastValue = input.last.value;
  const testLastName = nameRegExp.test(lastValue);

  if (lastValue.length >= 2 && testLastName) {
    return true
  } else {
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

  if (testEmail) {
    return true
  } else {
    return false
  }
};

// ****** Birthdate control ******

validBirthdate = () => {
  let birthdateValue = input.birthdate.value;
  if (birthdateValue === '') {
    return false
  } else {
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
  // Condition si testQuantity est false est quantityValue n'a aucune valeur alors il renvoi false
  // Sinon il renvoi true
  if (!testQuantity || quantityValue == '') {
    return false
  } else {
    return true
  }
};

// ****** Location control ****** 
validLocation = () => {
  // Constante qui contient l'élément location qui me renvoie un tableau
  const inpLocation = document.getElementsByName("location");
  formData[6].setAttribute("data-error-visible", false);
  // Variable avec une valeur undefined
  let choice;
  // Boucle sur les inpLocation nommer location
  // Condition si location n'est pas checkedil retourne false 
  // Sinon il retourne true avec la valeur de location qui est stocké dans la variable choice
  for (let location of inpLocation) {
    if (!location.checked) {
      return false
    } else {
      choice = location.value;
      console.log(choice);
      return choice, true
    }
  };
};

// ****** Accept condition control ******
validCondition = () => {
  // Constante qui contient l'input checkbox1
  const checkbox = input.checkbox1;
  // Condition si checked est false alors il renvoi false 
  // Sinon il renvoi true
  if (!checkbox.checked) {
    return false
  }
  else {
    return true
  }
};

// ****** Submission of the form ******
// Au clic sur le input de type submit les conditions seront vérifié
// Si toutes les fonctions envois la réponse true alors le formulaire seras envoyé 
// Sinon les messages d'erreur seront affichés
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validFirstname() &&
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
