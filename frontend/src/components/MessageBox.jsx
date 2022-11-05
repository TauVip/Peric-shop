import '../styles/messageBox.css'
import Footer from './Footer'
import Navbar from './Navbar'

const MessageBox = props => {
  return (
    <>
      <Navbar />
      <div className='message-container'>
        <h2 className='message'>{props.children}</h2>
      </div>
      <Footer />
    </>
  )
}
export default MessageBox
