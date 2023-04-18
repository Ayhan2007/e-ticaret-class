////burada kişi login yaptığında header kısmında ismini, myorders kısmını ve logout linkini gösterecek çıktığında tekrar eski haline getirecek login ve logout componentleri oluşturulacak
import {useSelector} from "react-redux";
import { slectIsLoggedIn } from "../../redux/slice/authSlice";

export const ShowOnLogin = ({children}) => {
    const isLoggedIn = useSelector(slectIsLoggedIn)

    if(isLoggedIn) {
        return children
    }
    return null
}

export const ShowOnLogout =({children}) => {
    const isLoggedIn = useSelector(slectIsLoggedIn)

    if(!isLoggedIn) {
        return children
    }
    return null
}