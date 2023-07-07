'use client'

// Imports
import Image from "next/image"
import ImageTag from "@/components/imageTag"
import PageFrame from "@/components/pageFrame"

// Projects page
export default function Projects() {
    // Return projects page
    return (
        <PageFrame>
            <div className="overflow-hidden">
                <h1 className="text-4xl font-bold p-4 float-left">Projects</h1>
                <a className="float-right m-4 hover:text-gray-600 transition-all duration-100" href="https://github.com/tomvdbroecke" target="_blank">Github</a>
            </div>
            <div className="text-lg px-4">
                <p className="mb-2">Here are some projects I&apos;ve completed over the past couple of years.</p>
            </div>
            <div className="p-4">
                <a href="https://omdc.com" target="_blank">
                    <h2 className="text-2xl mb-2 font-bold">Oasis Master Data Cloud</h2>
                    <div className="sm:flex block">
                        <Image className="rounded-lg self-baseline lg:w-80 md:w-80 sm:w-52 w-full" src="/images/omdc_dashboard.jpg" width={320} height={180} alt="omdc dashboard image"/>
                        <p className="text-lg sm:ml-4 mt-2 sm:mt-0">A masterdata management application. Create your own data structures to stay in control of your master data. Integration with other software is made available through the API, you get to choose what data goes where. The backend is built on NodeJs with Express and the frontend React with NextJs. All of the data is stored in MongoDB using Atlas. With a reverse proxy it is hosted on a Render web service. Logs are centralized in LogTail and uptime is checked by Better Stack.</p>
                    </div>
                </a>
                <div className="flex flex-wrap items-center justify-left pt-1">
                    <ImageTag name="Express JS" link="https://expressjs.com/" />
                    <ImageTag name="Mongo DB" link="https://mongodb.com/" />
                    <ImageTag name="Next JS" link="https://nextjs.org/" />
                    <ImageTag name="Tailwind" link="https://tailwindcss.com/" />
                    <ImageTag name="Render" link="https://render.com/" />
                    <ImageTag name="Better Stack" link="https://betterstack.com/" />
                </div>
            </div>
            <div className="p-4">
                <a href="https://anylox.com" target="_blank">
                    <h2 className="text-2xl mb-2 font-bold">Anylox</h2>
                    <div className="sm:flex block">
                        <Image className="rounded-lg self-baseline lg:w-80 md:w-80 sm:w-52 w-full" src="/images/anylox_dashboard.jpg" width={320} height={180} alt="anylox dashboard image"/>
                        <p className="text-lg sm:ml-4 mt-2 sm:mt-0">An anilox roller management and analytics application. Create critical insights and reports regarding the health of your anilox rollers. The backend is written in PHP and the frontend in basic HTML and CSS using Bootstrap, with a little bit of jQuery. The framework to tie this all together is Laravel. The database is a MySQL cluster. The web servers are hosted on DigitalOcean Kubernetes and the API server on a Droplet. Logging is centralized with Datadog.</p>
                    </div>
                </a>
                <div className="flex flex-wrap items-center justify-left pt-1">
                    <ImageTag name="Laravel" link="https://laravel.com/" />
                    <ImageTag name="Bootstrap" link="https://getbootstrap.com/" />
                    <ImageTag name="JQuery" link="https://jquery.com/" />
                    <ImageTag name="DigitalOcean" link="https://digitalocean.com" />
                    <ImageTag name="Datadog" link="https://datadoghq.com" />
                </div>
            </div>
        </PageFrame>
    )
}
