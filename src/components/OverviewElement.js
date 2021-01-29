import { setPlatform, setModIcon } from './setIcons'

const OverviewElement = ({ type, platform, amount, modifier }) => {
    return (
        <div className={'overview-element'}>
            <div id='upper-left'><p>{type}</p></div>
            <div id='upper-right'>{setPlatform(platform)}</div>
            <div id='bottom-left'><h1>{Math.abs(amount) > 9999 ? Math.sign(amount) * ((Math.abs(amount) / 1000).toFixed(0)) + 'k' : Math.sign(amount) * Math.abs(amount)}</h1></div>
            <div id='bottom-right'>{setModIcon(modifier)}<span style={modifier > 0 ? { color: ' #1eb589' } : { color: ' #dc414c' }}>{modifier + '%'}</span></div>
        </div>
    )
}

export default OverviewElement
