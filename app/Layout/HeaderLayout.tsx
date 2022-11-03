import Head from "next/head";

export function HeaderLayout({title}:{title:string}){
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Author: G. Sabino, Profilo progetti ed altro..." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </>
    )
}