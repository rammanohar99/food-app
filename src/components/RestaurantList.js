import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantList = () => {
  const restaurants = [
    {
      id: 1,
      name: 'KFC',
      description: "It's Finger Lickin' Good!",
      image: 'https://seeklogo.com/images/K/kfc-new-logo-72E6348046-seeklogo.com.png'
    },
    {
      id: 2,
      name: "McDonald's",
      description: "I'm Lovin' It",
      image: 'https://logos-world.net/wp-content/uploads/2020/04/McDonalds-Logo.png'
    },
    {
      id: 3,
      name: 'Subway',
      description: 'Eat Fresh',
      image: 'https://logos-world.net/wp-content/uploads/2023/01/Subway-Logo.png'
    },
    {
      id: 4,
      name: 'Pizza Hut',
      description: 'Make It Great',
      image: 'https://logos-world.net/wp-content/uploads/2021/10/Pizza-Hut-Logo.png'
    },
    {
      id: 5,
      name: 'Starbucks',
      description: 'To inspire and nurture the human spirit',
      image: 'https://logos-world.net/wp-content/uploads/2020/09/Starbucks-Logo.png'
    },
    {
      id: 6,
      name: 'Burger King',
      description: 'Have It Your Way',
      image: 'https://logos-world.net/wp-content/uploads/2020/04/Burger-King-Logo.png'
    },
    {
      id: 7,
      name: 'Domino’s',
      description: 'You Got 30 Minutes',
      image: 'https://logos-world.net/wp-content/uploads/2021/08/Dominos-Logo.png'
    },
    {
      id: 8,
      name: 'Dunkin’ Donuts',
      description: 'America Runs on Dunkin’',
      image: 'https://logos-world.net/wp-content/uploads/2020/12/Dunkin-Logo.png'
    }
  ];

  return (
    <div className="restaurant-list">
      {restaurants.map((restaurant) => (
        <div key={restaurant.id} className="restaurant-card">
          <h2>{restaurant.name}</h2>
          <img src={restaurant.image} alt={restaurant.name} style={{ width: '150px', height: '100px', borderRadius: '5px' }} />
          <p>{restaurant.description}</p>
          <Link to={`/menu/${restaurant.id}`}>
            <button>View Menu</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RestaurantList;
