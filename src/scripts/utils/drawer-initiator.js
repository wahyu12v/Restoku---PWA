const DrawerInitiator = {
  init({
    button,
    drawer,
    content,
  }) {
    button.addEventListener('click', (event) => {
      // eslint-disable-next-line no-underscore-dangle
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      // eslint-disable-next-line no-underscore-dangle
      this._closeDrawer(event, drawer);
    });
  },

  // eslint-disable-next-line no-underscore-dangle
  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },

  // eslint-disable-next-line no-underscore-dangle
  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default DrawerInitiator;
