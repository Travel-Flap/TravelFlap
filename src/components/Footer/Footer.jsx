import React from "react";
import "./Footer.css";
import { BsFacebook, BsPinterest, BsTwitter, BsInstagram,BsBehance, BsLinkedin } from "react-icons/bs";
import { IconContext } from "react-icons";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="footerSection">
        <h6 className="footerLogo">
          {/* Logo of the footer linnk(data:image/webp;base64,UklGRqIFAABXRUJQVlA4TJYFAAAvIoALEI0obNsGhWNMRP+DiQGwiUAgyZ9yhHEEAikOYYQFssn9KVsk/Y8EwJ2cAErWth2TpOspG2uoTdl2zTyzZkb3iKvquW1EPK3444sdSLVta9mWuZ/3/R2H/jcuwCWRiSQaiYsi0UhEEplGs+gS3eXh33Rr21a2ZXPf5/n8+0LcidwzCrACnAocYreQKmiAEtytAI/cfpfPDwVIkk3bVu5zbfvZtm3btm3z27Zt27aNZ9u4vnEmAAFMffxif2jtOtVxzTLZfe063XJN/q+xJpPpazJ5do2pA2tM/ZjMfJ7MfI4KGHvn2bFqa9fJxY8vHB1dJGhBZ9RETdKBzJI8Er7B7ag14vajS5lr18ntd86c7UMpAigkBIGAKEiU6oEncCNyl7r28MbQB1fOXUMBIqAUgQQBhEBIBAjQAnei/7SrD24Ga9f/r3h69VQjLfT4XyHC+CZ8WH5Dc9QkjUlvLCNvSIpAAMRhCqYhmHDh/q3g2bUDdxMUgkJKw/3ULQCAz/Ev/sd3eBbLojqRdeE4AKAjxiG0qAf9NQSFoFS+YnA+TEUJPsNM8SwAoDk6I/x/p+/dnvD6+u4qQFDIveEFWBLFeBF3oQwAHZD3P8fuPq/8/o1d6yKAUrkNO2B5/IYnAQA98Nl/2v4OjSqgeSvqExiJ//ArQoAYfIn9AAfvvO78wc2NGUWA02UVjE18i0gAwG0Abb+1JSiwFUbjZ1QFwCf4aO/tz3U/ubWlAIAcJ28NwwkUIACEsaAH3WAgGlLPwPhEIeoBYN28fVcIlPL2ChIHMBwAb7etoUYRCeOHFaAcAxEL2Nf2WSQNyDFsROk4yKidqA3I1C6BRIM4gJthhWsW56kUQEJ1FySBQE7jnlWsGY3MA1yo/ogkFkgYd68io2VEoeBwdf+HLIIkkIdWkdHqQMzDjuq+UfUkCPEVisdtOjKR+Pv3f6ulIYX6RvMRehOAS9g5bs3oBrUhBWL+Y/xKegcEqUX7YpzRZgWQ2oczQFKRJkFiSTlKRm09tbjjLx++x0pRJI8BYAdpLw2ItuTgoC0nV0b/8uHjLUARpeoxAFwiySGSINGkM61wjLg2gQJ4DAAAP9PqShCkUtO6dfRGbD61dtGvH95HK4Bi3PQfXMLlEAOEaIwp0icttfH4uiCZ3/z7x7eZUCSFuhH+Fz/RciWAIHWxQQbaLbHh6NZqv3/+8+6AUgTlv/Dq/6Ec34R0CAhkiBXG4B2W0a6WsWDR+kP76slvC//8+rxnIQWCUhE1ExbiCO2AtBBICCQg9VLXSj63DD2SjbFF0Q7IbKH8HZ18yJdXDXjZ/a8fy2MpRECBIqkrYCKuq1aXDKdoCNBEqgp6okWpgviAoBCUCgYxhYDwHvXTFIQ1k5usiTRpUAAaIhoCKICgEAGFoODPcjVMRmG1Ieo+SS0AhegoaRQQAZQKoBAMYvoQNQeWxMlqU9QTIktDgqIBgkYV0IgChBRyHuNhaezStrbyrIhWCGgIigAKAiiaUmocDMSX1R7VPCwCAKIlKCAAIOGqmTAUT1f7G9doAAAQRAFAXQGDcV3bpYj5ChANKUUAeLqyaxRUt1j17sgQCJQigPIJnoLhqKhuErVM07aIACh/RrbCClHYdmPFrapWkdDmUJgDQ/c8u15D06RpdapV0lapWiaVUS1Ou7I/NhZc/Oz0fvN1hDlr9+PblfJ16r3ZHMqfzeFz8zlcNJ8jp2dz5NRs7jw0myOH5nN4x2wO/4E9i/Y8u74Bcz998gssXPfnD7vePvX1/m67nj/04/vOX5/GUxBCKuKQgUxUQiXUQZPZHI6c/W/3LwAEMHHDj292797x7X7548MomIgA4QW4BvchCk1QB5VRCZnIQDySEYP4NXPSfB0GKEQJLqAQp3EKh3AQO/AHygAAAA==) */}
          {/* <img
            src="https://i.imgur.com/dfhO3jf.png"
            alt="footer logo"
          /> */}
          TRAVALFLAP
        </h6>

        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vu lputate eros, iaculis consequat nisl. Nunc et suscipit urna. Integer eleme ntum orci eu vehicula pretium.
        </p>

        <IconContext.Provider value={{ className: "socialIcons" }}>
          <div className="footersocialmedia">
          
            <a href="https://www.pinterest.com/travelflap/"><BsPinterest /></a>
            <a href=" https://www.facebook.com/travelflap/"><BsFacebook/></a>
            <a href="https://www.instagram.com/travelflap/"><BsInstagram /></a>
            <a href="https://www.behance.net/travelflap"><BsBehance /></a>
            <a href="https://twitter.com/TravelFlap"><BsTwitter /></a>
            <a href="https://www.linkedin.com/company/travelflap/"><BsLinkedin /></a>
          </div>
        </IconContext.Provider>
      </div>
      <div className="footerSection">
        <h6 className="footer-heading">BLOG POSTS</h6>
        <div className="blogs">
          <div className="blogImg">
            <img 
              src="https://preview.colorlib.com/theme/travelix/images/xfooter_blog_1.jpg.pagespeed.ic.FLhgS0NlTD.webp"
              alt=""
            />
          </div>
          <div className="blogText">
            <p>Travel with us this year</p>
            <p className="blogsecond">Nov 29, 2020</p>
          </div>
        </div>
        <div className="blogs">
          <div className="blogImg">
            <img
              src="https://preview.colorlib.com/theme/travelix/images/xfooter_blog_1.jpg.pagespeed.ic.FLhgS0NlTD.webp"
              alt=""
            />
          </div>
          <div className="blogText">
            <p>Travel with us this year</p>
            <p className="blogsecond">Nov 29, 2020</p>
          </div>
        </div>
        <div className="blogs">
          <div className="blogImg">
            <img
              src="https://preview.colorlib.com/theme/travelix/images/xfooter_blog_1.jpg.pagespeed.ic.FLhgS0NlTD.webp"
              alt=""
            />
          </div>
          <div className="blogText">
            <p>Travel with us this year</p>
            <p className="blogsecond">Nov 29, 2020</p>
          </div>
        </div>
      </div>
      <div className="footerSection">
        <h6 className="footer-heading">TAGS</h6>
        <div className="tags">
          <button>design</button>
          <button>fashion</button>
          <button>music</button>
          <button>video</button>
          <button>party</button>
          <button>photography</button>
          <button>adventure</button>
          <button>travel</button>
        </div>
      </div>
      <div className="footerSection">
        <h6 className="footer-heading">CONTACT INFO</h6>

        <div className="footerContect">
          <img
            src="https://preview.colorlib.com/theme/travelix/images/placeholder.svg"
            alt=""
          />

            <p>4127 Raoul Wallenber 45b-c Gibraltar</p>
        </div>

        <div className="footerContect">
            <img
              src="https://preview.colorlib.com/theme/travelix/images/phone-call.svg"
              alt=""
            />
            <p>2556-808-8613</p>
        </div>
        <div className="footerContect">
            <img
              src="https://preview.colorlib.com/theme/travelix/images/message.svg"
              alt=""
            />
            <p>contectme@gmail.com</p>
        </div>
        <div className="footerContect">
            <img
              src="https://preview.colorlib.com/theme/travelix/images/planet-earth.svg"
              alt=""
            />
            <p>wwww.travelflap.net</p>
        </div>
      </div>
    </div>
  );
};

