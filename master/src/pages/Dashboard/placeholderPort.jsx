import React from "react";

export default function PlaceholderPortfolio(){
    return (
        <>
            <div id="portfolio" className='py-10 w-[98%]'>
              <div className='flex justify-between'><h2>HOME PROJECTS</h2> </div> <br />
              <div className='flex flex-col gap-4 flex-wrap sites'>
    
                {['1','2','3','4','5','we','qw','wqe','qwe'].map(projeto => (
                    <div className={`fst flex flex-row ${projeto} justify-evenly`} key={projeto}>
    
                        <div className='w-full flex flex-row items-center flex-wrap sm:flex-nowrap'>
                            <label className='w-full sm:w-1/3'>
                                <input type='text' disabled placeholder="carregando..." />
                            </label>
    
                            <label className='w-full '>
                                <input type='url' disabled placeholder="carregando..." />
                            </label>
                        </div>
    
                        <div className={`${projeto} uploadContainer`}>
                            <img src={`./src/assets/loading.gif`} className='rounded-lg h-10 w-48 object-cover border-2 border-gray-600 cursor-pointe' />
                        </div>
                    </div>
                  ))}
              </div>
            </div>
        </>
      )
}