import React from 'react';
import Salebar from '../components/BannersCallouts/Salebar';
import Header from '../containers/Header';
import Mainad from '../containers/Mainad';
import Latestarrivals from '../components/Latestarrivals';
import Carousel from '../containers/Carousel';
import Linebreak from '../components/Linebreak';
import Vidbanner from '../components/Vidbanner';
import Bigsmallad from '../components/Bigsmallad';
import Sidebysidead from '../containers/Sidebysidead';
import Fullpagead from '../components/Fullpagead';
import Footer from '../components/Footer';
import Recentview from '../containers/Recentview';
import Chatopts from '../containers/Chatopts';



import fullimg from '../assets/wImgs/20200922-v1.png';



function Womenspage(){
     sessionStorage.setItem("department", 'womens');
     return <div>
          <Header/>          
          <Salebar />
          <Mainad img={fullimg}/>
          <Latestarrivals
          id1='9901'
          id2='9200'
          id3='9104'
          />
          <Linebreak width={'80%'}/> 
          <Carousel />
          <Vidbanner 
          vidref="assets/rnvid.webm" 
          title="RUNWAY EVERYDAY" 
          copy="Fashion month has arrived, bringing unbridged creativity, innovation & glamour to the front row & beyond. Let the runway shows inspire you to fully express yourself through your style–& live your luxury every day–by shopping the best of the current collections now."
          link="learn more"
          />
          <Linebreak width={'80%'}/>   
          <Bigsmallad 
          big="assets/wImgs/gettyimages-493837244-612x612.jpg"
          small="assets/wImgs/610crop.jpg"
          label="DIOR"
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
          <Fullpagead 
          img="assets/wImgs/psthb.webp"
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

export default Womenspage;