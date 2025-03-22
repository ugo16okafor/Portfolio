
function Body(params) {

    return(
        <main className="flex h-screen justify-center mx-10">
            <section className="font-Montserrat grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 grid-rows-2">
                <div className="flex justify-center row-start-1 items-center lg:row-start-1 lg:col-start-2">
                    <div className="  rounded-full w-56 h-56 md:h-96 md:w-96 bg-amber-100 overflow-hidden">
                        <img className="bg-cover bg-center" src="/assets/images/deadpool.png" alt="pfp" />
                    </div>
                </div>
                <div className="row-start-2 lg:row-start-1 flex justify-center lg:justify-start items-center rounded-2xl lg:col-start-1 lg:ml-10">
                    <div className="flex-col text-center lg:text-start text-balance">
                        <p className="text-4xl md:text-7xl text-blue-600  font-bold">
                            Ugochukwu Okafor <br /><span className="text-2xl text-white" >(uu-g-OH-ch-uu-k-w-uu Oak-af-or)</span>
                        </p>
                        <p className="text-white text-2xl"><span className="text-blue-600  text-2xl md:text-4xl">Frontend developer</span> based in Nigeria. Creating <span className="text-blue-600  text-2xl md:text-4xl">scalable responsive websites</span></p>
                    </div>
                </div>
            </section>
            {/* technologies i work with */}
        </main>
    )
    
}

export default Body