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

        <div class="flex items-center bg-blue-500 text-white font-bold px-4 py-3" role="alert">
  <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z"/></svg>

        <p>Aplogies, but there will be NO CAFE ON 5th MAY AT THE HUB. We&apos;ll be back for the next Hub cafe 2nd June. In the meanwhile you&apos;re welcome to join our weekly Wednesday cafes atthe Pheonix.
</p>
</div>


        <p>Climate change continues - and so do we!</p>

        <p>How is the loss of nature and climate change affecting you? Are you feeling worried, enraged, confused, despairing or motivated to act?</p>

        <p>Share how you are feeling with like minded people in a friendly space. No booking required, just turn up. No cost except whatever drinks etc you would like to buy.</p>


        <img src="/exeter-climate-cafe-exeter-pheonix.jpg" alt="Exeter Climate Cafe at Exeter Pheonix" className="mx-auto md:float-right md:ml-8 md:max-w-[50%] md:mt-0 md:mb-0" />

<p>Every Wednesday morning at <a href="https://exeterphoenix.org.uk/">Exeter Phoenix</a> 10.30am - midday</p>

<p>We used to meet in the bar but we are now upstairs in the meeting room - which is the first room on the left at the top of the main stairs, ask at reception as you come in. Please help support the arts centre by purchasing a coffee and/or cake at the cafe bar - you&apos;re welcome to bring these up to the room. </p>

<p>And now we have a second Climate Cafe running on the first Friday of every month from 10:30am to 12 midday. This is at the new <a href="https://climateactionhubexeter.net/">Exeter Climate Action Hub</a>, 40 Bedford Square, Princesshay, EX1 1GJ. This is the old Crew clothing shop at the back of Debenhams, next door to Neals Yard Remedies</p>

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
