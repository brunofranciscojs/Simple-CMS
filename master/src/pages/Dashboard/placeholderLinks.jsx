import React from "react";

export default function PlaceholderLinks(){
    return (
        <>
          <div className='flex flex-col gap-2 w-full sm:w-1/2'>
            {['1','2','3','4','5'].map(projeto => (

                  <label className='relative w-full' key={projeto}>
                    <legend>carregando...</legend>
                    <input type="text" disabled placeholder="carregando..."/>
                  </label>
                )
              )}
            </div>
        </>
      )
}