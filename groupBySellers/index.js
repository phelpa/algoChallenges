import { sales } from './sales.js'

//1-)Group the array by sellers and order by their total revenue
//2-)Seller with the highest revenue should be shown at the top with position 1
//3-)All the revenue values should only consider Confirmed orders
//4-)All dollar amounts should be displayed to 2 decimal places

const orderTheArray = () => {
  const salesTest = [
    {
      orderDate: '2021-04-28T08:20:58Z',
      orderId: 1,
      revenue: 2316.49,
      sellerName: 'Chris Gilmour',
      status: 'Confirmed',
    },
    {
      orderDate: '2020-12-19T12:30:18Z',
      orderId: 2,
      revenue: 2928.88,
      sellerName: 'Alanna Sumner',
      status: 'Confirmed',
    },

    {
      orderDate: '2021-04-28T08:20:58Z',
      orderId: 3,
      revenue: 1212.49,
      sellerName: 'Chris Gilmour',
      status: 'Confirmed',
    },
    {
      orderDate: '2021-03-09T11:01:09Z',
      orderId: 4,
      revenue: 16.04,
      sellerName: 'Alanna Sumner',
      status: 'Confirmed',
    },
  ]

  //1
  const newSales = salesTest.reduce((acc, item) => {
    acc[item.sellerName] = (acc[item.sellerName] || 0) + item.revenue

    return acc
  }, {})

  console.log(newSales)
}

orderTheArray()
