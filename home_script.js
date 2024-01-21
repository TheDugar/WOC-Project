document.addEventListener("scroll", () => {
  console.log('scrolling', window.scrollY);
  const header = document.querySelector(".navbar");
  if (window.scrollY >= 20) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
})


let mybutton = document.getElementById("myBtn");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



const openModalButtons = document.querySelectorAll('[data-modal-target')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(a => {
  a.addEventListener('click', () => {
    const modal = document.querySelector(a.dataset.modalTarget)
    openModal(modal)
  })
})

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})


overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})


closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.promodal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})


closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.promodal')
    closeModal(modal)
  })
})


function openModal(modal){
  if(modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

function closeModal(modal){
  if(modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}


