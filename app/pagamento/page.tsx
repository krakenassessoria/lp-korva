import React from 'react'

const Checkout = () => {
  return (
    <div className="planne-widget planne-widget-checkout" 
        data-widget-input-class="input" 
        data-widget-proceed-sale-text="Prosseguir"  
        data-widget-skip-resume-cart-page="true" 
        data-widget-checkout-redirect-to="/conta" 
        data-widget-checkout-redirect-button-text="Minha conta" 
        data-widget-logout-redirect-to="/conta" >
    </div>
  )
}

export default Checkout