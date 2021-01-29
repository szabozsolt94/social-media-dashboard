import { setPlatform, setModIcon } from './setIcons'

const DashboardElement = ({ id, platform, name, followers, difference }) => {
    return (
        <>
            <div className='dash-element' id={id}>
                <div className='dash-top' id={platform === 'instagram' ? 'insta-element-box' : ''}></div>
                <div className='dash-element-box'>
                    <div>
                        {setPlatform(platform)}
                        <span id='username'>{platform !== 'youtube' ? '@' + name : name}</span>
                    </div>
                    <h1>{Math.abs(followers) > 9999 ? Math.sign(followers) * ((Math.abs(followers) / 1000).toFixed(0)) + 'k' : Math.sign(followers) * Math.abs(followers)}</h1>
                    <p>{platform === 'youtube' ? 'SUBSCRIBERS' : 'FOLLOWERS'}</p>
                    <div>
                        {setModIcon(difference)}
                        <span style={difference > 0 ? { color: ' #1eb589' } : { color: ' #dc414c' }}>{difference} Today</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardElement