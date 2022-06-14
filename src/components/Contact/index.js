import './index.css'
import React, { useRef } from 'react'
import MemojiHero from '../MemojiHero/'
import memoji from '../../assets/images/my-memoji.png'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser'

function Contact() {
  const nameArray = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', ' ', 'M', 'e']

  const refForm = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_apjmkxv', 'template_m9p6zga', '#myForm', '5Iwg4R46qa626nioz')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
  }

  return (
    <div className='contact'>

      <form id='myForm' className='contact-form' ref={refForm} onSubmit={sendEmail}>
        <div className='row justify-content-center p-3 m-0'>
          <div className='col-lg-6'>
            <div className='contact-header d-flex flex-column align-items-center justify-content-center'>
              <MemojiHero
                memoji={memoji}
                title={nameArray}
                description='I am interested in freelance opportunities, I am open for full-time, part-time, contract employment.'
              />

            </div>
            {/* <h2>Contact Me</h2> */}
            <div className='form-group mt-4'>
              <label htmlFor='name'>Name: </label> <br />
              <input id='name' type='text' className='form-control py-2' name='name' placeholder='John Doe' />
            </div>
            <div className='form-group mt-4'>
              <label htmlFor='email'>Email: </label> <br />
              <input id='email' type='text' className='form-control py-2' name='email' placeholder='abc@example.com' />
            </div>
            <div className='form-group mt-4'>
              <label htmlFor='message'>Message: </label> <br />
              <textarea id='message' className='form-control' name='message' placeholder='Hi Emmanuel,' rows={5}></textarea>
            </div>



            <input type='submit' className='cta-links hire my-4' value='Submit' />
            {/* <a role='button' type='submit' className='cta-links hire my-4'>Submit</a> */}
          </div>
        </div>
      </form>
    </div>
  )
}

export default Contact