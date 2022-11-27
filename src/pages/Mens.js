import React from 'react';
import Salebar from '../components/BannersCallouts/Salebar';
import Mainad from '../containers/Mainad';
import Header from '../containers/Header';
//import Headspace from '../components/Headspace';

import fullimg from '../assets/main.jpg';
import Latestarrivals from '../components/Latestarrivals';
import Linebreak from '../components/Linebreak';
import Carousel from '../containers/Carousel';
import Vidbanner from '../components/Vidbanner';
import Bigsmallad from '../components/Bigsmallad';
import Sidebysidead from '../containers/Sidebysidead';
import Fullpagead from '../components/Fullpagead';
import Footer from '../components/Footer';
import Recentview from '../containers/Recentview';
import Chatopts from '../containers/Chatopts';



function Menspage(){   
   sessionStorage.setItem("department", 'mens');
   return <div>
      <Header/>      
      <Salebar />
      <Mainad img={fullimg}/>
      <Latestarrivals
      id1='300'
      id2='200'
      id3='100'
      />
      <Linebreak width={'80%'}
      bg={'red'}/>      
      <Carousel />
      <Vidbanner 
      vidref="assets/rnvid.webm" 
      title="RUNWAY EVERYDAY" 
      copy="Fashion month has arrived, bringing unbridged creativity, innovation & glamour to the front row & beyond. Let the runway shows inspire you to fully express yourself through your style–& live your luxury every day–by shopping the best of the current collections now."
      link="learn more"
      />
      <Linebreak width={'80%'}/>   
      <Bigsmallad 
      big="assets/23.jpg"
      small="assets/66.webp"
      label="VALENTINO"
      copy="Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
      />
      <Linebreak width={'80%'}/>   
      <Sidebysidead 
      img1="assets/blank1.jpg"
      title1="The Caption Title"
      copy1="Eum voluptas voluptates non galisum natus et corrupti ullam"
      linkedcopy1="Shop the edit"
      img2="assets/blank1.jpg"
      title2="The Caption Title"
      copy2="Eum voluptas voluptates non galisum natus et corrupti ullam"
      linkedcopy2="Shop the edit"
      />
      <Linebreak width={'80%'}/>  
      <Fullpagead 
      img="assets/w1920.jpg"
      title="The Journal"
      maincopy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
      detailcopy="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      linkcopy="Read more"      
      />
      <Recentview />
      <Footer />   
      <Chatopts delay='5000'/>       
   </div>
}

export default Menspage;

