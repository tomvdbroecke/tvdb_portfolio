// Imports
import ImageTag from "@/components/imageTag"
import PageFrame from "@/components/pageFrame"

// Set meta description for page
export const metadata = {
    description: "Hi there! I'm Tom van den Broecke, a software developer based in the Netherlands. My expertise lies in full stack web development, where I thrive in creating seamless user experiences and robust server infrastructures.",
}

// About page
export default function About() {
    // Return about page
    return (
        <PageFrame>
            <h1 className="text-4xl font-bold p-4">About</h1>
            <div className="text-lg px-4">
                <p className="mb-2">Hi there! I&apos;m Tom van den Broecke, a software developer based in the Netherlands. My expertise lies in full stack web development, where I thrive in creating seamless user experiences and robust server infrastructures.</p>
                <p className="mb-2">As a full stack developer, I excel at building both the backend and frontend of an application, while also ensuring the smooth operation of server architectures. From handling devops and establishing pipelines, to monitoring logging, uptime checks, and load balancing – I ensure every aspect of an application is dialed in.</p>
                <p className="mb-2">Driven by a curiosity for emerging technologies, I am constantly expanding my knowledge and seeking innovative solutions to complex problems. I love the challenge of pushing myself to explore different approaches and finding the best possible solution.</p>
                <p className="mb-2">Feel free to explore my portfolio and get in touch for exciting collaborations or discussions about all things software development!</p>
            </div>
            <h2 className="text-2xl font-bold p-4 pb-2">My favorite technologies</h2>
            <div className="flex flex-wrap items-center justify-left p-4 pt-0">
                <ImageTag name="Next JS" image="/icons/next-js.svg" link="https://nextjs.org/" />
                <ImageTag name="Tailwind" image="/icons/tailwind.svg" link="https://tailwindcss.com/" />
                <ImageTag name="Express JS" image="/icons/express-js.png" link="https://expressjs.com/" />
                <ImageTag name="Mongo DB" image="/icons/mongodb.svg" link="https://mongodb.com/" />
                <ImageTag name="Better Stack" image="/icons/betterstack.svg" link="https://betterstack.com/" />
                <ImageTag name="Render" image="/icons/render.png" link="https://render.com/" />
                <ImageTag name="Github" image="/icons/github.png" link="https://github.com/" />
            </div>
        </PageFrame>
    )
}
