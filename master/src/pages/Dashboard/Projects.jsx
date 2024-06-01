import React, { useEffect, useState } from 'react';

export default function Projects() {
    const items = [];
    const [pessoal, setPessoal] = useState([]);
    
    useEffect(() => {
        fetch('https://api.github.com/users/brunofranciscu/repos')
            .then(response => { return response.json() })
            .then(json => {
                setPessoal(json)
            })
    }, [])
    
    const dataRepo = (value) =>{
        const repoDate = new Date(value);
        return `${repoDate.getMonth() < 10 ? `0${repoDate.getMonth()+1}` : repoDate.getMonth()+1}/${repoDate.getUTCFullYear()}`
    }

    pessoal.forEach((repo) => {
        items.push(
            <div className="flex flex-col transition relative duration-200 personal basis-[47%] max-w-[1366px]" key={repo.id}>
                <div className={`text-gray-900`}>
                    <div className='flex justify-between'>
                        <span onClick={() => window.open(repo.html_url)}>{repo.name}</span> 
                    </div>
                    <p>{repo.description}</p>
                </div>
            </div>
        )
    });

    return (
        <div className="flex flex-col px-4 repos relative w-full github" key='personal'>
            {items.reverse()}
        </div>
    )
}