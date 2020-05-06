
//Sidenav open and close btns
  function openNav() {
    $('#mySidenav').show()
    $('#sidenav-btn').hide()
  }
  function closeNav() {
    $('#mySidenav').hide()
    $('#sidenav-btn').show()
  }

// Animations 
  AOS.init({
    duration: 2000
  });