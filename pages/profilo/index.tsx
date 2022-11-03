import {ReactElement, ReactNode} from "react";
import {NextPage, NextPageContext} from "next";
import {AppProps} from "next/app";
import {HeaderLayout} from "../../app/Layout";
import colors from "tailwindcss/colors";

export default function Profilo({Component, pageProps}: AppPropsWithLayout) {
    return (
        <>
            <HeaderLayout title={'Gaetano Sabino'}/>
            <main className="bg-amber-700 h-screen p-3">
                <h1 className="text-6xl font-bold uppercase text-center border">
                    Hello Word
                </h1>
                <blockquote className="border p-2 mt-3.5 rounded-md">
                    <article className="text-white uppercase">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Esse iste minima molestiae nemo
                        optio possimus tempora velit voluptas! Cupiditate ducimus, in incidunt iusto minima molestiae
                        molestias obcaecati optio repellat veritatis.
                    </article>
                </blockquote>
                <blockquote className="grid grid-cols-6 gap-4 mt-3.5">
                    <div className="col-start-2 col-span-4 border">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur cupiditate
                        doloribus ducimus facilis hic id illo ipsum libero magnam, maiores maxime molestias numquam odio
                        perferendis repellat repellendus suscipit velit.
                    </div>
                    <div className="col-start-1 col-end-3 border">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur cupiditate
                        doloribus ducimus facilis hic id illo ipsum libero magnam, maiores maxime molestias numquam odio
                        perferendis repellat repellendus suscipit velit.
                    </div>
                </blockquote>
            </main>

        </>
    )
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode;
}

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

const Page: NextPageWithLayout = (testo) => {
    return <h1>Prima cosa dobbiamo provare</h1>
}
