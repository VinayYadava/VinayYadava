import Image from "next/image";
import "../../styles/CompanyLogo.css"
const CompanyLogo = () =>  {
    return(
        <div className="company">
            <div className="sparsh company-image">
                <Image className="image"  height={300}  width={175} alt="sparsh cctv" src={"/images/sparsh-logo.png"}></Image>
            </div>
            <div className="synergylabs company-image">
                <Image className="image"  height={300} width={175} alt="synergylabs" src={"/images/synergylabs.png"}></Image>
            </div>
            <div className="bobble company-image">
                <Image className="image"  height={300} width={175} alt="bobble" src={"/images/bobble.png"}></Image>
            </div>
        </div>
    );
}
export default CompanyLogo;