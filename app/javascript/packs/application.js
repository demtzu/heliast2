import "bootstrap";
import $ from "jquery"
import '../components/category_choice';
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../components/notifications';
import swal from 'sweetalert';


$('.categories-cards').slick({
 // centerMode: true,
 centerPadding: '5px',
 slidesToShow: 4,
 slidesToScroll: 4,
 infinite: true,
 arrows: false
});


$('.choice-categories-cards').slick({
 // centerMode: true,
 centerPadding: '5px',
 slidesToShow: 4,
 slidesToScroll: 4,
 infinite: false,
 arrows: false
});


//formulaire new indecision : bouton next et progression
const buttonProgressOne = document.getElementById("progress-partone");
const buttonProgressTwo = document.getElementById("progress-parttwo");
const buttonProgressThree = document.getElementById("progress-partthree");
const barProgressTwo = document.getElementById("bar-two");
const barProgressThree = document.getElementById("bar-three");

const buttonNextOne = document.getElementById("bouton-partone");
if (buttonNextOne !== null) {
  const divOne = document.querySelector(".part-one");
  const divTwo = document.querySelector(".part-two");
  if (divTwo !== null) {
    buttonNextOne.addEventListener("click", (event) => {
  divOne.classList.toggle("hidden");
  divTwo.classList.toggle("hidden");
  buttonProgressTwo.classList.toggle("turquoise");
  buttonProgressThree.classList.remove("turquoise");
  barProgressTwo.classList.toggle("turquoise");
    });
  };
};
const buttonNextTwo = document.getElementById("bouton-parttwo");
if (buttonNextTwo !== null) {
  const divTwo = document.querySelector(".part-two");
  const divThree = document.querySelector(".part-three");
  if (divThree !== null) {
    buttonNextTwo.addEventListener("click", (event) => {
  divTwo.classList.toggle("hidden");
  divThree.classList.toggle("hidden");
  buttonProgressThree.classList.toggle("turquoise");
  barProgressTwo.classList.add("turquoise");
  barProgressThree.classList.add("turquoise");


    });
  };
};

if (buttonProgressOne !== null) {
  const divOne = document.querySelector(".part-one");
  const divTwo = document.querySelector(".part-two");
  const divThree = document.querySelector(".part-three");
  if (divOne !== null) {
    buttonProgressOne.addEventListener("click", (event) => {
  divOne.classList.remove("hidden");
  divTwo.classList.add("hidden");
  divThree.classList.add("hidden");
  buttonProgressTwo.classList.remove("turquoise");
  buttonProgressThree.classList.remove("turquoise");
  barProgressTwo.classList.remove("turquoise");
  barProgressThree.classList.remove("turquoise");
    });
  };
};
if (buttonProgressTwo !== null) {
  const divOne = document.querySelector(".part-one");
  const divTwo = document.querySelector(".part-two");
  const divThree = document.querySelector(".part-three");
  if (divTwo !== null) {
    buttonProgressTwo.addEventListener("click", (event) => {
  divOne.classList.add("hidden");
  divTwo.classList.toggle("hidden");
  divThree.classList.add("hidden");
  buttonProgressTwo.classList.add("turquoise");
  buttonProgressThree.classList.remove("turquoise");
  barProgressTwo.classList.add("turquoise");
  barProgressThree.classList.remove("turquoise");

    });
  };
};
if (buttonProgressThree !== null) {
  const divOne = document.querySelector(".part-one");
  const divTwo = document.querySelector(".part-two");
  const divThree = document.querySelector(".part-three");
  if (divThree !== null) {
    buttonProgressThree.addEventListener("click", (event) => {
  divOne.classList.add("hidden");
  divTwo.classList.add("hidden");
  divThree.classList.toggle("hidden");
  buttonProgressTwo.classList.add("turquoise");
  buttonProgressThree.classList.add("turquoise");
  barProgressTwo.classList.add("turquoise");
  barProgressThree.classList.add("turquoise");

    });
  };
};

// Pick a category choice dans un new indecision
const allCategories = document.querySelectorAll(".choice-category-card");
allCategories.forEach((categorie) => {
  categorie.addEventListener("click", (event) => {
    const choice = event.currentTarget.dataset.choice;
    document.getElementById('question_category_id').value = `${choice}`;
    categorie.classList.add("blue-selected");
  });
});

// set active class on category filters
// const categories = document.querySelectorAll(".category-card-link");
// if (categories !== null){
//   const tabs = document.querySelectorAll(".tab");
//   categories.forEach((category) => {
//     category.addEventListener("click", (event) => {
//       console.log("salut");
//         tabs.forEach((tab) => {
//           tab.classList.remove("active");
//         });
//       category.classList.add("active");
//       console.log(category);
//     });
//   });
// }
var urlParams = new URLSearchParams(window.location.search);
console.log(urlParams.get('query'));
if (urlParams.get('query') === null) {
  const all = document.querySelector("#all");
  if (all !== null) {
    all.classList.add("active");
  }
}
else {
  document.querySelectorAll(".tab").forEach((tab) => {
    const categoryType = tab.dataset.type;
    if (urlParams.get('query') === String(categoryType)) {
      console.log(categoryType)
      tab.classList.add("active");
    }
  });
}


// Choisir un mode de résolution et afficher ou non le range
const allTypes = document.querySelectorAll(".mode-listener");
if (allTypes !== null) {
  allTypes.forEach((type) => {
    type.addEventListener("click", (event) => {
      const mode = event.currentTarget.dataset.mode;
      document.getElementById('question_type_resolution').value = `${mode}`;
      const attente = document.querySelector(".attente");
      const titreAttente = document.querySelector(".ma-reponse");
      console.log(mode);
      const modeUn = document.querySelector(".mode-un");
      console.log(modeUn);
      const modeDeux = document.querySelector(".mode-deux");
      console.log(modeDeux);
      if (mode === "Mode Démocratie") {
        modeUn.classList.remove("mode-turquoise");
        modeDeux.classList.add("mode-turquoise");
        attente.classList.remove("hidden");
        titreAttente.classList.remove("hidden");

      }
      else {
        attente.classList.add("hidden");
        titreAttente.classList.add("hidden");
        modeDeux.classList.remove("mode-turquoise");
        modeUn.classList.add("mode-turquoise");
      }
    });
  });
};


//button to display badges trophy
const buttonTrophy = document.getElementById("trophy");
if (buttonTrophy !== null) {
  const trophies = document.getElementById("trophies");
  if (trophies !== null) {
    buttonTrophy.addEventListener("click", (event) => {
  trophies.classList.toggle("hidden");
    });
  };
};


//cross to display badges trophy
const buttonCross = document.querySelector(".cross");

if (buttonCross !== null){
  const listtrophies = document.getElementById("trophies");
  if (listtrophies !== null){
    buttonCross.addEventListener("click", (event) => {
    listtrophies.classList.toggle("hidden");
    });
  };
};

// IMAGE OPACITY
  Array.from(document.querySelectorAll('.progress-bar')).forEach(function(bar){
    if (bar.getAttribute('aria-valuenow') == 100) {
      const badge = bar.parentNode.parentNode.parentNode;
      badge.querySelector('img').classList.add('complete');
    };
  });


// click on choose file when clicking on the camera icon
const pictureIcons = document.querySelectorAll(".fa-camera");
  pictureIcons.forEach((icon) => {
  icon.addEventListener("click", (event) => {
    const index = event.currentTarget.dataset.index;
    document.getElementById(`question_options_attributes_${index}_photo`).click();
  });
});

// Afficher les images en preview
const photoCachee = document.querySelectorAll(".picture");
photoCachee.forEach((photo) => {
  photo.addEventListener("change", (event) => {
    const id = event.currentTarget.dataset.indeximg;
    const img = document.getElementById(`img_prev_${id}`);
    const titleOption = document.querySelector(`#height_${id}`);
    img.classList.remove("hidden");
    titleOption.classList.add("title-option-preview");
    let reader = new FileReader();
    reader.onload = function (e) {
        $(`#img_prev_${id}`).attr('src', e.target.result);
      }
      reader.readAsDataURL(photo.files[0]);
  });
});

// Prepopulate-answer when clicking on an option
const options = document.querySelectorAll(".option");
  options.forEach((option) => {
    option.addEventListener("click", (event) => {
      const optionid = event.currentTarget.dataset.optionid;
      document.getElementById("answer_option_id").value = `${optionid}`;
      const checks = document.querySelectorAll(".fa-check");
      checks.forEach((check) => {
        console.log(check)
        check.classList.add("hidden");
      })
    const check = document.querySelector(`.option${optionid} .fa-check`);
    check.classList.remove("hidden");
    const answerBloc = document.querySelector(".answer-creation");
    answerBloc.classList.remove("hidden");
  })
});


// hide option 3 and 4
const optionOne = document.querySelector("#option_fields_0")
const optionTwo = document.querySelector("#option_fields_1")
const optionThree = document.querySelector("#option_fields_2")
const optionFour = document.querySelector("#option_fields_3")

if (optionThree !== null){
  document.addEventListener("DOMContentLoaded", (event) => {
    optionThree.classList.add("hidden");
    optionFour.classList.add("hidden");
  });
 }

 // hide notif if 0
// const numberNotif = document.querySelector(".nbre-notif")

// if (numberNotif !== null){
//   document.addEventListener("change", (event) => {
//     numberNotif.classList.add("hidden");
//   });
//  }

// click on add option when clicking on the plis icon
const addIcon = document.querySelector(".plus-icon");
if (addIcon !== null){
    addIcon.addEventListener("click", (event) => {
      document.querySelector("#add-option").click();
  });
}

// add button to display option
const addOption = document.querySelector("#add-option");
if (addOption !== null){
  document.querySelector("#add-option").addEventListener("click", (event) => {
    event.preventDefault();
     if (document.querySelector("#option_fields_0").classList.contains('hidden') === true) {
       optionOne.classList.remove("hidden");
     }
     else if (document.querySelector("#option_fields_1").classList.contains('hidden') === true){
       optionTwo.classList.remove("hidden");
     }
     else if (document.querySelector("#option_fields_2").classList.contains('hidden') === true){
       optionThree.classList.remove("hidden");
     }
     else if (document.querySelector("#option_fields_3").classList.contains('hidden') === true){
       optionFour.classList.remove("hidden");
       addIcon.classList.add("hidden");
     }
  });
}

// click on destroy option when clicking on the trash icon

const deleteIcons = document.querySelectorAll(".fa-trash");
  deleteIcons.forEach((icon) => {
  icon.addEventListener("click", (event) => {
    const index = event.currentTarget.dataset.trash;
    console.log(document.getElementById(`question_options_attributes_${index}_photo`));
    document.getElementById(`question_options_attributes_${index}__destroy`).click();
  });
});

// hide-option
const deleteButtons = document.querySelectorAll(".remove");
deleteButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const index = event.currentTarget.dataset.index;
    document.getElementById(`option_fields_${index}`).classList.add("hidden");
    addIcon.classList.remove("hidden");
  });
});

const swalButton = document.querySelector('.new-answer');

if (swalButton) { // protect other pages

  swalButton.addEventListener('click', () => {
  const nbPoints = document.querySelector('#nb-points').dataset.points;
    swal({
      title: "Bravo !",
      text: `Tu viens de gagner ${nbPoints} points !`,
      icon: "success"
    })
    .then((value) => {
      window.location.href = '/questions';
    });
  });
}

const flip = document.querySelector('.flip');

if (flip) { // protect other pages

  flip.addEventListener('click', () => {
  const btnRep = document.querySelector('.div-btnrep');
  const btnOpt = document.querySelector('.div-btnopt');
  const optionsShow = document.querySelector('.options-show');
  const answerShow = document.querySelector('.answer-show');
  optionsShow.classList.toggle("hidden");
  answerShow.classList.toggle("hidden");
  btnRep.classList.toggle("add-turquoise");
  btnOpt.classList.toggle("add-turquoise");
  });
}
// element.classList.toggle("red");
