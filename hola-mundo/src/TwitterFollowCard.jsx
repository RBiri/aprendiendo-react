import { userState, useState} from 'react'

export function TwitterFollowCard ({children,userName = "unknown",initialIsFollowing}) {
    const [isFollowing,setIsFollowing] = useState(initialIsFollowing)

    const imageSrc= 'https://unavatar.io/${username}';
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ?
        'rb-tw-followCard-button is-following' : 'rb-tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    return (
        <article className='rb-tw-followCard'>
            <header className='rb-tw-followCard-header'>
                <img
                    className='rb-tw-followCard-avatar'
                    alt="El avatar de Biri" 
                    src={imageSrc} />
                <div className='rb-tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='rb-tw-followCard-infoUserName'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='rb-tw-followCard-text'> {text}</span>
                    <span className='rb-tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}