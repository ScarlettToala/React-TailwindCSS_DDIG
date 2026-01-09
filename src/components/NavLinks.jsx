import { Link, useLocation } from "react-router-dom";

const links = [
    { path: "/home", label: "Home" },
    { path: "/sobrenosotros", label: "Sobre nosotros" },
    { path: "/productos", label: "Productos" },
    { path: "/servicios", label: "Servicios" },
];

export default function NavLinks({ onClick, textColor = "text-white",  textColorHover = "text-black" }) {
    const location = useLocation();

    return (
        <>
            {links
                .filter(link => link.path !== location.pathname)
                .map(link => (
                    <Link
                        key={link.path}
                        to={link.path}
                        onClick={onClick}
                        className={`relative ${textColor} ${textColorHover} font-[Open_Sans] text-lg
                                    after:absolute after:left-0 after:bottom-0 after:h-[2px]
                                    after:w-0 after:bg-white after:transition-all
                                    hover:after:w-full transition`}
                    >
                        {link.label}
                    </Link>
                ))}
        </>
    );
}

