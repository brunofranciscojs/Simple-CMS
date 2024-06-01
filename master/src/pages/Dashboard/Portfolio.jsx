import React, {useState, useEffect} from "react";
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import EditButton from '../../editButton';
import Upload from '../../uploadImage'
import PlaceholderPortfolio from "./placeholderPort";

export default function Portfolio({ content:{projects, linqs, sites, setSites, setLinqs, setCarregando, carregando, setProjects} }){
    
    if(carregando){
        return <PlaceholderPortfolio/>
    }

    return(
        <>
            <div id="portfolio" className='w-full max-w-[1366px]'>
                <div className='flex justify-between'>
                    <h2>PROJETOS DA HOME</h2> 
                </div> <br />

                <div className='flex flex-col gap-4 flex-wrap sites'>
                    {projects.sites && 
                        Object.entries(projects.sites).map(([projeto, [link, tech]]) => (
                        
                        <div className={`fst flex flex-row ${projeto} justify-evenly`} key={projeto} onMouseEnter={() => { localStorage.setItem('site', `${projeto}`) }}>

                            <div className='w-full flex flex-row items-center flex-wrap sm:flex-nowrap'>
                            <label className='w-full sm:w-1/3'>
                                <input type='text' disabled placeholder={projeto}  
                                                    onChange={(e) =>{ setSites(e.target.value) }}
                                                    onBlur={async () =>{
                                                    const hotSites = { ...projects.sites };
                                                    hotSites[sites] = [link, tech]
                                                    await updateDoc(doc(db, "bruno", "PkK4lheAJ0LyHhsCJuWx"), { sites:hotSites })}}/>
                                <EditButton />
                            </label>

                                <label className='w-full '>
                                <input type='url' disabled placeholder={link} 
                                            onChange={(e) => { setLinqs(e.target.value) }}
                                            onBlur={async () => {
                                            const hotLinks = { ...projects.sites };
                                            hotLinks[projeto] = [linqs, tech];
                                            await updateDoc(doc(db, "bruno", "PkK4lheAJ0LyHhsCJuWx"), { sites: hotLinks })}}/>
                                <EditButton />
                                </label>
                            </div>

                            <div className={`${projeto} uploadContainer`}>
                                <img src={`https://firebasestorage.googleapis.com/v0/b/porfolio-d7832.appspot.com/o/${projeto}.webp?alt=media`} 
                                    className='rounded-lg cl:h-10 h-[92px] w-48 object-cover border-2 border-gray-600 cursor-pointer' loading='lazy' />
                                
                            <Upload />
                            </div>
                        </div>
                    ))}
                {sites}
            </div>
        </div>
      </>
    )
}