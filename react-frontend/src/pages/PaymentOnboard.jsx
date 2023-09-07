import React from 'react'
import { useEffect, useState } from 'react'
import StripeService from '../services/StripeService'

const PaymentOnboard = () => {
    const [email, setEmail] = useState('')
    
    function handleSubmit(event) {
        event.preventDefault();
        StripeService.onboard({email})
          .then((res) => {
            //redirect user to return url
            console.log(res.data);
            window.location.href = res.data;
          })
          .catch((err) => {
            console.log(err);
          });
      }
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}/>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default PaymentOnboard
