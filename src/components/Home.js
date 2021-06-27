import React from "react";
import { Media } from 'reactstrap';

const Home = (props) => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
        <h2
            style={{
                marginBottom: '50px',
                textAlign: 'center'
            }}>Welcome Home {user ? user.username : "to the Swole Zone"}</h2>
    
      <Media>
          <h5>Recent Health News</h5>
          <div>(click for full story)</div>
        <Media left top href="https://www.sltrib.com/news/politics/2020/10/14/pandemic-creates/">
          <Media 
          object data-src="holder.js/64x64" 
          src="https://www.sltrib.com/resizer/E5BkYv6NE2JkS3GSyw4eL9dlFLo=/1024x650/cloudfront-us-east-1.images.arcpublishing.com/sltrib/WH2Y7XAAIZAD5JVULAOO7XIRDM.jpg" 
          alt="Cycling boom in Utah due to pandemic"
          style={{
              width: '50%'
          }} />
        </Media>
        <Media body>
          <Media heading>
          Pandemic creates bicycling boom in Utah
          </Media>
          The pandemic has transformed Utah transportation in an unexpected way: It’s propelled a bicycling boom. 
          The Utah Department of Transportation released data Wednesday that shows bicycling has doubled, 
          and in some cases quadrupled, on several popular bike trails. For example, UDOT reported...</Media>
      </Media>
      <Media className="mt-1">
        <Media left middle href="https://www.deseret.com/2021/6/26/22547652/disc-golf-popularity-blowing-up-as-world-disc-golf-championships-conclude-in-utah">
          <Media 
          object data-src="holder.js/64x64" 
          alt="Player diving to throw a disc golf disc into the basket"
          src="https://cdn.vox-cdn.com/thumbor/aVPHL5Rm5usC2bV-W0HWteBFCjs=/0x0:3000x2435/1520x1013/filters:focal(1260x978:1740x1458):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69509445/merlin_2875524.0.jpg"
          style={{
              width: '50%'
          }} />
        </Media>
        <Media body>
          <Media heading>
          Disc golf popularity ‘blowing up’ as world championships conclude
          </Media>
          “Blowing up” was the phrase used all weekend to describe disc golf. The sport has seen tremendous 
          growth in popularity, which was evident Saturday as the Pro Disc Golf Association’s (PDGA) World 
          Championships concluded after five days in the Ogden Valley. To win Worlds, 288 players had to...</Media>
      </Media>
      <Media className="mt-1">
        <Media left bottom href="https://www.hipcamp.com/en-US/discover/lists/hipcampstaff/best-u-s-tent-campsites-to-visit-in-2021">
          <Media 
          object data-src="holder.js/64x64" 
          alt="Generic placeholder image"
          src="https://hipcamp-res.cloudinary.com/image/upload/c_fill,f_auto,g_auto:subject,h_474,q_auto,w_1580/v1522775854/campground-photos/zktk3bv56fgwz8jq8fku.jpg"
          style={{
            width: '50%'
          }} />
        </Media>
        <Media body>
          <Media heading>
          Best U.S. Tent Campsites to Visit in 2021
          </Media>
          Discover and book tent camping, RV parks, cabins, treehouses, 
          and glamping—everywhere from national parks to blueberry farms.
          We integrate with the National Weather Service to provide valuable fire 
          advisories to Hosts and Hipcampers. Real-time Red Flag Warnings and Fire Weather 
          Watch Warnings help...
        </Media>
      </Media>
    </div>
    );
};

export default Home;