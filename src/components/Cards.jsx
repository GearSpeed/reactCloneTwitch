export default function Cards(){

    const cards = [
        {
            title: 'Juegos',
            icon: 'https://static-cdn.jtvnw.net/c3-vg/verticals/gaming.svg'
        },
        {
            title: 'IRL',
            icon: 'https://static-cdn.jtvnw.net/c3-vg/verticals/irl.svg'
        },
        {
            title: 'Música',
            icon: 'https://static-cdn.jtvnw.net/c3-vg/verticals/music.svg'
        },
        {
            title:'Creative',
            icon: 'https://static-cdn.jtvnw.net/c3-vg/verticals/creative.svg'
        },
        {
            title:'Esports',
            icon: 'https://static-cdn.jtvnw.net/c3-vg/verticals/esports.svg'
        }
    ]


    return (
        cards.map((item) => {
            return (
                <>
                    <div className="bg-[#5C16C5] hover:bg-[#583394] pl-5 pr-2 rounded h-5/6 w-60 flex items-center justify-between cursor-pointer">
                        <span className="font-semibold text-3xl" >{item.title}</span>
                        <img className="order-last size-16" src={item.icon} alt="" />
                    </div>
                </>
            )
        })
    )
}