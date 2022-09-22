import Ilustrator from "../../assets/illustration.svg"
import Card1 from "../../assets/Card1.svg"
import Card2 from "../../assets/Card2.svg"
import "./index.css"

export const Ilustration = () => {
    return (
        <section className="illustration">
            <img id="image1" src={Ilustrator} alt="" />
            <img id="image2" src={Card1} alt="" />
            <img id="image3" src={Card2} alt="" />            
        </section>
    )
}