import React from "react"
import styled from 'styled-components'

const CheckoutButtonStyles = styled("button")`
  font-family: "Gelasio";
  font-size: 16px;
  text-align: center;
  color: #fff;
  padding: 12px 30px;
  background-color: #2196f3;
  border: 2px solid #2196f3;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #64b5f6;
  }
  &:focus {
    outline: none;
  }
`

const CheckoutButton = class extends React.Component {
  // Initialise Stripe.js with your publishable key.
  // You can find your key in the Dashboard:
  // https://dashboard.stripe.com/account/apikeys
  componentDidMount() {
    this.stripe = window.Stripe("pk_test_yEgiy0awqCO4Udm4kkrvT5oP")
  }
  async redirectToCheckout(event) {
    event.preventDefault()
    const { error } = await this.stripe.redirectToCheckout({
      lineItems: [
        { 
          price: this.props.product.node.id, 
          quantity: parseInt(this.props.quantity) 
        },
        {
          price: this.props.shipping.node.id,
          quantity: 1,
        },
      ],
      mode: "payment",
      successUrl: `https://${document.location.hostname}/success/`,
      cancelUrl: `${document.location.href}`,
      shippingAddressCollection: {
        allowedCountries: ["US", "CA"],
      },
    })
    if (error) {
      console.warn("Error:", error)
    }
  }
  render() {
    return (
      <CheckoutButtonStyles onClick={event => this.redirectToCheckout(event)}>
        Checkout
      </CheckoutButtonStyles>
    )
  }
}
export default CheckoutButton