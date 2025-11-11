// import React, { useEffect, useState } from 'react'


// function Home(){
//      var [allData,setAllData] = useState([])
//     var [data,setData] = useState([])
//     var [cart,setCart] = useState([])
//     var [search,setSearch] = useState("")


//     async function fetchData(){
//         var result = await fetch('https://fakestoreapi.com/products')
//         var response = await result.json()
//         setAllData(response)
//         setData(response)
//     }
//     useEffect(()=>{
//         fetchData()

//     },[])

//      useEffect(()=>{
//         var filteredData = allData.filter(item=>item.title.toLowerCase().includes(search))
//         setData(filteredData)

//     },[search])


//     function addToCart(product){
//         setCart([...cart,product])
//     }

//     function deleteCart(myItem){
//         var newCart = cart.filter(item =>item.id !==myItem.id)
//         setCart([newCart])
//     }

//     function handlesetSearch(){
//         var searchedItem = data.filter(item=>item.title === search)
//         setData(searchedItem)

//     }

//     return(
//         <div>
//             <input value={search} onChange={(e)=>{setSearch(e.target.value)}} type="text" />
//             <button onClick={handlesetSearch}>search</button>
//             {
//                 data.map((item)=>{
//                     return(
//                         <div>
//                             <h1>{item.title}</h1>
//                             <button onClick={()=>addToCart(item)}>AddToCart</button>
//                             <img  style={{height : "100px",width : "100px"}} src={item.image} alt="" />
//                         </div>
//                     )
//                 })
//             }
//             <div>
//                 {
//                     cart.map((item)=>{
//                         return(
//                             <div>
//                                 <h1>{item.title}</h1>
//                             <img  style={{height : "100px",width : "100px"}} src={item.image} alt="" />
//                                 <button onClick={()=>deleteCart(item)}>Delete</button>
//                             </div>
//                         )
//                     })
//                 }
//             </div>

//         </div>
//     )
// }

// export default Home



// ai //


// import React, { useEffect, useState } from "react";
// import {toast,ToastContainer} from "react-toastify"
// import "./Home.css"; // 👈 include the CSS file

// function Home() {
//   const [alldata, setAlldata] = useState([]);
//   const [data, setData] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [orders, setOrders] = useState([]);
//   const [search, setSearch] = useState("");
//   const [selectedPayment, setSelectedPayment] = useState("");

//   async function fetchData() {
//     const result = await fetch("https://fakestoreapi.com/products");
//     const myresult = await result.json();
//     setAlldata(myresult);
//     setData(myresult);
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   useEffect(() => {
//     const filteredData = alldata.filter((item) =>
//       item.title.toLowerCase().includes(search.toLowerCase())
//     );
//     setData(filteredData);
//   }, [search]);

//   function addToCart(product) {
//     setCart([...cart, product]);
//     toast.success("added to cart")
//   }

//   function deleteCart(myItem) {
//     const newCart = cart.filter((item) => item.id !== myItem.id);
//     setCart(newCart);
//     toast.success("removed from cart")
//   }

//   function handleSearchClick() {
//     const searchedItem = data.filter(
//       (item) => item.title.toLowerCase() === search.toLowerCase()
//     );
//     setData(searchedItem);
//   }

//   function buyNow(item) {
//     if (!selectedPayment) {
//       toast.info("⚠️ Please select a payment method before buying!");
//       return;
//     }
//     setOrders([...orders, item]);
//     deleteCart(item);
//    toast.success (`✅ Order placed successfully using ${selectedPayment}!`);
//   }

//   return (
//     <div className="home-container">
//         <ToastContainer autoClose={1500}/>
//       <h1 className="home-title">🛍️ Product Store</h1>

//       {/* Search Section */}
//       <div className="search-section">
//         <input
//           placeholder="Search for products..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           type="text"
//           className="search-input"
//         />
//         <button onClick={handleSearchClick} className="search-btn">
//           🔍 Search
//         </button>
//       </div>

//       {/* Product List */}
//       <div className="product-grid">
//         {data.map((item) => (
//           <div key={item.id} className="product-card">
//             <img src={item.image} alt={item.title} className="product-img" />
//             <h3 className="product-title">
//               {item.title.length > 40
//                 ? item.title.slice(0, 40) + "..."
//                 : item.title}
//             </h3>
//             <p className="product-price">${item.price}</p>
//             <button className="add-btn" onClick={() => addToCart(item)}>
//                Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Cart Section */}
//       <div className="cart-section">
//         <h2>🛒 Your Cart ({cart.length})</h2>
//         {cart.length === 0 ? (
//           <p className="empty-cart">Your cart is empty.</p>
//         ) : (
//           <>
//             {/* Payment Options */}
//             <div className="payment-methods">
//               <h3>Select Payment Method 💳</h3>
//               <div className="payment-options">
//                 <label>
//                   <input
//                     type="radio"
//                     name="payment"
//                     value="UPI"
//                     onChange={(e) => setSelectedPayment(e.target.value)}
//                   />
//                   UPI
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="payment"
//                     value="Credit/Debit Card"
//                     onChange={(e) => setSelectedPayment(e.target.value)}
//                   />
//                   Credit/Debit Card
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="payment"
//                     value="Cash on Delivery"
//                     onChange={(e) => setSelectedPayment(e.target.value)}
//                   />
//                   Cash on Delivery
//                 </label>
//               </div>
//             </div>

//             {/* Cart Items */}
//             <div className="cart-grid">
//               {cart.map((item) => (
//                 <div key={item.id} className="cart-card">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="cart-img"
//                   />
//                   <h4 className="cart-title">
//                     {item.title.length > 30
//                       ? item.title.slice(0, 30) + "..."
//                       : item.title}
//                   </h4>
//                   <div className="cart-btn-group">
//                     <button
//                       className="buy-btn"
//                       onClick={() => buyNow(item)}
//                     >
//                       💳 Buy Now
//                     </button>
//                     <button
//                       className="delete-btn"
//                       onClick={() => deleteCart(item)}
//                     >
//                       🗑 Remove
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </>
//         )}
//       </div>

//       {/* Orders Section */}
//       <div className="orders-section">
//         <h2>📦 Your Orders ({orders.length})</h2>
//         {orders.length === 0 ? (
//           <p className="empty-cart">No orders placed yet.</p>
//         ) : (
//           <div className="orders-grid">
//             {orders.map((item) => (
//               <div key={item.id} className="order-card">
//                 <img src={item.image} alt={item.title} className="order-img" />
//                 <h4 className="order-title">
//                   {item.title.length > 30
//                     ? item.title.slice(0, 30) + "..."
//                     : item.title}
//                 </h4>
//                 <p className="order-status">✅ Paid via {selectedPayment}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Home;



// 2nd ai removing duplicates alert //

// import React, { useEffect, useState } from "react";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import "./Home.css";

// function Home() {
//   const [alldata, setAlldata] = useState([]);
//   const [data, setData] = useState([]);
//   const [cart, setCart] = useState([]);
//   const [orders, setOrders] = useState([]);
//   const [search, setSearch] = useState("");
//   const [selectedPayment, setSelectedPayment] = useState("");

//   async function fetchData() {
//     const result = await fetch("https://fakestoreapi.com/products");
//     const myresult = await result.json();
//     setAlldata(myresult);
//     setData(myresult);
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   useEffect(() => {
//     const filteredData = alldata.filter((item) =>
//       item.title.toLowerCase().includes(search.toLowerCase())
//     );
//     setData(filteredData);
//   }, [search]);

//   // ✅ Add to Cart (prevent duplicates)
//   function addToCart(product) {
//     const existingItem = cart.find((item) => item.id === product.id);
//     if (existingItem) {
//       toast.warning("⚠️ The item is already in the cart!");
//       return;
//     }
//     setCart([...cart, { ...product, quantity: 1 }]);
//     toast.success("✅ Added to cart!");
//   }

//   // ✅ Delete Cart Item
//   function deleteCart(myItem) {
//     const newCart = cart.filter((item) => item.id !== myItem.id);
//     setCart(newCart);
//     toast.info("🗑 Removed from cart!");
//   }

//   // ✅ Quantity Controls
//   function increaseQuantity(item) {
//     const updatedCart = cart.map((cartItem) =>
//       cartItem.id === item.id
//         ? { ...cartItem, quantity: cartItem.quantity + 1 }
//         : cartItem
//     );
//     setCart(updatedCart);
//   }

//   function decreaseQuantity(item) {
//     const updatedCart = cart.map((cartItem) =>
//       cartItem.id === item.id && cartItem.quantity > 1
//         ? { ...cartItem, quantity: cartItem.quantity - 1 }
//         : cartItem
//     );
//     setCart(updatedCart);
//   }

//   // ✅ Buy Now Function
//   function buyNow(item) {
//     if (!selectedPayment) {
//       toast.info("⚠️ Please select a payment method before buying!");
//       return;
//     }

//     const orderItem = { ...item, payment: selectedPayment };
//     setOrders([...orders, orderItem]);
//     deleteCart(item);
//     toast.success(`✅ Order placed using ${selectedPayment}!`);
//   }

//   return (
//     <div className="home-container">
//       <ToastContainer
//         position="top-right"
//         autoClose={1200}
//         hideProgressBar={false}
//         newestOnTop
//         closeOnClick
//         pauseOnHover={false}
//         draggable={false}
//         theme="colored"
//       />

//       <h1 className="home-title">🛍️ Product Store</h1>

//       {/* Search Section */}
//       <div className="search-section">
//         <input
//           placeholder="Search for products..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           type="text"
//           className="search-input"
//         />
//       </div>

//       {/* Product List */}
//       <div className="product-grid">
//         {data.map((item) => (
//           <div key={item.id} className="product-card">
//             <img src={item.image} alt={item.title} className="product-img" />
//             <h3 className="product-title">
//               {item.title.length > 40
//                 ? item.title.slice(0, 40) + "..."
//                 : item.title}
//             </h3>
//             <p className="product-price">${item.price}</p>
//             <button className="add-btn" onClick={() => addToCart(item)}>
//               ➕ Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Cart Section */}
//       <div className="cart-section">
//         <h2>🛒 Your Cart ({cart.length})</h2>
//         {cart.length === 0 ? (
//           <p className="empty-cart">Your cart is empty.</p>
//         ) : (
//           <>
//             {/* Payment Options */}
//             <div className="payment-methods">
//               <h3>Select Payment Method 💳</h3>
//               <div className="payment-options">
//                 <label>
//                   <input
//                     type="radio"
//                     name="payment"
//                     value="UPI"
//                     onChange={(e) => setSelectedPayment(e.target.value)}
//                   />
//                   UPI
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="payment"
//                     value="Credit/Debit Card"
//                     onChange={(e) => setSelectedPayment(e.target.value)}
//                   />
//                   Credit/Debit Card
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="payment"
//                     value="Cash on Delivery"
//                     onChange={(e) => setSelectedPayment(e.target.value)}
//                   />
//                   Cash on Delivery
//                 </label>
//               </div>
//             </div>

//             {/* Cart Items */}
//             <div className="cart-grid">
//               {cart.map((item) => (
//                 <div key={item.id} className="cart-card">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="cart-img"
//                   />
//                   <h4 className="cart-title">
//                     {item.title.length > 30
//                       ? item.title.slice(0, 30) + "..."
//                       : item.title}
//                   </h4>
//                   <p className="cart-price">${item.price}</p>

//                   {/* Quantity Controls */}
//                   <div className="quantity-control">
//                     <button
//                       className="qty-btn"
//                       onClick={() => decreaseQuantity(item)}
//                     >
//                       ➖
//                     </button>
//                     <span className="qty-value">{item.quantity}</span>
//                     <button
//                       className="qty-btn"
//                       onClick={() => increaseQuantity(item)}
//                     >
//                       ➕
//                     </button>
//                   </div>

//                   <div className="cart-btn-group">
//                     <button className="buy-btn" onClick={() => buyNow(item)}>
//                       💳 Buy Now
//                     </button>
//                     <button
//                       className="delete-btn"
//                       onClick={() => deleteCart(item)}
//                     >
//                       🗑 Remove
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </>
//         )}
//       </div>

//       {/* Orders Section */}
//       <div className="orders-section">
//         <h2>📦 Your Orders ({orders.length})</h2>
//         {orders.length === 0 ? (
//           <p className="empty-cart">No orders placed yet.</p>
//         ) : (
//           <div className="orders-grid">
//             {orders.map((item) => (
//               <div key={item.id} className="order-card">
//                 <img src={item.image} alt={item.title} className="order-img" />
//                 <h4 className="order-title">
//                   {item.title.length > 30
//                     ? item.title.slice(0, 30) + "..."
//                     : item.title}
//                 </h4>
//                 <p className="order-status">✅ Paid via {item.payment}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Home;


// 3rd ai now add total amount in orders//

import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Home.css";

function Home() {
  const [alldata, setAlldata] = useState([]);
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("");

  async function fetchData() {
    const result = await fetch("https://fakestoreapi.com/products");
    const myresult = await result.json();
    setAlldata(myresult);
    setData(myresult);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filteredData = alldata.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setData(filteredData);
  }, [search]);

  // ✅ Add to Cart (prevent duplicates)
  function addToCart(product) {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      toast.warning("⚠️ The item is already in the cart!");
      return;
    }
    setCart([...cart, { ...product, quantity: 1 }]);
    toast.success("✅ Added to cart!");
  }

  // ✅ Delete Cart Item
 function deleteCart(myItem, showToast = true) {
  const newCart = cart.filter((item) => item.id !== myItem.id);
  setCart(newCart);
  if (showToast) {
    toast.warning("🗑 Removed from cart!");
  }
}


  // ✅ Quantity Controls
  function increaseQuantity(item) {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    setCart(updatedCart);
  }

  function decreaseQuantity(item) {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id && cartItem.quantity > 1
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
    setCart(updatedCart);
  }

  // ✅ Calculate Total Amount
  const totalAmount = cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2);

  // ✅ Buy Now Function
  function buyNow(item) {
  if (!selectedPayment) {
    toast.info("⚠️ Please select a payment method before buying!");
    return;
  }

  const orderItem = { ...item, payment: selectedPayment };
  setOrders([...orders, orderItem]);
  deleteCart(item, false); // 👈 skip the "removed" toast
  toast.success(`✅ Order placed using ${selectedPayment}!`);
}


  return (
    <div className="home-container">
      <ToastContainer
        position="top-right"
        autoClose={1200}
      />

      <h1 className="home-title">🛍️ Product Store</h1>

      {/* Search Section */}
      <div className="search-section">
        <input
          placeholder="Search for products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="search-input"
        />
      </div>

      {/* Product List */}
      <div className="product-grid">
        {data.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.title} className="product-img" />
            <h3 className="product-title">
              {item.title.length > 40
                ? item.title.slice(0, 40) + "..."
                : item.title}
            </h3>
            <p className="product-price">${item.price}</p>
            <button className="add-btn" onClick={() => addToCart(item)}>
              ➕ Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div className="cart-section">
        <h2>🛒 Your Cart ({cart.length})</h2>
        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          <>
            {/* Payment Options */}
            <div className="payment-methods">
              <h3>Select Payment Method 💳</h3>
              <div className="payment-options">
                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="UPI"
                    onChange={(e) => setSelectedPayment(e.target.value)}
                  />
                  UPI
                </label>
                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="Credit/Debit Card"
                    onChange={(e) => setSelectedPayment(e.target.value)}
                  />
                  Credit/Debit Card
                </label>
                <label>
                  <input
                    type="radio"
                    name="payment"
                    value="Cash on Delivery"
                    onChange={(e) => setSelectedPayment(e.target.value)}
                  />
                  Cash on Delivery
                </label>
              </div>
            </div>

            {/* Cart Items */}
            <div className="cart-grid">
              {cart.map((item) => (
                <div key={item.id} className="cart-card">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="cart-img"
                  />
                  <h4 className="cart-title">
                    {item.title.length > 30
                      ? item.title.slice(0, 30) + "..."
                      : item.title}
                  </h4>
                  <p className="cart-price">${item.price}</p>

                  {/* Quantity Controls */}
                  <div className="quantity-control">
                    <button
                      className="qty-btn"
                      onClick={() => decreaseQuantity(item)}
                    >
                      ➖
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() => increaseQuantity(item)}
                    >
                      ➕
                    </button>
                  </div>

                  <div className="cart-btn-group">
                    <button className="buy-btn" onClick={() => buyNow(item)}>
                      💳 Buy Now
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => deleteCart(item)}
                    >
                      🗑 Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* ✅ Total Summary */}
            <div className="total-summary">
              <h3>
                🧾 Total Amount: <span>${totalAmount}</span>
              </h3>
            </div>
          </>
        )}
      </div>

      {/* Orders Section */}
      <div className="orders-section">
        <h2>📦 Your Orders ({orders.length})</h2>
        {orders.length === 0 ? (
          <p className="empty-cart">No orders placed yet.</p>
        ) : (
          <div className="orders-grid">
            {orders.map((item) => (
              <div key={item.id} className="order-card">
                <img src={item.image} alt={item.title} className="order-img" />
                <h4 className="order-title">
                  {item.title.length > 30
                    ? item.title.slice(0, 30) + "..."
                    : item.title}
                </h4>
                <p className="order-status">✅ Paid via {item.payment}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;

