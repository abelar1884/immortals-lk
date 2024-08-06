function toggleNavi() {
  document.querySelector('.navi-button').classList.toggle('toggle')
  document.querySelector('.mobile-navigation').classList.toggle('toggle')
}

function toggleSideBar() {
  document.querySelector('.side-menu').classList.toggle('side-menu_toggle')
}

function toggleModal (id) {
  const modal = document.getElementById(id).classList
  if (modal.contains('opened')) {
    modal.add('animate__fadeOut')
    modal.remove('animate__fadeIn')
    setTimeout(() => modal.toggle('opened'), 500)
  } else {
    modal.toggle('opened')
    modal.add('animate__fadeIn')
    modal.remove('animate__fadeOut')
  }
}

function toggleNotify () {
  const dropDown = document.querySelector('.dropdown-notify')
  dropDown.classList.toggle('hidden')
  dropDown.classList.toggle('animate__fadeIn')
}

function closeMessageNotify (e) {
  e.parentElement.classList.add('animate__backOutRight')
}