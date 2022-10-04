import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react';


export default function Home() {

  useEffect(() =>
  {        
      document.body.classList.add("bg-slate-50");
  });
  return (
    <div className="prose prose-xl prose-stone min-h-screen px-8 mx-auto antialiased font-sans font-['Poppins']">
      <Head>
        <title>Exeter Climate Cafe</title>
        <meta name="description" content="Exeter Climate Cafe" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital@0;1&display=swap"
      rel="stylesheet"
    />
      </Head>
      <main className="mt-4">
        <h1 className="text-center">
          Exeter<br/>Climate<br/>Cafe
        </h1>
        <div className='not-prose'>
        <img src="coffee.png" width="100px" height="100px" alt="Exeter Climate Cafe" className='mx-auto' />
        </div>
        

        <p>Climate change continues - and so do we!</p>
        <p>Every Wednesday morning at <a href="https://exeterphoenix.org.uk/">Exeter Phoenix</a> cafe bar.</p>
        <p>How is the loss of nature and climate change affecting you? Are you feeling worried, enraged, confused, despairing or motivated to act?</p>
        <p>Find us on the far side of the cafe near the auditorium from 10.30am - midday. We usually have the sofas and a table. If you are not sure where we are - please ask at the bar.
        </p>
        <p>Share how you are feeling with like minded people in a friendly space. No booking required, just turn up. No cost except whatever drinks etc you would like to buy.</p>
      </main>

      <footer className="flex flex-row justify-between flex-wrap gap-x-4">
          <div>
            <a href="https://www.facebook.com/groups/exeterclimatecafe" className="break-all">facebook.com/groups/exeterclimatecafe</a>
          </div>
          <div>
            <a href="mailto:info@exeterclimatecafe.org">info@exeterclimatecafe.org</a>
          </div>
      </footer>
    </div>
  )
}
