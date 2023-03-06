import Image from "next/image"

export function HomeView() {
    return (
        <>
            <section>
                <div className="w-full h-36 overflow-hidden flex justify-center items-center"> {/* use mb-pi / 2 */}
                    <Image
                        src="/home/cover.png"
                        alt="Portada: Imagen de Spider-man"
                        title="Portada: Imagen de Spider-man"
                        width={720}
                        height={474}
                    />
                </div>
                <div className="w-pi h-pi rounded-full overflow-hidden flex justify-center items-center mx-auto">
                    <Image
                        src="/home/profile-image.jpg"
                        alt="Imagen de perfil: Foto frontal sonriendo"
                        title="Imagen de perfil: Foto frontal sonriendo"
                        width={120}
                        height={162}
                    />
                </div>
            </section>
        </>
    )
}