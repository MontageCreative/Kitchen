import uuidv4 from 'uuid/v4';

const generateOrderType = (title, ready) => ({
  title,
  orders: [
    {
      id: uuidv4(),
      name: 'Seafood Laksa',
      ready,
      done: false,
      timer: ready ? null : 0,
      needTiming: ready ? false : true,
      subOrders: [
        {
          name: 'Medium Rare',
          id: uuidv4()
        },
        {
          name: 'Red Wine Jus',
          id: uuidv4()
        }
      ]
    },
    {
      id: uuidv4(),
      name: 'Trio of Dips',
      ready,
      done: false,
      timer: ready ? null : 0,
      needTiming: ready ? false : true
    }
  ]
});

const generateOrder = ({ name, type, isSnoozed, done }) => ({
  id: uuidv4(),
  name,
  type,
  timeLeft: null,
  snoozedMinutes: null,
  completeTime: null,
  time: '00:00am',
  customer: {
    count: 2,
    name: 'Claire',
    timer: 0
  },
  orderTypes: [
    generateOrderType('Entree', true),
    generateOrderType('Main', false),
    generateOrderType('Dessert', true)
  ]
});

const promise = new Promise((resolve, reject) => {
  const data = [];

  for (let i = 0; i < 1; i++) {
    data.push(
      generateOrder({
        name: 'Table: 07',
        type: 'restaurant',
        isSnoozed: false,
        done: false,
      }),
      generateOrder({
        name: 'Pick Up',
        type: 'takeaway',
        isSnoozed: false,
        done: false,
      }),
      generateOrder({
        name: 'UberEats',
        type: 'delivery',
        isSnoozed: false,
        done: false,
      })
    );
  }

  resolve(data);
});

export default promise;
