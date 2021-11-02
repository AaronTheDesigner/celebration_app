import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const MainStandard = () => {
    return (
        // Main Landing Section
        <section className="flex flex-col gap-y-5 items-center h-screen justify-center md:flex-row md:gap-x-3">
            <div>
                {/* Text Center */}
                <div className="xs:pr-1 pt-8 px-4 md:px-8 mb:flex-shrink-0 lg:py-24">
                    <span className="inline-block text-xs lg:text-base lg:pb-2">
                        Spread the love...
                    </span>
                    <h1 className="font-bold capitalize text-3xl md:text-4xl lg:text-5xl text-green-900">
                        Celebration App
                    </h1>
                    <p className="text-sm opacity-75 mt-4 mb-8 md:text-base md:w-3/4 lg:text-xl">
                        by Panera Bread 
                    </p>
                    {/* CTA */}
                    <Link href="google.com" className="inline-block uppercase font-medium bg-accent px-4 py-2 text-black shadow-md mb-8">
                        <span className="text-lg opacity-75">
                            Get Started
                        </span>
                    </Link>
                </div>            
            </div>
            {/* Hero Image */}
            <div className="flex flex-col items-center justify-center">
                <h1>LOGO</h1>
            </div>
        </section>
    )
}

export default MainStandard;
