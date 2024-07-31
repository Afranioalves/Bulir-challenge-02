import Head from "next/head"

const Metadata = ({title}:{title:string}) =>{

  
    return(
        <Head>
        <title>{title}</title>
        <meta name="description" content="plataforma para contratar serviços" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
    )
}

export default Metadata