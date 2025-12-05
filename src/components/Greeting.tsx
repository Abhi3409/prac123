export default function Greeting()
{
    const now = new Date()
    const h = now.getTime()
    const g = h<12?"Good Morning" : h<18?"Good Afternoon" : h < 21 ? 'Good evening' :  'Good night'
    return (
    <div>
      <h2>{g}.</h2>
      <div>It is {now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}.</div>
    </div>
    )
}
