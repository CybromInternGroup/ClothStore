import "./aboutus.css";
import aboutmainimg from "./img/aboutusmain-removebg-preview.png"
import jourimg1 from "./img/IMG20240117145729.jpg"
import jourimg2 from "./img/IMG20240127130659.jpg"
import jourimg3 from "./img/IMG20240117184907.jpg"
import jourimg4 from "./img/IMG20240127130612.jpg"
import jourimg5 from "./img/IMG20240117184834.jpg"


export default function AboutUs() {
  // function fok() {
  //   var j = document.getElementById("arr");
  //   j.style.backgroundImage =
  //     "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
  // }

  // function kof() {
  //   var j = document.getElementById("arr");
  //   j.style.backgroundImage =
  //     "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
  // }

  // function gok() {
  //   let j = document.getElementById("brr");
  //   j.style.backgroundImage =
  //     "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
  // }

  // function kog() {
  //   let j = document.getElementById("brr");
  //   j.style.backgroundImage =
  //     "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
  // }

  // function hok() {
  //   let j = document.getElementById("crr");
  //   j.style.backgroundImage =
  //     "url(https://cdn.iconscout.com/icon/premium/png-64-thumb/chevron-arrow-3883460-3231250.png)";
  // }

  // function koh() {
  //   let j = document.getElementById("crr");
  //   j.style.backgroundImage =
  //     "url(https://cdn.iconscout.com/icon/free/png-64/right-arrow-1438234-1216195.png)";
  // }

  // window.onscroll = function () {
  //   jet();
  // };

  // function jet() {
  //   var ilake = document.getElementById("head");
  //   ilake.style.top = "0px";
  //   ilake.style.position = "sticky";
  // }

  window.addEventListener("scroll", () => {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var wnd = window.innerHeight;
      var rtop = reveals[i].getBoundingClientRect().top;
      var rpoint = 100;

      if (rtop < wnd - rpoint) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  });
  return (
    <div classNameName="App">
      {/* <nav>
        <div>
          <a href="mailto: karan.kumar@ecerasystem.com">
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/email-letter-envelope-message-38065.png"
              alt="G-mail"
            />
            <span
              style={{
                color: "white",
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
              }}
            >
              karan.kumar@ecerasystem.com
            </span>
          </a>
          <a href="tel: +91 123456789">
            <img
              src="https://cdn.iconscout.com/icon/premium/png-64-thumb/telephone-41-117249.png"
              alt=""
            />
            <span
              style={{
                color: "white",
                fontFamily:
                  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
              }}
            >
              +91 123456789
            </span>
          </a>
        </div>
        <div>
          <a href={{}}>
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/instagram-1868978-1583142.png"
              alt=""
            />
          </a>
          <a href={{}}>
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/facebook-logo-3771014-3147631.png"
              alt=""
            />
          </a>
          <a href={{}}>
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/linkedin-162-498418.png"
              alt=""
            />
          </a>
          <a href={{}}>
            <img
              src="https://cdn.iconscout.com/icon/free/png-64/telegram-2752057-2284874.png"
              alt=""
            />
          </a>
        </div>
      </nav> */}
      {/* <header id="head">
        <a href={{}}>
          <span>
            <img
              src="https://www.ecerasystem.com/ecerasystem/images/eslogo.png"
              alt="Logo"
            />
          </span>
          <span id="c_name">ECERA SYSTEM</span>
        </a>
        <ul>
          <li>
            <a href={{}}>Home</a>
          </li>
          <li>
            <a href={{}} onMouseOver={gok} onMouseLeave={kog}>
              Register/Sign In
            </a>
            <div id="brr"></div>
          </li>
          <li>
            <a href={{}} onMouseOver={fok} onMouseLeave={kof}>
              Services
            </a>
            <div id="arr"></div>
          </li>
          <li>
            <a href={{}}>Contact Us</a>
          </li>
        </ul>
      </header> */}
      <main>
        <div id="front">
          <h1 style={{ textAlign: "center" }}>Welcome,To AS Fashion Factory</h1>
          <img
            src={aboutmainimg}
            alt="font"
          />
          <p>
            " Our goal is to remove any technical or financial barriers that can
            prevent you from making your own website. Our powerful tools empower
            individuals and business owners to create a website, sell online, or
            reach global audiences. Whether you're a beginner or website expert,
            we're excited to help you on your journey! "
          </p>
        </div>

        <div id="first" className="reveal">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/growing-business-by-digital-marketing-4217800-3501667.png"
            alt=""
          />
          <div>
            <h1>We provide immense services </h1>
            <p>
            Elevate your online shopping experience with our unparalleled range of services on our cloth E-commerce website. We take pride in offering an extensive array of services designed to enhance every aspect of your journey. From a diverse and trendy clothing collection to seamless order processing, secure transactions, and efficient delivery, we ensure an immersive and satisfying shopping adventure. 
            </p>
            <h2>Our customers (9000+)</h2>
            <div className="comm">
              <div id="comm1"></div>
            </div>
            <h2>Our Products (7000+)</h2>
            <div className="comm">
              <div id="comm2"></div>
            </div>
            <h2>Our Orders (6000+)</h2>
            <div className="comm">
              <div id="comm3"></div>
            </div>
          </div>
        </div>

        <div id="fourth" className="reveal">
          <h2 style={{ color: "white" }}>OUR JOURNEY</h2>
          <h1 style={{ color: "white" }}>
            The whole journey of our Internship is in these images, Our mentor Dr. Ashish Chandiok & We faced all the problems with the DragonHeart.
          </h1>
          <div id="fourth_cards">
            <div>
              <img
                src={jourimg1}
                alt=" "
              />
              {/* <p>DATA ANALYTICS</p> */}
            </div>
            <div>
              <img
                src={jourimg2}
                alt=" "
              />
              {/* <p>UI/UX DESIGN</p> */}
            </div>
            <div>
              <img
                src={jourimg3}
                alt=" "
              />
              {/* <p>WEB DEVELOPEMENT</p> */}
            </div>
            <div>
              <img
                src={jourimg4}
                alt=" "
              />
              {/* <p>Q&A TESTING</p> */}
            </div>
            <div>
              <img
                src={jourimg5}
                alt=" "
              />
              {/* <p>DEDICATED TEAM</p> */}
            </div>
            <div>
              <img
                src={jourimg1}
                alt=" "
              />
              {/* <p>DATA ANALYTICS</p> */}
            </div>
            <div>
              <img
                src={jourimg1}
                alt=" "
              />
              {/* <p>DATA ANALYTICS</p> */}
            </div>
            <div>
              <img
                src={jourimg1}
                alt=" "
              />
              {/* <p>DATA ANALYTICS</p> */}
            </div>
            <div>
              <img
                src={jourimg1}
                alt=" "
              />
              {/* <p>DATA ANALYTICS</p> */}
            </div>
            <div>
              <img
                src={jourimg1}
                alt=" "
              />
              {/* <p>DATA ANALYTICS</p> */}
            </div>

          </div>
        </div>

        <div id="second" className="reveal">
          <div className="aboutuscontainer">
            <div>
              <h1>WE PROVIDE</h1>
              <h2>Remote Employee</h2>
              <p>
              We deliver a dedicated team of skilled professionals who seamlessly integrate into your virtual workspace, offering comprehensive support to enhance the efficiency of your online clothing store. From managing inventory and processing orders to delivering exceptional customer service, our remote employees excel at handling various facets of E-commerce operations
              </p>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/men-and-woman-characters-work-together-on-project-presentation-2706075-2259871.png"
              alt=""
            />
          </div>
          <div className="aboutuscontainer">
            <div>
              <h1>WE HAVE</h1>
              <h2>Global Partnership</h2>
              <p>
                Our Global parters are spread 12 countries and our client base
                is growing day by day . Many of my clients are repeat customers
                and several have come to us through high recommendation and
                referrals . Our client hail from different domains
              </p>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/business-partnership-2975816-2476892.png"
              style={{ marginTop: "50px" }}
              alt=""
            />
          </div>
          <div className="aboutuscontainer">
            <div>
              <h1>OUR GOAL</h1>
              <h2>Same Quality at Low Cost</h2>
              <p>
                We have unique and revolutionary business principle, ‘Same
                quality but significantly lower cost’. we aims to fulfill the
                long-standing outsourcing vacuum felt by Small Medium
                Enterprises across the country who, till now, were dependent
                mostly on offshore freelancers.The hired professionals match
                their western counterparts in skills, qualifications and
                experience alongwith the added advantage of attractive low
                costs.
              </p>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/business-goal-4352585-3618767.png"
              style={{ marginTop: "80px" }}
              alt=""
            />
          </div>
          <div className="aboutuscontainer">
            <div>
              <h1>OUR STRENGTHS</h1>
              <h2>Intelligent Use of Technology and Human Resource</h2>
              <p>
                We provide every client with a dedicated, full-time work from
                home from their comfortable place. To successfully achieve this
                objective, we relay on management, infrastructure, hardware and
                the latest technology to bridge physical distance and time zone
                differences.We provide experience of making employees to work
                from home for the company as real as they work in the company.
              </p>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/teamwork-3560853-2989144.png"
              alt=""
            />
          </div>
        </div>

        <div id="third" className="reveal">
          {/* <h3 style={{ textAlign: "center" }}>OUR PROCESS</h3> */}
          <h1 style={{ textAlign: "center" }}>
            Our Team Profile
          </h1>
          <div id="third_cards">
            <div>
              <img style={{width:"100px"}} src={jourimg1} alt="" />
              <h2>End to End Solutions and Services Guaranteed</h2>
              <p>
                Fusce nec tellus sed augue semper porta. Mauris massa.
                Vestibulum lacinia arcu eget nulla. per inceptos himenaeos.
              </p>
            </div>
            <div>
            <img style={{width:"100px"}} src={jourimg1} alt="" />
              <h2>Ahead of The Curve We Future-proof Your IT</h2>
              <p>
                Fusce nec tellus sed augue semper porta. Mauris massa.
                Vestibulum lacinia arcu eget nulla. per inceptos himenaeos.
              </p>
            </div>
            <div>
            <img style={{width:"100px"}} src={jourimg1} alt="" />
              <h2>Experience Certainty Every Project Executed Successful</h2>
              <p>
                Fusce nec tellus sed augue semper porta. Mauris massa.
                Vestibulum lacinia arcu eget nulla. per inceptos himenaeos.
              </p>
            </div>
          </div>
        </div>
         
        </main>
        {/* <div id="fifth" className="reveal">
          <h1>ECERA SYSTEM</h1>
          <div>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/address-blue-circle-location-map-marker-navigation-icon-45868.png"
                alt=" "
              />
              <span>
                <h3>Address</h3>
                <p>4813 Woodland Ave Royal Oak, Michigan - 48073, USA</p>
              </span>
            </a>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/phone-2666572-2212584.png"
                alt=" "
              />
              <span>
                <h3>Phone</h3>
                <p>+1 248 672 1972</p>
              </span>
            </a>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/gmail-2489176-2082900.png"
                alt=" "
              />
              <span>
                <h3>E-mail</h3>
                <p>Sales@Ecerasystem.com</p>
              </span>
            </a>
          </div>
        </div>
     

      <footer
        style={{ display: "flex", "justify-content": "space-around" }}
        id="foote"
      >
        <ul>
          <li>
            <a href={{}}>About Us</a>
          </li>
          <li>
            <a href={{}}>Carrers</a>
          </li>
          <li>
            <a href={{}}>Blogs</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href={{}}>Training</a>
          </li>
          <li>
            <a href={{}}>FAQs</a>
          </li>
        </ul>
        <div>
          <h2>Conatact Us</h2>
          <span>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/instagram-188-498425.png"
                alt=" "
              />
            </a>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/facebook-262-721949.png"
                alt=" "
              />
            </a>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/whatsapp-43-189795.png"
                alt=" "
              />
            </a>
          </span>
          <span>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/telegram-2752057-2284874.png"
                alt=" "
              />
            </a>
            <a href={{}}>
              <img
                src="https://cdn.iconscout.com/icon/free/png-64/linkedin-162-498418.png"
                alt=" "
              />
            </a>
          </span>
          <a
            href="tel: 123456789"
            style={{
              color: "white",
              fontSize: "1.3em",
              letterSpacing: "2px",
              textAlign: "center",
              textDecoration: "none",
              fontWeight: "bolder",
              marginTop: "20px"
            }}
          >
            Telephone No: +91 232345553
          </a>
        </div>
      </footer> */}
      {/* <p
        style={{
          color: "white",
          textAlign: "center",
          background: "rgb(27, 27, 27)",
          padding: "10px 0px"
        }}
      >
        &copy;Copyright <b>ecerasystem</b>. All Rights Reserved
      </p> */}
    </div>
  );
}
