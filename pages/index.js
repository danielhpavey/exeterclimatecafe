import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react';
import Gallery from '../components/gallery';


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

        <p>How is the loss of nature and climate change affecting you? Are you feeling worried, enraged, confused, despairing or motivated to act?</p>

        <p>Share how you are feeling with like minded people in a friendly space. No booking required, just turn up. No cost except whatever drinks etc you would like to buy.</p>


        <img src="/exeter-climate-cafe-exeter-pheonix.jpg" alt="Exeter Climate Cafe at Exeter Pheonix" className="mx-auto md:float-right md:ml-8 md:max-w-[50%] md:mt-0 md:mb-0" />

<p><strong>Every Wednesday morning at <a href="https://exeterphoenix.org.uk/" className="font-semibold">Exeter Phoenix</a></strong> 10.30am - midday</p>

<p>Please check with reception where we will be as sometimes we have a room and sometimes we are in the cafe bar area, usually by the sofas. Please help support the arts centre by purchasing a coffee and/or cake at the cafe bar.</p>

<p><strong>Parent/Carer Climate Circle </strong>
- Wednesday 27th September 2023. 
7.30pm-9pm at The Baby Room on Paris Street, Exeter.</p> 

<p>
Our first (evening) climate circle specifically for parents/guardians. A safe and welcoming space to share your feelings about parenting at this challenging time. There are only 8 places so you do need to book your slot on Eventbrite. Suggested donation of between £2 and £5 for room hire. <a href="https://www.eventbrite.co.uk/e/parentcarer-climate-circle-tickets-715930065097">https://www.eventbrite.co.uk/e/parentcarer-climate-circle-tickets-715930065097</a></p>

<p><strong>Exmouth Climate Cafe</strong> - Sundowners, 15 The Strand, Exmouth, EX8 1AD, 3rd Tuesday of each month 7 - 8.30pm stating 20th June 2023. Contact gerryexmouth@aol.com 07807 371438</p>

<img src="/exeter-climate-cafe-sylvania-community-stores.jpg" alt="Exeter Climate Cafe at Sylvania Community Stores and Cafe" className="mx-auto md:float-left md:mr-8 md:max-w-[50%] md:mt-0 md:mb-0" />

<p><strong>Outreach cafes:</strong></p>

<p>We are now running extra climate cafes all over the city and would love to hear from you if you would like one. We have been to St David&apos;s Church Green Event and Sylvania Community Stores and Cafe. Get in touch today. </p>

<p><strong>Facilitators:</strong></p>

<p>We currently have a pool of facilitators so we can take turns and share the role of having at least two facilitators at every cafe we run. We are trained by the <a href="https://www.climatepsychologyalliance.org/">Climate Psychology Alliance</a> and welcome enquiries from new would-be faciliators. You do not have to have a therapeutic background but some of us do. Get in touch today. </p>
      </main>

      <footer className="flex flex-row justify-between flex-wrap gap-4 px-8 my-4 mb-12">
          <div>
            <a href="https://www.facebook.com/groups/exeterclimatecafe" className="break-all">facebook.com/groups/exeterclimatecafe</a>
          </div>
          <div>
            <a href="mailto:info@exeterclimatecafe.org">info@exeterclimatecafe.org</a>
          </div>
      </footer>
      <Gallery />
    </div>
  )
}
