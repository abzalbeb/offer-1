function openMenu() {
  const menu = document.getElementById('container-menu');
  const backdrop = document.querySelector('.MuiBackdrop-root');
  const drawer = document.querySelector('.MuiDrawer-root.MuiDrawer-modal.MuiModal-root');

  if (drawer) {
    drawer.style.visibility = 'visible';
    drawer.style.zIndex = '999999';
    drawer.classList.remove('MuiModal-hidden', 'css-12snods');
    drawer.classList.add('css-y28f86');
  }

  if (backdrop) {
    backdrop.style.visibility = 'visible';
    backdrop.style.zIndex = '120';
    backdrop.style.opacity = '1';
  }

  if (menu) {
    menu.style.visibility = 'visible';
    menu.style.zIndex = '999997';
  }
}

function menuClose() {
  const menu = document.getElementById('container-menu');
  const backdrop = document.querySelector('.MuiBackdrop-root');
  const drawerRoot = document.querySelector('.MuiDrawer-root');

  if (drawerRoot) {
    drawerRoot.classList.remove('css-y28f86');
    drawerRoot.classList.add('MuiModal-hidden', 'css-12snods');

    setTimeout(() => {
      drawerRoot.style.visibility = 'hidden';
      drawerRoot.style.zIndex = '-1';
    }, 300);
  }

  if (backdrop) {
    backdrop.style.opacity = '0';
    setTimeout(() => {
      backdrop.style.visibility = 'hidden';
      backdrop.style.zIndex = '-1';
    }, 300);
  }

  if (menu) {
    setTimeout(() => {
      menu.style.visibility = 'hidden';
      menu.style.zIndex = '-1';
    }, 300);
  }
}
