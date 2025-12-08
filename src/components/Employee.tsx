export default function Employee()
{
    const name = "Abhinav"
    // const name1 = "emp1"
    const nl = name.length
    const msg = nl<5?"short name" : "long name"
    return(<div>
        <h2>Employee Name: Abhinav</h2>
        <h2>{msg}</h2>
        
    </div>)
}