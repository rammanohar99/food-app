import React from 'react';
import { useParams } from 'react-router-dom';

const Menu = ({ addToCart }) => {
  const { restaurantId } = useParams();

  // Sample restaurant names in the specified order
  const restaurantNames = {
    1: 'KFC',
    2: "McDonald's",
    3: 'Subway',
    4: 'Pizza Hut',
    5: 'Starbucks',
    6: 'Burger King',
    7: 'Domino\'s',
    8: 'Dunkin',
  };

  // Sample menu items based on restaurant ID
  const menus = {
    1: [
      { id: 1, name: 'All Chicken Box', price: 10, image: 'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-PR00002167.jpg?ver=54.2' },
      { id: 2, name: 'Smoky Red Chicken Rice Bowlz', price: 12, image: 'https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/items/xl/D-K873.jpg?ver=54.2' },
    ],
    2: [
      { id: 3, name: 'Big Mac', price: 8, image: 'https://img.freepik.com/free-photo/photo-delicious-hamburger-isolated-white-background_125540-3378.jpg?w=2000&t=st=1729228402~exp=1729229002~hmac=acbeaf6a0ab90c642a41620e2caaf543bf5fd247cc61dee0e103f25f6657e6e1' },
      { id: 4, name: 'French Fries', price: 5, image: 'https://pngimg.com/uploads/fries/fries_PNG97884.png' },
    ],
    3: [
      { id: 5, name: 'Italian BMT', price: 9, image: 'https://media-cdn.tripadvisor.com/media/photo-s/11/7a/62/4c/italian-bmtbursting-with.jpg' },
      { id: 6, name: 'Veggie Delite', price: 7, image: 'https://subwayisfresh.com.sg/wp-content/uploads/2022/01/veggie-delite-PH-594x334-1.jpeg' },
    ],
    4: [
      { id: 7, name: 'Pepperoni Pizza', price: 15, image: 'https://static.wixstatic.com/media/597497_39dfa709d3d845eeaf43eb692e93b31b~mv2.jpg/v1/fill/w_1500,h_944,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg' },
      { id: 8, name: 'Cheese Pizza', price: 12, image: 'https://kitchenatics.com/wp-content/uploads/2020/09/Cheese-pizza-1.jpg' },
    ],
    5: [
      { id: 9, name: 'Coffee', price: 5, image: 'https://www.allrecipes.com/thmb/0OMr1LigolD3vsnTKxCMEKnqh18=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-518858391-2000-955fb0e2dbd64d008ec3628fd9988371.jpg' },
      { id: 10, name: 'Latte', price: 6, image: 'https://www.tasteofhome.com/wp-content/uploads/2019/06/Iced-Skinny-Latte-starbucks-e1639977110286.jpg?fit=700,700' },
    ],
    6: [
      { id: 11, name: 'Whopper', price: 8, image: 'https://cdn.prod.website-files.com/631b4b4e277091ef01450237/65947cd2a2c28c35b5ca6fb1_Whopper%20w%20Cheese.png' },
      { id: 12, name: 'Fries', price: 3, image: 'https://compote.slate.com/images/c72f30b4-4e25-46dc-b1f4-b6a7063b3d56.jpeg?crop=1558%2C1039%2Cx0%2Cy0&width=1920' },
    ],
    7: [
      { id: 13, name: 'Pepperoni Pizza', price: 15, image: 'https://static.wixstatic.com/media/597497_39dfa709d3d845eeaf43eb692e93b31b~mv2.jpg/v1/fill/w_1500,h_944,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Image-empty-state.jpg' },
      { id: 14, name: 'BBQ Chicken Pizza', price: 14, image: 'https://www.dominos.com.my/ManagedAssets/MY/product/PXBQ/MY_PXBQ_en_hero_12818.jpg?v355054098' },
    ],
    8: [
      { id: 15, name: 'Coffee', price: 3, image: 'https://img.buzzfeed.com/buzzfeed-static/static/2016-05/24/9/asset/buzzfeed-prod-fastlane01/sub-buzz-18481-1464095929-18.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto' },
      { id: 16, name: 'Donut', price: 2, image: 'https://images.jdmagicbox.com/comp/def_content_category/dunkin-donut/dunkin-donut-849-r9e5r.jpg' },
    ],
  };

  const menuItems = menus[restaurantId] || [];
  const restaurantName = restaurantNames[restaurantId] || 'Restaurant';

  return (
    <div className="menu">
      <h2>Menu for {restaurantName}</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt={item.name} style={{ width: '150px', height: '150px' }} />
            <p>{item.name} - ${item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
