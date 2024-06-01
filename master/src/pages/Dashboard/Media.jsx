import React, {useState, useEffect} from "react";
import EditButton from '../../editButton';
import { db } from '../../firebaseConfig';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import PlaceholderLinks from './placeholderLinks'

export default function Links({ content: {dados, carregando, setCarregando} }){
    const [svgs, setSvgs] = useState({})
    const [urls, setUrls] = useState({})

    if(carregando) {
        return <PlaceholderLinks/>
    }
    useEffect(() => {
        const Urls = {}, Svgs = {}
        Object.entries(dados.links[0]).forEach(([plataforma, [link, svg]]) => {
            Urls[plataforma] = link, Svgs[plataforma] = svg
        })
        setUrls(Urls), setSvgs(Svgs)
        
    }, [dados.links])

    const salvar = async (plataforma) => {
        const linksAtualizados = [{ ...dados.links[0], [plataforma]: [urls[plataforma], svgs[plataforma]] }];
        await updateDoc(doc(db, "sample", "5sOoDCNK2CDnLfT9J2Ml"), { links: linksAtualizados });
    }
    const atualizarURL = (e, plataforma) =>{
        setUrls({...urls, [plataforma]:e.target.value})
    }
    const atualizarSVG = (e, plataforma) =>{
        setSvgs({ ...svgs, [plataforma]: e.target.value})
    }
    return(
        <div className='flex flex-col gap-12 w-full max-w-[1366px] cl:pl-8 pl-1'>

        {dados.links && 
            Object.entries(dados.links[0]).map(([plataforma, [link, svg]]) => (
                
                <label className='relative' key={plataforma}>

                <div className="relative flex items-center">

                    <div className="w-16 [&:has(svg)_path]:fill-gray-600 block [scale:1.5] translate-x-2.5" dangerouslySetInnerHTML={{__html:svg}}></div>

                   <div className="w-full">
                        <legend>{plataforma}</legend>

                        <input type="text" className="border border-gray-400 w-[89%] px-5 py-2 rounded-lg" disabled placeholder={link} onChange={(e) => atualizarURL(e,plataforma)} onBlur={() => salvar(plataforma) }/>
                        <EditButton className={'-translate-x-8 bg-[rgb(243_244_246)] pl-2'}/>
    
                        <input type="text" className="border border-gray-400 w-[89%] px-5 py-2 rounded-lg" disabled placeholder={svg} onChange={(e) => atualizarSVG(e,plataforma)} onBlur={() => salvar(plataforma) }/>
                        <EditButton className={'-translate-x-8 bg-[rgb(243_244_246)] pl-2'}/>
                   </div>
                
                
                    
                </div>

            </label>
            ))
        }
        </div>
)
}