import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Sobre',
    description: 'Página de sobre do site.',
    keywords: 'sobre, site, informações',
}

export default function SobrePage() {
    return <main>
        <h2>Sobre</h2>
    </main>
}