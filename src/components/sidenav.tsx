import Link from "next/link";

export default function Sidenav() {
    return (
        <>
            <ul className="font-bold text-white bg-blue-500 px-6 text-center rounded-br-md">
                <li className="py-4 border-y border-white">
                    <Link href="/tienda/electronica">Electrónica</Link>
                </li>
                <li className="py-4 border-y border-white">
                    <Link href="/tienda/decoracion">Decoración</Link>
                </li>
                <li className="py-4 border-y border-white">
                    <Link href="/tienda/mobiliario">Mobiliario</Link>
                </li>
                <li className="py-4 border-t border-white">
                    <Link href="/tienda/libros">Libros</Link>
                </li>
            </ul>
        </>
    )
}