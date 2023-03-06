import { Col } from "reactstrap";
import Partner from "./Partner";
import { selectAllPartners } from "./partnersSlice";
import { useSelector } from "react-redux";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
const PartnersList = () => {
    const partners = useSelector(selectAllPartners)
    const isLoading = useSelector((state) => state.partners.isLoading)
    const errMsg = useSelector((state) => state.partners.errMsg)

    return isLoading ?(
        <Loading/>
    ): errMsg ?(
        <Error errMsg={errMsg}/>
    ) : (
        <Col>
            {partners.map((partner)=>{
                return(
                    <div className="d-flex mb-5" key={partner.id}>
                        <Partner partner={partner}/>
                    </div>
                )
            })}
        </Col>
    )
}

export default PartnersList