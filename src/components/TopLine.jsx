import Marquee from "react-fast-marquee";

const MarqueeComp=()=>{
    return (<div className="p-3 bg-light text-dark ">
        <Marquee behavior='scroll'
    speed={100} delay={0}
    direction='left'
    >Let's leave a better planet for the coming generations!</Marquee>
    </div>)
}
export default MarqueeComp;