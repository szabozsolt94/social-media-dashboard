import FacebookIcon from '../images/icon-facebook.svg'
import TwitterIcon from '../images/icon-twitter.svg'
import InstaIcon from '../images/icon-instagram.svg'
import YoutubeIcon from '../images/icon-youtube.svg'
import iconUp from '../images/icon-up.svg'
import iconDown from '../images/icon-down.svg'

const setPlatform = platform => {
    switch (platform) {
        case 'facebook': return <img src={FacebookIcon} alt='facebook-icon' />
        case 'twitter': return <img src={TwitterIcon} alt='facebook-icon' />
        case 'instagram': return <img src={InstaIcon} alt='facebook-icon' />
        case 'youtube': return <img src={YoutubeIcon} alt='facebook-icon' />
    }
}

const setModIcon = modifier => modifier > 0 ? <img src={iconUp} alt='icon-up' className='stat-icon' /> : <img src={iconDown} alt='icon-down' className='stat-icon' />

export { setPlatform, setModIcon }