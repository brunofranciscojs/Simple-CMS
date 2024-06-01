import React, { useState } from 'react';
import EditButton from '../../editButton';
import { db } from '../../firebaseConfig';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import PlaceholferInformations from './placeholderInfo'
import { Editor,EditorProvider,BtnBold,BtnClearFormatting,BtnLink,BtnRedo,BtnStyles,BtnUnderline,BtnUndo,HtmlButton,Separator,Toolbar } from 'react-simple-wysiwyg'

export default function Information({ content:{ setCarregando, carregando, dados, data, setDados, setData } }){
    const [nome, setNome] = useState([])
    const [cargo, setCargo] = useState([])
    const [descricao, setDescricao] = useState([])
    const [name, setName] = useState([])
    const [title, setTitle] = useState([])
    const [bio, setBio] = useState([])
    
    const editarNome = async () => {
        const sample = doc(db, "sample", "5sOoDCNK2CDnLfT9J2Ml");
        await updateDoc(sample, { name: nome })
    }
    const editarCargo = async () => {
      const sample = doc(db, "sample", "5sOoDCNK2CDnLfT9J2Ml");
      await updateDoc(sample, { title: cargo })
    }
    const editarDescricao = async (e) => {
      setDescricao(e.target.value)
      const sample = doc(db, "sample", "5sOoDCNK2CDnLfT9J2Ml");
      await updateDoc(sample, { bio: descricao })
    }

    const editName = async () => {
      const sample2 = doc(db, "sample2", "nzlxfrZXJJTKc0mV3f2f");
      await updateDoc(sample2, { name: name })
    }
    const editPosition = async () => {
      const sample2 = doc(db, "sample2", "nzlxfrZXJJTKc0mV3f2f");
      await updateDoc(sample2, { title: title })
    }
    const editBio = async (e) => {
      setBio(e.target.value)
      const sample2 = doc(db, "sample2", "nzlxfrZXJJTKc0mV3f2f");
      await updateDoc(sample2, { bio: bio })
    }

    if(carregando){
      return <PlaceholferInformations/>
    }

    return(
        <div className="flex w-full gap-5 flex-col xl:flex-row">
          <div className="xl:w-1/2 w-full">
            <h2>INFORMAÇÕES </h2> <br />
              <div className="flex flex-col gap-4 " id="information">
  
                <div className="flex">
                  <label className="w-1/2">
                    <legend >NOME</legend>
                    <input type="text"
                            disabled
                            onChange={(e) => { setNome(e.target.value) }}
                            onBlur={(e) => { e.target.value !== '' ? editarNome() : setNome(dados.name); e.target.placeholder = nome}} 
                            placeholder={dados.name}/>
                      <EditButton />
                  </label>
        
                  <label className="w-1/2">
                    <legend>POSITION</legend>
                    <input type="text" placeholder={dados.title}
                      disabled
                      onChange={(e) => { setCargo(e.target.value) }}
                      onBlur={(e) => { e.target.value !== '' ? editarCargo() : setCargo(dados.title); e.target.placeholder = cargo }} />
                    <EditButton />
                  </label>
                </div>
      
                <div className='flex flex-row flex-wrap sm:flex-nowrap gap-3 sm:gap-0 relative'>
                    <legend>DESCRIÇÃO</legend>
                    <EditorProvider>
                      <Editor value={descricao == '' ? dados.bio : descricao} onChange={editarDescricao}>
                        <Toolbar>
                          <BtnUndo />
                          <BtnRedo />
                          <Separator />
                          <BtnBold />
                          <BtnUnderline />
                          <Separator />
                          <BtnLink />
                          <BtnClearFormatting />
                          <HtmlButton />
                          <Separator />
                          <BtnStyles />
                        </Toolbar>
                      </Editor>
                    </EditorProvider>
                </div>
          </div>
          </div>


          <div className="xl:w-1/2 w-full">
            <h2>TRADUÇÃO PARA INGLÊS</h2> <br />
              <div className="flex flex-col gap-4" id="information">
                <div className="flex">
                  <label className="w-1/2">
                    <legend >NOME</legend>
                    <input type="text"
                            disabled
                            onChange={(e) => { setName(e.target.value) }}
                            onBlur={(e) => { e.target.value !== '' ? editName() : setName(data.name); e.target.placeholder = name}} 
                            placeholder={data.name}/>
                      <EditButton />
                  </label>
        
                  <label className="w-1/2">
                    <legend>POSITION</legend>
                    <input type="text" placeholder={data.title}
                      disabled
                      onChange={(e) => { setTitle(e.target.value) }}
                      onBlur={(e) => { e.target.value !== '' ? editPosition() : setTitle(data.title); e.target.placeholder = title }} />
                    <EditButton />
                  </label>
                </div>
      
                <div className='flex flex-row flex-wrap sm:flex-nowrap gap-3 sm:gap-0 relative'>
                  <legend>DESCRIÇÃO</legend>

                    <EditorProvider>
                      <Editor value={bio == '' ? data.bio : bio} onChange={editBio} >
                        <Toolbar>
                          <BtnUndo />
                          <BtnRedo />
                          <Separator />
                          <BtnBold />
                          <BtnUnderline />
                          <Separator />
                          <BtnLink />
                          <BtnClearFormatting />
                          <HtmlButton />
                          <Separator />
                          <BtnStyles />
                        </Toolbar>
                      </Editor>
                    </EditorProvider>

                </div>
            </div>
          </div>
        </div>
    )
}