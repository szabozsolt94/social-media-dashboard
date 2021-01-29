import DashboardElement from './DashboardElement'

const Dashboard = ({ platforms }) => {
    return (
        <div id={'dashboard'}>
            <div id='dash-container'>
                {platforms.map((platform, i) => (
                    <DashboardElement key={'p-key' + i} id={'dash-' + i} platform={platform.platform} name={platform.name} followers={platform.followers} difference={platform.difference} />
                ))}
            </div>
        </div>
    )
}

export default Dashboard