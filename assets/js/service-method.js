function openMenu() {
  const menu = document.getElementById('container-menu');
  const backdrop = document.querySelector('.MuiBackdrop-root');
  const drawer = document.querySelector('.MuiDrawer-root.MuiDrawer-modal.MuiModal-root');

  if (drawer) {
    // Avval transitionni olib tashlaymiz
    drawer.style.transition = 'none';
    drawer.style.transform = 'translateX(-250px)'; // boshlang'ich joy
    drawer.style.visibility = 'visible';
    drawer.style.zIndex = '9999999';
    drawer.classList.remove('MuiModal-hidden', 'css-12snods');
    drawer.classList.add('css-y28f86');


    // Keyingi frame'da transition qo‘shib, 0px ga o'tkazamiz
    requestAnimationFrame(() => {
      drawer.style.transition = 'transform 0.4s';
      drawer.style.transform = 'translateX(0px)';
    });
  }

        if (backdrop) {
    backdrop.style.transition = 'none';
    backdrop.style.visibility = 'visible';
    backdrop.style.zIndex = '120';
    backdrop.style.opacity = '1';

  }

  if (menu) {
    menu.style.transition = 'none';
    menu.style.visibility = 'visible';
    menu.style.zIndex = '999997';
    menu.style.opacity = '1';
  }
}



function menuClose() {
  const menu = document.getElementById('container-menu');
  const backdrop = document.querySelector('.MuiBackdrop-root');
  const drawerRoot = document.querySelector('.MuiDrawer-root');

  if (drawerRoot) {
    // Animatsiya uchun style
    drawerRoot.style.transition = 'transform 0.5s ease';
    drawerRoot.style.transform = 'translateX(-250px)';

    setTimeout(() => {
      drawerRoot.classList.remove('css-y28f86');
      drawerRoot.classList.add('MuiModal-hidden', 'css-12snods');
      drawerRoot.style.visibility = 'hidden';
      drawerRoot.style.zIndex = '-1';
      drawerRoot.style.transform = ''; // keyin default holatga qaytarish
    }, 300);
  }

  if (backdrop) {
    backdrop.style.transition = 'opacity 0.5s ease';
    backdrop.style.opacity = '0';
    setTimeout(() => {
      backdrop.style.visibility = 'hidden';
      backdrop.style.zIndex = '-1';
    }, 0);
  }

  if (menu) {
    menu.style.transition = 'opacity 0.5s ease';
    menu.style.opacity = '0';
    setTimeout(() => {
      menu.style.visibility = 'hidden';
      menu.style.zIndex = '-1';
      menu.style.opacity = '';
    }, 0);
  }
}

document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("address")) {
      document.querySelector(".select_address").innerHTML=localStorage.getItem("address")
    }
  })
