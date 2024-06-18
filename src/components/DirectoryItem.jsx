export default function DirectoryItem(){

    const itemsDirectory = [
        {
            img: 'https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg',
            state: 'Solo chateano',
            viewers: '429.9k'
        },
        {
            img: 'https://static-cdn.jtvnw.net/ttv-boxart/263490_IGDB-285x380.jpg',
            state: 'Solo chateano',
            viewers: '429.9k'
        },
        {
            img: 'https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg',
            state: 'Solo chateano',
            viewers: '429.9k'
        },
        {
            img: 'https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg',
            state: 'Solo chateano',
            viewers: '429.9k'
        },
        {
            img: 'https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg',
            state: 'Solo chateano',
            viewers: '429.9k'
        },
        {
            img: 'https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-285x380.jpg',
            state: 'Solo chateano',
            viewers: '429.9k'
        },
        {
            img: 'https://static-cdn.jtvnw.net/ttv-boxart/512710-285x380.jpg',
            state: 'Solo chateano',
            viewers: '429.9k'
        },
        {
            img: 'https://static-cdn.jtvnw.net/ttv-boxart/512953_IGDB-285x380.jpg',
            state: 'Solo chateano',
            viewers: '429.9k'
        },
        {
            img: 'https://static-cdn.jtvnw.net/ttv-boxart/515025-285x380.jpg',
            state: 'Solo chateano',
            viewers: '429.9k'
        },
        {
            img: 'https://static-cdn.jtvnw.net/ttv-boxart/493959_IGDB-285x380.jpg',
            state: 'Red Dead Redemption 2',
            viewers: '6.9k'
        },

    ]

    return(
        itemsDirectory.map((item) => {
            return(
                <>
                    <div className='flex flex-col'> 
                        <img className='h-[263.6px] w-[197.7px] cursor-pointer' src={item.img} alt="" />
                            <span className='font-semibold hover:text-[#A970FF] cursor-pointer'>{item.state}</span>
                        <span className='text-[#ADADB8] text-sm cursor-pointer'>{item.viewers} espectadores</span>
                    </div>
                </>
            )
        })
    )
}