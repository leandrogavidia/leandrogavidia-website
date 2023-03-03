import { ReactNode } from "react"

export function BaseLayout({children}: {children: ReactNode}) {
    return (
        <>        
            <main>
                {children}
            </main>
        </>
    )
}