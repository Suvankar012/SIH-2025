const langDropDown = document.querySelector(".lang");
const langHidden = document.querySelector(".dropdown");
const faqShow = document.querySelector(".show");
const faqHidden = document.querySelector(".hid");

langDropDown.addEventListener("click", () => {
  if(langHidden.style.display === 'none')
  {
    langHidden.style.display = 'block';
  } else {
    langHidden.style.display = 'none';
  }
})

function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element')
}

document.querySelector(".signIn").addEventListener("click", () => {
  window.open('signIn.html');
})

document.querySelector(".basics").addEventListener("click", () => {
  window.open('basics.html');
})

document.querySelector(".status").addEventListener("click", () => {
  window.open('status.html');
})

document.querySelector(".seeding").addEventListener("click", () => {
  window.open('seeding.html');
})

document.querySelector(".quiz").addEventListener("click", () => {
  window.open('quiz.html');
})

faqShow.addEventListener("click", () => {
  if(faqHidden.style.display === 'none')
  {
    faqHidden.style.display = 'block';
  } else {
    faqHidden.style.display = 'none';
  }
})
/*

*/