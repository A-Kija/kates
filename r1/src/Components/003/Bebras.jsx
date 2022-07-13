import RedCircle from "./RedCircle";
import rand from "../../Functions/rand";

function Bebras() {

    return (
    <>
    <h2>Hello { rand(10, 20) }, Bebrai!</h2>
    <RedCircle></RedCircle>
    </>
    );
}

export default Bebras;