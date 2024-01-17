import "./slider.css"
import Carousel from "react-multi-carousel";
import { slider } from "../../data";
import "react-multi-carousel/lib/styles.css";



const Slider  = ()=>{

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      }




return <>
<Carousel responsive={responsive}
showDots={true}
swipeable={true}
infinite={true}
autoPlay={true}
autoPlaySpeed={2000}
transitionDuration={500}
>
 {slider.map((key,id)=>{
//console.log("../../")

return  <div className="sliderContainer" style={{backgroundImage:`url(${key}`}} > </div>
 })}
 
</Carousel>;
</>
}



export default Slider