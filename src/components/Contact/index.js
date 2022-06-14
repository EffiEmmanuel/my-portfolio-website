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
    emailjs.sendForm(
      'gmail',
      'template_m9p6zga',
      refForm.current,
      'pJFGEedXzc6lJ797lboHN'
    ).then(() => {
      alert('Message sent successfully!')
      window.location.reload(false)
    }, () => {
      alert('Please try again')
    })
  }

  return (
    <div className='contact'>

      <form className='contact-form' ref={refForm} onSubmit={sendEmail}>
        <div className='row justify-content-center p-0 m-0s'>
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
            <div className='social d-flex justify-content-between my-4'>
              <a target='_blank' href='https://www.linkedin.com/in/emmanuel-effi/'>LinkedIn</a>
              <a target='_blank' href='https://github.com/EffiEmmanuel'>Github</a>
              <a target='_blank' href='https://twitter.com/effi_dev'>Twitter</a>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Contact