import './index.scss'
import { useState, useEffect, useRef } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Loader from 'react-loaders'
// import { MutatingDots } from 'react-loader-spinner'
import emailjs from '@emailjs/browser'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { ToastContainer, toast } from 'react-toastify'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover-about')
    }, 3000)

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId)
  }, [])

  const sendEmail = () => {
    emailjs
      .sendForm(
        'service_nxrmh9d',
        'template_0ucdecs',
        form.current,
        'sCkTbbOt_OHL-2k23'
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  const showToast = () => {
    toast.success("You're message is submitted successfully", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
      // className: 'toast-message'
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault() // Prevent the default form submission behavior
    sendEmail(); // Call the sendEmail function
    showToast() // Call the showToast function
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
              letterClass={letterClass}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>

          <div className="contact-form">
            <form ref={form} onSubmit={handleFormSubmit}>
              <ul>
                <li className="half">
                  <input
                    placeholder="Name"
                    type="text"
                    name="user_name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="user_email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" value={'SEND'} className="flat-button" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Dawit Assaye,
          <br />
          Ethiopia,
          <br />
          2Q7P+PRH, Djibuti St, Addis Ababa
          <br />
          <span>dawitassaye1993@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[9.0138606, 38.7852331]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[9.0138606, 38.7852331]}>
              <Popup className="pop">
                Dawit lives here, come over for a coffee :)
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />

      {/* <MutatingDots
className='spinner'
height='100'
width='100'
color='#401488'
secondaryColor='#23eb00'
radius='12.5'
ariaLable='mutating-dots-loading'
wrapperStyle={{}}
wrapperClass=""
visible={true}
/> */}
      <ToastContainer />
    </>
  )
}
export default Contact
