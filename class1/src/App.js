import React from "react";

const eCommerce = [{
  id: 1,
  image: "https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/7316208/7316208_o01_072722/7316208",
  name: 'hp',
  price: '700$',
}, {
  id: 2,
  image: "https://webobjects2.cdw.com/is/image/CDW/7124499?$product-main$",
  name: "dell",
  price: '$800',
}, {
  id: 3,
  image: "https://m.media-amazon.com/images/I/512P6cpw3ML.__AC_SX300_SY300_QL70_FMwebp_.jpg",
  name: "lenovo",
  price: '$350',
}
]
const App = () => {
  return (
    <div className = 'website' >

  {
    eCommerce.map(a => (
      <div key={a.id}>
       
        <img src={a.image}/>
        <h5>{a.name}</h5>
        <h2>{a.price}</h2>
      </div>

    ))
  }
         </div>
  )
 }
export default App