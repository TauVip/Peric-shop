import CheckoutSteps from '../components/CheckoutSteps'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/payment.css'

const Payment = () => {
  const submitHandler = async e => {
    e.preventDefault()
  }

  return (
    <>
      <Navbar />

      <div className='payment-container'>
        <div className='payment-row'>
          <div className='payment-col'>
            <h2 className='payment-title'>Payment Method</h2>
          </div>
          <div className='payment-col'>
            <CheckoutSteps step1 step2 step3 />
          </div>
        </div>
        <div className='payment-row'>
          <div className='payment-col'>
            <form onSubmit={submitHandler}>
              <div className='form-group'>
                <label htmlFor='paypal'>PayPal</label>
                <input
                  type='checkbox'
                  className='checkbox'
                  name=''
                  id='paypal'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='cash'>Cash</label>
                <input type='checkbox' className='checkbox' name='' id='cash' />
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
export default Payment
