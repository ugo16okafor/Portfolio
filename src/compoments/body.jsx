
function Body(params) {

    return(
        <main className="flex justify-center  mx-10">
            <section className="font-Montserrat grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 grid-rows-2">
                <div className="flex justify-center row-start-1 items-center lg:row-start-1 lg:col-start-2">
                    <div className="  rounded-full w-56 h-56 md:h-96 md:w-96 bg-amber-100 overflow-hidden">
                        <img className="bg-cover bg-center" src="/assets/images/deadpool.png" alt="pfp" />
                    </div>
                </div>
                <div className="row-start-2 lg:row-start-1 flex justify-center lg:justify-start items-center rounded-2xl lg:col-start-1 lg:ml-10">
                    <div className="flex-col text-center lg:text-start leading-loose">
                        <p className=" text-black text-2xl">
                            Hello, i'm <br /><span className="text-3xl md:text-7xl text-red-500 font-bold">Ugochukwu </span><br />(uu-g-OH-ch-uu-k-w-uu)
                        </p>
                        <p><span className="text-red-500 text-2xl md:text-4xl">Frontend developer</span> based in Nigeria. Deploying <span className="text-red-500 text-2xl md:text-4xl">Scalable Responsive websites</span></p>
                    </div>
                </div>
            </section>
            {/* technologies i work with */}
            <section>
                
            </section>
        </main>
    )
    
}

export default Body