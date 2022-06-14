import './index.css'
import { faPaintbrush } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import ProjectCard from '../ProjectCard'
import hermosChatApp from '../../assets/images/hermos.jpg'
import myPortfolio from '../../assets/images/mywebsite.png'
import fatApeClone from '../../assets/images/fatapeclone.png'
import artiConnect from '../../assets/images/articonnect.jpg'
import nftMintPage from '../../assets/images/nftmintpage.png'

function Projects() {
  return (
    <div className='projects container-fluid'>
      {/* <h2 style={{ color: 'black' }}>Projects🎨</h2> */}
      <div className='row'>
        <ProjectCard
          backgroundImage={myPortfolio}
          title='My Portfolio Website'
          codeLink='https://github.com/EffiEmmanuel/my-portfolio-website'
          liveLink='https://effiemmanuel.netlify.app'
          classNumber={1}
        />

        <ProjectCard
          backgroundImage={fatApeClone}
          title='FatApeClub Clone'
          codeLink='https://github.com/EffiEmmanuel/fatape-app-clone'
          liveLink='https://fatapeclub.netlify.app/'
          classNumber={2}
        />

        <ProjectCard
          backgroundImage={hermosChatApp}
          title='Hermos Chat App'
          codeLink='https://github.com/EffiEmmanuel/Hermos-chat-app'
          liveLink='https://hermosapp.000webhostapp.com/'
          classNumber={3}
        />

        <ProjectCard
          backgroundImage={artiConnect}
          title='ArtiConnect'
          codeLink='https://github.com/EffiEmmanuel/artiConnect'
          liveLink='https://articonnect.netlify.app'
          classNumber={4}
        />

        <ProjectCard
          backgroundImage={nftMintPage}
          title='Simple NFT Mint page'
          codeLink='https://github.com/EffiEmmanuel/nft-mint-page'
          liveLink='https://nft-mint-page.netlify.app/'
          classNumber={5}
        />
{/* 
        <ProjectCard
          backgroundImage={hermosChatApp}
          title='Hermos Chat App'
          codeLink='https://github.com/EffiEmmanuel/Hermos-chat-app'
          liveLink='https://hermosapp.000webhostapp.com/'
          classNumber={6}
        /> */}

        <div className='container d-flex justify-content-center align-items-center'>
          <a href='https://github.com/EffiEmmanuel' className='cta-links hire my-5'>See more</a>
        </div>

      </div>
    </div>
  )
}

export default Projects