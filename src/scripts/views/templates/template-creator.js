/* eslint-disable */
import CONFIG from '../../globals/config';

function foodsRestaurant(restaurant) {
  return restaurant.menus.foods.map((food) => `
    <li>${food.name}</li>
    `).join('');
}

function drinksRestaurant(restaurant) {
  return restaurant.menus.drinks.map((drink) => `
    <li>${drink.name}</li>
    `).join('');
}

function customerReviews(restaurant) {
  return restaurant.customerReviews.map((reviews) => `
    <li class="review">
        <div class="name-review">${reviews.name}</div>
        <div class="description-review">" ${reviews.review} "</div>
        <div class="date-review">${reviews.date}</div>
    </li>
    `).join('');
}

const createRestaurantDetailTemplate = (restaurant) => `
<div class="detail">
    <div class="restaurant-item-detail">
        <h1 tabindex="0" class="restaurant-item-title-detail">${restaurant.name}</h1>
        <img tabindex="0" crossorigin="anonymous"  class="restaurant-item-thumbnail-detail" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}"/>
    </div>

    <div class="restaurant-info">
        <ul tabindex="0" class="restaurant-list">
            <li class="restaurant-item">
                <h3 class="restaurant-label">Alamat</h3>
                <h4 class="restaurant-text">${restaurant.address}</h4>
            </li>
            <li class="restaurant-item">
                <h3 class="restaurant-label">Kota</h3>
                <h4 class="restaurant-text">${restaurant.city}</h4>
            </li>
            <li class="restaurant-item">
                <h3 class="restaurant-label">Rating</h3>
                <h4 class="restaurant-text">⭐${restaurant.rating}</h4>
            </li>
            <li class="restaurant-item">
                <h3 class="restaurant-label">Deskripsi</h3>
                <p class="restaurant-item-description-detail">${restaurant.description}</p>
            </li>
        </ul>
    </div>
    
    

    <div class="restaurant-menu">
        <h2 tabindex="0" class="restaurant-label-menu"> Menu</h2>
        <div class="menu">
            <ul tabindex="0">
                <li>Makanan</li>
                <ul>${foodsRestaurant(restaurant)}</ul>
            </ul>
            <ul tabindex="0">
                <li>Minuman</li> 
                <ul>${drinksRestaurant(restaurant)}</ul>
            </ul>
        </div>
    </div>

    <div class="restaurant-review">
        <h2 tabindex="0" class="restaurant-label-review">Ulasan Pelanggan</h2>
        <ul tabindex="0" class="review-boxs"> ${customerReviews(restaurant)}</ul>
    </div>


</div>


`;

const createRestaurantItemTemplate = (restaurant) => `
<article class="daftar-restaurant">
    <img class="list-restaurant-image" crossorigin="anonymous"  src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}">
    <div class="list-restaurant-details">
        <h1 class="list-judul-restaurant">
            <a href="/#/detail/${restaurant.id}">${restaurant.name}</a>
        </h1>
        <p class="list-restaurant-city">${restaurant.city}</p>
        <div class="list-restaurant-rating">
            <p class="list-restaurant-rating-teks">Rating </p>
            <p class="list-restaurant-rating-star">★ ${restaurant.rating}</p>
        </div> 
        <p class="list-restaurant-description">${restaurant.description}</p>
    </div> 
</article>


`;

const createLikeButtonTemplate = () => `
    <button aria-label="like this movie" id="likeButton" class="like">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this movie" id="likeButton" class="like clicked"> <!-- Tambahkan kelas "clicked" di sini -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
    </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
