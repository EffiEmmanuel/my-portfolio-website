import './index.css'
import { faPaintbrush } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import ProjectCard from '../ProjectCard'
import hermosChatApp from '../../assets/images/hermos.jpg'
import myPortfolio from '../../assets/images/mywebsite.png'
import fatApeClone from '../../assets/images/fatapeclone.png'
import artiConnect from '../../assets/images/articonnect.jpg'
import nftMintPage from '../../assets/images/nftmintpage.png'
import spotify from '../../assets/images/spotify.png'
import ventify from '../../assets/images/Ventify.png'
import inventory from '../../assets/images/inventory.png'
import spacedog from '../../assets/images/spacedog.png'
import internistika from '../../assets/images/hms-dashboard.png'
import dsEcommerce from '../../assets/images/ds-ecommerce.png'

function Projects() {
  return (
    <div className='projects container-fluid'>
      {/* <h2 style={{ color: 'black' }}>Projects🎨</h2> */}
      <div className='row'>
        <ProjectCard
          backgroundImage={dsEcommerce}
          title='Digital Superstore'
          codeLink='https://github.com/EffiEmmanuel/ds-ecommerce'
          liveLink='http://ds-ecommerce.vercel.app/'
          classNumber={1}
        />

        <ProjectCard
          backgroundImage={internistika}
          title='Internistika'
          codeLink='https://github.com/EffiEmmanuel/hms-software'
          liveLink='https://hms-software.vercel.app/login'
          classNumber={2}
        />

        <ProjectCard
          backgroundImage={spacedog}
          title='SpaceDog'
          codeLink='https://github.com/EffiEmmanuel/spacedog'
          liveLink='https://spacedog.netlify.app/'
          classNumber={3}
        />

        <ProjectCard
          backgroundImage={ventify}
          title='Ventify'
          codeLink='https://github.com/EffiEmmanuel/ventify-frontend'
          liveLink='https://ventify.netlify.app/'
          classNumber={4}
        />

        <ProjectCard
          backgroundImage={inventory}
          title='Inventory API'
          codeLink='https://github.com/EffiEmmanuel/Inventory-API'
          liveLink='https://documenter.getpostman.com/view/20328447/UzJPMaax'
          classNumber={5}
        />

        <ProjectCard
          backgroundImage={spotify}
          title='Spotify Homepage'
          codeLink='https://github.com/EffiEmmanuel/spotify-clone'
          liveLink='https://effispotifyclone.netlify.app'
          classNumber={6}
        />

        <ProjectCard
          backgroundImage={myPortfolio}
          title='My Portfolio Website'
          codeLink='https://github.com/EffiEmmanuel/my-portfolio-website'
          liveLink='https://effiemmanuel.netlify.app'
          classNumber={7}
        />

        <ProjectCard
          backgroundImage={fatApeClone}
          title='FatApeClub Clone'
          codeLink='https://github.com/EffiEmmanuel/fatape-app-clone'
          liveLink='https://fatapeclub.netlify.app/'
          classNumber={8}
        />

        <ProjectCard
          backgroundImage={hermosChatApp}
          title='Hermos Chat App'
          codeLink='https://github.com/EffiEmmanuel/Hermos-chat-app'
          liveLink='https://hermosapp.000webhostapp.com/'
          classNumber={9}
        />

        <ProjectCard
          backgroundImage={artiConnect}
          title='ArtiConnect'
          codeLink='https://github.com/EffiEmmanuel/artiConnect'
          liveLink='https://articonnect.netlify.app'
          classNumber={10}
        />

        <ProjectCard
          backgroundImage={nftMintPage}
          title='Simple NFT Mint page'
          codeLink='https://github.com/EffiEmmanuel/nft-mint-page'
          liveLink='https://nft-mint-page.netlify.app/'
          classNumber={11}
        />

        <ProjectCard
          backgroundImage={hermosChatApp}
          title='Hermos Chat App'
          codeLink='https://github.com/EffiEmmanuel/Hermos-chat-app'
          liveLink='https://hermosapp.000webhostapp.com/'
          classNumber={12}
        />

        <div className='container d-flex justify-content-center align-items-center'>
          <a href='https://github.com/EffiEmmanuel' className='cta-links hire my-5'>See more</a>
        </div>

      </div>
    </div>
  )
}

export default Projects