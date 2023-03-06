import Link from "next/link"
import Image from "next/image"

export function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            <Image
                                src=""
                                alt=""
                                title=""
                                width={0}
                                height={0}
                            />
                            <p>...</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}