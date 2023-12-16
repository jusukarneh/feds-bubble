const db = require('./connection');
const { User, Product, Category } = require('../models');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Category', 'categories');
  await cleanDB('Product', 'products');
  await cleanDB('User', 'users');

  const categories = await Category.insertMany([
    { name: 'Lumpia' },
    { name: 'Burgers and Sandwiches' },
    { name: 'Philly' },
    { name: 'Entree' },
    { name: 'Sides' },
    { name: 'Wings' },
    { name: 'Salads' },
    { name: 'Soup' },
    { name: 'Deserts' },
    { name: 'Kids' }
  ]);

  console.log('categories seeded');

  const products = await Product.insertMany([
    {
      name: 'Jerk chicken lumpia (small)',
      description:
        '',
      image: '',
      category: categories[0]._id,
      price: 6.50,
      amount: 3 
    },
    {
      name: 'Beef Lumpia (small)',
      description:
        '',
      image: '',
      category: categories[0]._id,
      price: 6.50,
      amount: 3
    },
    
    {
      name: 'Hamburger',
      category: categories[1]._id,
      description:
        'Burger seasoned to perfection serve with lettuce tomato onions pickles and a side of kraZ fries.',
      image: '',
      price: 8.00,
      quantity: 1
    },    
    {
      name: 'Bacon Cheeseburger',
      category: categories[1]._id,
      description:
        'Burger seasoned to perfection with bacon, choice of cheese serves with lettuce tomato onions pickles and kraZ fries',
      image: '',
      price: 11.00,
      quantity: 1
    },

    {
      name: 'Beef Philly',
      category: categories[2]._id,
      description:
        'Serves on a hoagie bun with gill onions, peppers and mushrooms with cheddar cheese and kraZ fries.',
      image: '',
      price: 10.50,
      quantity: 1
    },
    {
      name: 'Chicken Philly',
      category: categories[2]._id,
      description:
        'Serves on a hoagie bun with gill onions, peppers and mushrooms with pepper jack cheese and kraZ fries.',
      image: '',
      price: 11.00,
      quantity: 1
    },

    {
      name: 'Grill Salmon',
      category: categories[3]._id,
      description:
        'Salmon is season and grilled to perfection serves with choice of two sides',
      image: '',
      price: 15.00,
      quantity: 1
    },

    {
      name: 'kraZ Fries',
      category: categories[4]._id,
      description: 'A mixture of crinkle fries and straight seasoned to perfection perfection with our bubble seasoning.',
      image: '',
      price: 2.00,
      quantity: 6
    },
    {
      name: 'Auntie Carletta Mac and Cheese',
      category: categories[4]._id,
      description:
        'Freshly baked 5 cheeses Mac and Cheese',
      image: '',
      price: 7.00,
      quantity: 1
    },
    
    {
      name: 'Buffalo Wings',
      description:
        'Buffalo wings is serves with your choice of Hot, Medium or Mild',
      image: '',
      category: categories[5]._id,
      price: 10.50,
      amount: 6 
    },
    {
      name: 'Spicy Teriyaki Wings',
      category: categories[5]._id,
      description:
        '',
      image: '',
      price: 10.50,
      quantity: 6
    },
    {
      name: 'Grill Chicken Salad',
      category: categories[6]._id,
      description:
        '',
      image: '',
      price: 11.00,
      quantity: 1
    },
    {
      name: 'fry Chicken salad',
      category: categories[6]._id,
      description:
        '',
      image: '',
      price: 12.00,
      quantity: 1
    },

    {
      name: 'Healthy Chicken Soup',
      category: categories[7]._id,
      description:
        'A delicious home made chicken soup.',
      image: '',
      price: 6.00,
      quantity: 1
    },

    {
      name: 'Honey Ray Apple Crisp',
      category: categories[8]._id,
      description:
        '',
      image: '',
      price: 7.75,
      quantity: 1
    },
    
    {
      name: 'Chicken Strips',
      category: categories[9]._id,
      description:
        'hand battered chicken strips serves with fries',
      image: '',
      price: 8.50,
      quantity: 4
    },
    {
      name: 'Sliders',
      category: categories[9]._id,
      description:
        'beef sliders topped with American cheese serves with fries',
      image: '',
      price: 8.00,
      quantity: 3
    },
   

  ]);

  console.log('products seeded');

  await User.create({
    firstName: 'jusu',
    lastName: 'karneh',
    email: 'jusudaddi@yahoo.com.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
