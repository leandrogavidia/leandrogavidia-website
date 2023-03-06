import { ReactNode } from "react"

export function BaseLayout({children}: {children: ReactNode}) {
    return (
        <>        
            <main className="w-full max-w-3xl mx-auto">
                {children}
            </main>
        </>
    )
}