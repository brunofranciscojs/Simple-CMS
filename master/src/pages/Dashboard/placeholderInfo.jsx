import React from "react";

export default function PlaceholderInformations(){
    return (
      <div className="flex w-full gap-5 flex-col xl:flex-row">
      <div className="xl:w-1/2 w-full">
        <h2>INFORMAÇÕES </h2> <br />
          <div className="flex flex-col gap-4 " id="information">

            <div className="flex">
              <label className="w-1/2">
                <legend >NOME</legend>
                <input type="text"disabled placeholder={'carregando...'}/>
                  </label>
    
              <label className="w-1/2">
                <legend>POSITION</legend>
                <input type="text" placeholder={'carregando...'} disabled />
              </label>
            </div>
  
            <div className='flex flex-row flex-wrap sm:flex-nowrap gap-3 sm:gap-0 relative'>
                <legend>DESCRIÇÃO</legend>
                <div>carregando...</div>

            </div>
      </div>
      </div>


      <div className="xl:w-1/2 w-full">
        <h2>TRADUÇÃO PARA INGLÊS</h2> <br />
          <div className="flex flex-col gap-4" id="information">
            <div className="flex">
              <label className="w-1/2">
                <legend >NOME</legend>
                <input type="text" placeholder={'carregando...'}/>
              </label>
    
              <label className="w-1/2">
                <legend>POSITION</legend>
                <input type="text" placeholder={'carregando...'} disabled />
              </label>
            </div>
  
            <div className='flex flex-row flex-wrap sm:flex-nowrap gap-3 sm:gap-0 relative'>
              <legend>DESCRIÇÃO</legend>

                <div>carregando...</div>

            </div>
        </div>
      </div>
    </div>
      )
}