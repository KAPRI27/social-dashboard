
import data from '../../data/data.json'
import {OverviewCard, OverviewTodayCard} from './OverviewCard'

const convertNumberToK = (number) => {
    if(number >= 10000){
        number = number / 1000
        return `${number}k`
    }
    return number
}

export const OverviewContainer = () => {
    return (
        <section className='max-w-[1440px]'>
            <div className='w-[326px]  flex flex-wrap top-[191px] left-0 right-0 mx-auto '>
                {
                data.overview.map(object => 
                    <OverviewCard 
                    key={object.id}
                    user={object.user}
                    audienceType={object.audienceType}
                    audience={convertNumberToK(object.audience)}
                    network={object.network}
                    isUp={object.isUp}
                    today={object.today}
                    />
                )   
            }
            </div>
        </section>
    )
}

export const OverviewTodayContainer = () => {
    return (
        <section className='max-w-[1440px]'>
            <h2 className='text-2xl font-bold mb-[27px] text-dark-grayish-blue ml-8'>Overview Today</h2>
            <div className='w-[326px]  top-[191px] left-0 right-0 mx-auto'>
                {
                    data['overview-today'].map( object => 
                        <OverviewTodayCard
                        key={object.id}
                        network={object.network}
                        statsType={object.statsType}
                        stats={convertNumberToK(object.stats)}
                        porcentage={object.porcentage}
                        isUp={object.isUp}
                        />
                    )
                }
            </div>
        </section>
    )
}