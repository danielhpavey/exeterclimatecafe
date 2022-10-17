import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react';


export default function Home() {

  useEffect(() =>
  {        
      document.body.classList.add("bg-slate-50");
  });
  return (
    <div className="prose prose-xl prose-stone min-h-screen mx-auto antialiased font-sans font-['Poppins']">
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
      <img src="/exeter-climate-cafe.png" alt="Exeter Climate Cafe" />
      <main className="mt-4 px-8">
        <h1 className="text-center absolute top-0 -z-50">
          Exeter<br/>Climate<br/>Cafe
        </h1>
        <div className='not-prose text-center'>
        </div>
        <p>Climate change continues - and so do we!</p>

<p>Every Wednesday morning at <a href="https://exeterphoenix.org.uk/">Exeter Phoenix</a> 10.30am - midday</p>

<p>How is the loss of nature and climate change affecting you? Are you feeling worried, enraged, confused, despairing or motivated to act?</p>

<p>We used to meet in the bar but we are now upstairs in the board room - ask at reception as you come in. Please help support the arts centre by purchasing a coffee and/or cake at the cafe bar - you're welcome to bring these up to the room. </p>

<p>Share how you are feeling with like minded people in a friendly space. No booking required, just turn up. No cost except whatever drinks etc you would like to buy.</p>

<p><strong>Outreach cafes:</strong></p>

<p>We are now running extra climate cafes all over the city and would love to hear from you if you would like one. We have been to St David's Church Green Event and we are at Sylvania Community Stores and Cafe on Thursday 20th October 2022 between 10am and midday. We hope to be in the new Climate Action Hub soon too. Get in touch today. </p>

<p><strong>Facilitators:</strong></p>

<p>We currently have a pool of 11 facilitators so we can take turns and share the role of having at least two facilitators at every cafe we run. We are trained by the Climate Psychology alliance and welcome enquiries from new would-be faciliators. You do not have to have a therapeutic background but some of us do. Get in touch today. </p>
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
