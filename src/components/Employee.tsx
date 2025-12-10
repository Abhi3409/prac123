export default function Employee({ name, id }: { name: string; id: number })
{
    // const name = "Abhinav"
    // const name1 = "emp1"
    // const nl = name.length
    // const msg = nl<5?"short name" : "long name"

    const details = ({ name, id }: {name:string; id:string|number}) => {
        return (<div>
            <h3>Employee Details</h3>
            <p>Name: {name}</p>
            <p>ID: {id}</p>
        </div>
        );

    }
    return(
        <div>
            
            {details({name,id})}
            {/* <h2>{msg}</h2> */}      
        </div>
    )
}