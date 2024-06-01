import Compressor from 'compressorjs';
import { ref, uploadBytesResumable } from "firebase/storage";
import React, { useState } from 'react';
import { storage } from "./firebaseConfig";
import './index.css';

export default function Upload() {
    const [percent, setPercent] = useState(0);
    const upIcon = './src/assets/cloud.png'
    const [compressedFile, setCompressedFile] = useState(null);

    function handleChange(event) {
        const image = event.target.files[0];
        event.target.classList.add('upload')
        document.querySelector('.upload').nextElementSibling.classList.remove('opacity-0');
        document.querySelector('.upload').nextElementSibling.classList.add('cursor-pointer');
    
        new Compressor(image, {
            quality: 0.5,
            mimeType: "image/webp",
            resize: "contain",
            width:'720',
            success: (compressedResult) => {
                setCompressedFile(compressedResult)
            },
        });
    };
    const handleUpload = () => {
        if (!compressedFile) { 
            alert('erro');
            return;
        }
        document.querySelector('.upload').nextElementSibling.classList.add('opacity-0', 'absolute', '-z-10');
        document.querySelector('.upload').nextElementSibling.nextElementSibling.classList.remove('opacity-0');

        const storageRef = ref(storage, `/${localStorage.getItem('site') }.webp`);
        const uploadTask = uploadBytesResumable(storageRef, compressedFile);

        uploadTask.on("state_changed",
            (snapshot) => {
                const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                      setPercent(percent); 
                      console.log(percent);
            })
    };

    return (
        <div className="absolute top-0 left-0 flex flex-row items-center w-[180px]">
            <input type="file" onChange={handleChange} accept="/image/*" className="up"/>
            <a onClick={handleUpload} id="up" className="block opacity-0 w-10 h-[50px] relative -top-1">
                <img src={upIcon} width={30} />
            </a>
            <span className="opacity-0 relative -left-5">{`${percent}%`}</span>
        </div>
    );
}
