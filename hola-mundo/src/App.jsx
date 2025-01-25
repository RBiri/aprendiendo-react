import { use } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'BiriSenpai',
        name: 'Biri',
        isFollowing: true
    },{
        userName: 'Midudev',
        name: 'Miguel Angel Duran',
        isFollowing: false
    },{
        userName: 'TMChein',
        name: 'Tomas',
        isFollowing: false
    }
]






{/*Como key hay que usar siempre un identificador único, lo mejor que se puede usar es un 'id' de base de datos*/}

export function App () {
    return (
        <section className='App'>
            {
                users.map(user =>{
                    const { userName,name,isFollowing} = user
                    return (
                        <TwitterFollowCard
                            key={userName}
                            userName={userName}
                            initialIsFollowing={isFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                        )
                    }) 
                }
        </section>
    )
}