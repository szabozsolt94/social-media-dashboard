import OverviewElement from './OverviewElement'

const Overview = ({ events }) => {
    return (
        <div id={"overview"}>
            <h1 id='overview-title'>Overview - Today</h1>
            <div id="overview-container">
                {events.map((event, i) => (
                    <OverviewElement key={'e-key' + i} type={event.type} platform={event.platform} amount={event.amount} modifier={event.modifier} />
                ))}
            </div>
        </div>
    )
}

export default Overview
