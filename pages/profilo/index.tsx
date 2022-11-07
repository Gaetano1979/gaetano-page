import {ReactElement, ReactNode, useContext, useEffect, useMemo, useState} from "react";
import {NextPage, NextPageContext} from "next";
import {AppProps} from "next/app";
import {HeaderLayout} from "../../app/Layout";
import colors from "tailwindcss/colors";
import {TestContext} from "../_app";

export default function Profilo({Component, pageProps}: AppPropsWithLayout) {
    const [value, setValue] = useState('gaetano');

    useEffect(() => {
        // document.title = `Proviamo a vedere che cosa succede ${value}`;
        console.log('proviamo questa e la prima volta che viene chiamato');
    });
    //
    //
    // useEffect(() => {
    //     // const sub = pageProps.source.subscribe();
    //     console.log(value,pageProps, Component);
    //     // return () => sub.unsubscribe();
    //
    // },[value])
    // const changeName = () => {
    //     if (value === 'gaetano') {
    //         setValue('giovanna')
    //     }else{
    //         setValue( 'gaetano');
    //     }
    // }

    const useContext1 = useContext(TestContext);
    return (
        <>
            <HeaderLayout title={'Gaetano Sabino'}/>
            <main className="bg-amber-700 h-screen p-3">
                <h1 className="text-6xl font-bold uppercase text-center border">
                    {/*{value}*/}
                    {value}
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
