import { Code, Palette, PencilRuler, } from "lucide-react"
export const AboutSection = () => {
    return <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Passionate Front-End Developer & Graphics Designer</h3>
                    <p className="text-gray-500 dark:text-gray-400">I’m a front-end developer and graphics designer focused on creating responsive, visually driven digital experiences. Whether building interfaces or designing graphics, I aim to produce work that is functional, clean, and impactful.</p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="button">
                            Get In Touch
                        </a>

                        <a href="/cv.pdf" className="button rounded-full bg-[#2E2E3A] text-white hover:bg-[#3A3A47]">
                            Download CV
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6">
                    <div className="p-[2px] rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 card-hover">
                        <div className="gradient-border p-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Front-End Development</h4>
                                    <p className="text-gray-500 dark:text-gray-400">Builds responsive, user-friendly websites using HTML, CSS, and JavaScript.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-[2px] rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500  card-hover">
                        <div className="gradient-border p-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Palette className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Visual Graphics Design</h4>
                                    <p className="text-gray-500 dark:text-gray-400">Creates eye-catching posters, logos, and digital assets through strong design principles.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-[2px] rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 card-hover">
                        <div className="gradient-border p-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <PencilRuler className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">UI/UX Design</h4>
                                    <p className="text-gray-500 dark:text-gray-400">Designs clean, intuitive interfaces and user flows using Figma and modern design practices.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
};