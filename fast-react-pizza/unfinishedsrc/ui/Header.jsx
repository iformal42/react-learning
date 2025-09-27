import { Link } from "react-router-dom";
import SearchOrder from "../feature/order/SearchOrder";
import User from "./User";

function Header() {
    return (
        <header className=" flex items-center justify-between bg-yellow-500 px-4 py-4 uppercase border-b-8 border-stone-200 sm:px-6">
            <Link to="/"  className="tracking-widest  ">
                Fast Rect Pizza com

            </Link>
            <SearchOrder/>
            <User/>

        </header>
    );
}

export default Header;