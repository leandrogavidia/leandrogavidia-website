import Image from "next/image"
import Link from "next/link"

export function HomeView() {
    return (
        <>
            <section>
                <div className="w-full h-36 overflow-hidden flex justify-center items-center mb-[-45px]">
                    <Image
                        src="/home/cover.png"
                        alt="Portada: Imagen de Spider-man"
                        title="Portada: Imagen de Spider-man"
                        width={720}
                        height={474}
                    />
                </div>
                <div>
                    <div className="w-pi h-pi rounded-full overflow-hidden flex justify-center items-center mx-auto -mb-5">
                        <Image
                            src="/home/profile-image.jpg"
                            alt="Imagen de perfil: Foto frontal sonriendo"
                            title="Imagen de perfil: Foto frontal sonriendo"
                            width={120}
                            height={162}
                        />
                    </div>
                    <div className="w-2/4 bg-gradient h-5 rounded-full">
                        <address className="h-full text-[8px] font-bold flex items-center">
                            <Link href="mailto:hola@leandrogavidia.com">hola@leandrogavidia.com</Link>
                        </address>
                    </div>
                </div>
            </section>
        </>
    )
}