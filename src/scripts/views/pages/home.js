// eslint-disable-next-line import/no-named-as-default, import/no-named-as-default-member
import RestaurantSource from '../../data/restaurant-source';
import * as templateCreator from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <div id="mainContent">
            <section class="content">
                <h2>List Restorant</h2>
                <div id="restaurant" class="restaurant"></div>
            </section>
        </div>
        `;
  },

  async afterRender() {
    const restaurant = await RestaurantSource.listRestaurant();
    const restaurantContainer = document.querySelector('#restaurant');
    restaurant.forEach((restaurants) => {
      restaurantContainer.innerHTML += templateCreator.createRestaurantItemTemplate(restaurants);
    });
  },
};

export default Home;
