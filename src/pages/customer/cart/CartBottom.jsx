import React,{useState} from 'react';
import { useSelector } from "react-redux";
import axios from "axios"
// import {twillio} from "twilio"

const CartBottom = () => {
  const { cartTotalAmount } = useSelector((store) => store.cart);

  function formatPrice(price) {
    // Get the user's locale from the browser
    const userLocale = navigator.language || "en-US";

    // Format the price value using the user's locale and currency
    const formattedPrice = Number(price).toLocaleString(userLocale, {
      style: "currency",
      currency: "INR",
    });

    return formattedPrice;
  }
  const [amount, setamount] = useState('');

  const handleSubmit =  (e)=>{
    e.preventDefault();
    if(formatPrice(cartTotalAmount) === ""){
    alert("please enter amount");
    }else{
      var options = {
        key: "rzp_test_8Oi03d7vxIYThc",
        key_secret:"Rdnj7jlpLsbwO7EuP5FlZ3Yy",
        amount: parseInt(cartTotalAmount)*100,
        currency:"INR",
        name:"STARTUP_PROJECTS",
        description:"for testing purpose",
        handler: function(response){
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name:"The Econ Eagles",
          email:"thegrovegood@gmail.com",
          contact:"6385553279"   
        },
        notes:{
          address:"Razorpay Corporate office"
        },
        theme: {
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();

      const queryParam = cartTotalAmount;

      axios.get('https://grove-good.onrender.com/api/customer/sms',{ params: { word: queryParam } })
      .then(response => {
        // Handle the response here
        
        console.log('Response:', response.data);
      })
      .catch(error => {
        // Handle errors here
        console.error('Error:', error);
      });
    }
  }
  return (
    <div className="space-y-2 border-t-2 bg-bgcolor p-4 font-urbanist">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-primary">SUBTOTAL</h1>
        <span className="rounded bg-primary py-1 px-2 text-sm text-white md:text-base">
          {formatPrice(cartTotalAmount)}
        </span>
      </div>

      <div className="grid items-center justify-items-center gap-2">
        <p className="text-center text-sm font-medium md:text-lg">
          Product will be Delivered in 7-8 business days 
        </p>
        <button className="rounded bg-primary py-1 px-2 text-sm text-white transition-all duration-100 ease-in-out hover:bg-secondary active:scale-90 active:bg-secondary md:text-base"
         onClick={handleSubmit} >
          Pre-Order
        </button>
      </div>
    </div>
  );
};

export default CartBottom;
