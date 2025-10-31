
import data from '../../data/data.json'

console.log(data.overview)

export const OverviewContainer = () => {
    return (
        <section>
            {
                data.overview.map(object => 
                    <div key={ object.id}>Tarjeta</div>
                )
        }
        </section>
    )
}