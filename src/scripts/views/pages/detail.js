/* eslint-disable no-console */
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import UrlParser from '../../routes/url-parser';
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import RestaurantSource from '../../data/restaurant-source';
import {
  createRestaurantDetailTemplate,
} from '../templates/template-creator';
// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
        <div id="mainContent">
        <h2 class="judul-detail">Detail Restorant</h2>
        <hr>
        <div id="restaurant" class="restaurant-detail"></div>
        <div id="likeButtonContainer"></div>
        </div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);

    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        pictureId: restaurant.pictureId,
        description: restaurant.description,
        city: restaurant.city,
        rating: restaurant.rating,
      },
    });
  },
};

export default Detail;
