import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <nav className="bg-blue-600">
                <ul className="flex justify-between items-center h-20 px-10">
                    <div className="flex gap-4">
                        <li className="border-r h-20 content-center pr-10">
                            <Link href="/" className="text-xl font-bold text-white">Inicio</Link>
                        </li>
                        <li className="border-r h-20 content-center px-10">
                            <Link href="/tienda" className="text-xl font-bold text-white">Tienda</Link>
                        </li>
                        <li className="border-r h-20 content-center px-10">
                            <Link href="/blog" className="text-xl font-bold text-white">Blog</Link>
                        </li>
                    </div>
                    <div className="flex gap-4">
                        <li className="border-r border-l h-20 content-center px-10">
                            <Link href="/acerca" className="text-xl font-bold text-white">Acerca de</Link>
                        </li>
                        <li className="h-20 content-center pl-10">
                            <Link href="/registro" className="text-xl font-bold text-white">Registrar</Link>
                        </li>
                    </div>
                </ul>
            </nav>
        </>
    );
}