import { useState } from "react"
import { GiFullMotorcycleHelmet, GiHamburgerMenu } from "react-icons/gi"
import { MdAccountCircle } from "react-icons/md"
import { FaSearch, FaShoppingCart } from "react-icons/fa"

const Header = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <>
            <nav className="flex lg:hidden justify-between items-center h-[8vh] p-4 bg-tomato">
                <GiFullMotorcycleHelmet />
                <GiHamburgerMenu onClick={() => setShowMenu(!showMenu)} />
                {showMenu && (
                    <div className="h-[92vh] w-full absolute left-0 top-[8vh] bg-tomato text-prussian-blue flex flex-col justify-start items-center pt-14">
                        <div className="flex flex-col justify-between h-1/4 mb-11">
                            <button>Hypersport</button>
                            <button>Naked Sport</button>
                            <button>Cruisers</button>
                        </div>

                        <div className="flex justify-evenly w-1/4">
                            <FaSearch />
                            <FaShoppingCart />
                            <MdAccountCircle />
                        </div>
                    </div>
                )}
            </nav>

            <nav className="hidden lg:flex justify-between items-center h-[8vh] p-4 bg-tomato">
                <div className="flex justify-between w-1/3">
                    <button>
                        <GiFullMotorcycleHelmet />
                    </button>
                    <button>Hypersport</button>
                    <button>Naked Sport</button>
                    <button>Cruisers</button>
                </div>

                <div className="flex justify-evenly w-1/4">
                    <FaSearch />
                    <FaShoppingCart />
                    <MdAccountCircle />
                </div>
            </nav>
        </>
    )
}

export default Header
