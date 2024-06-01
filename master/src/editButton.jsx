import React, {useState} from 'react';

export default function EditButton({className}){
    const [clicou, setClicou] = useState(false)

    const enable = (e) => {
        if(!clicou){
            e.target.previousSibling.removeAttribute('disabled')
            e.target.previousSibling.focus()
            setClicou(true)
        }
        e.target.previousSibling.addEventListener('blur',function(){
            e.target.previousSibling.classList.add('blink')
            setTimeout(() => {e.target.previousSibling.classList.remove('blink')},200)
            e.target.previousSibling.setAttribute('disabled', '')
            setClicou(false)
        })
    }

    return <button onClick={(e) =>{enable(e)}} className={`${className} editar`}>✎</button>
    
}