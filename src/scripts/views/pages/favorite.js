// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import {
  createRestaurantItemTemplate,
} from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <div id="mainContent">
        <section class="content">
                <h2>List Restorant Favorit</h2>
                <div id="restaurant" class="restaurant"> </div>
        </section>
        </div>
        `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restaurantsContainer = document.querySelector('#restaurant');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorite;
