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
      name: 'Buffalo chicken Lumpia (small)',
      description:
        '',
      image: '',
      category: categories[0]._id,
      price: 6.50,
      quantity: 3
    },  
    {
      name: 'Teriyaki Chicken Lumpia (small)',
      description:
        '',
      image: '',
      category: categories[0]._id,
      price: 6.50,
      quantity: 3
    },
    {
      name: 'Seafood Lumpia (small)',
      description:
        'A delicious blend of seafood',
      image: '',
      category: categories[0]._id,
      price: 7.10,
      quantity: 3
    },
    {
      name: 'Veggie Lumpia (small)',
      description:
        '',
      image: '',
      category: categories[0]._id,
      price: 6.50,
      quantity: 3
    },
    {
      name: 'Jerk Chicken Lumpia (large)',
      description:
        '',
      image: '',
      category: categories[0]._id,
      price: 12.00,
      quantity: 6
    },
    {
      name: 'Beef Lumpia (large)',
      description:
        '',
      image: '',
      category: categories[0]._id,
      price: 12.00,
      quantity: 6
    },
    {
      name: 'Buffalo Lumpia (large)',
      description:
        '',
      image: '',
      category: categories[0]._id,
      price: 12.00,
      quantity: 6
    },
    {
      name: 'Teriyaki Lumpia (large)',
      description:
        '',
      image: '',
      category: categories[0]._id,
      price: 12.00,
      quantity: 6
    },
    {
      name: 'seafood Lumpia (large)',
      description:
        '',
      image: 'A delicious blend of seafood',
      category: categories[0]._id,
      price: 6.50,
      quantity: 3
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
      name: 'Cheeseburger',
      category: categories[1]._id,
      description:
        'Burger seasoned to perfection with choice of cheese cheddar, American, Swiss, pepper jack serve with lettuce tomato onions pickles and kraZ fries.',
      image: '',
      price: 9.00,
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
      name: 'Bacon Cheeseburger',
      category: categories[1]._id,
      description:
        'Burger seasoned to perfection with bacon, choice of cheese serves with lettuce tomato onions pickles and kraZ fries',
      image: '',
      price: 11.00,
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
      name: 'Garlic Herb Potato Wedges',
      category: categories[4]._id,
      description:
        'Potato is cut, fried and seasoned to order.',
      image:'',
      price: 4.00,
      quantity: 10
    },
    {
      name: 'House Rice',
      category: categories[4]._id,
      description:
        'Hibachi style fried rice',
      image: '',
      price: 5.00,
      quantity: 1
    }
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
