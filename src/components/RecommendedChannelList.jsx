import RecSVG from './SVG/RecSVG'
export default function RecommendedChannelList(){

    const channelsRecommended = [
        {
            profilePicture: 'https://static-cdn.jtvnw.net/jtv_user_pictures/574228be-01ef-4eab-bc0e-a4f6b68bedba-profile_image-70x70.png',
            userName: 'ibai',
            category: 'Rust',
            spectators: '19.1k'
        },
        {
            profilePicture: 'https://static-cdn.jtvnw.net/jtv_user_pictures/bf1d52e3-b46b-4c07-9b4f-a1ab8c4e40f8-profile_image-70x70.png',
            userName: 'auronplay',
            category: 'Solo chateando',
            spectators: '17.8k'
        },
        {
            profilePicture: 'https://static-cdn.jtvnw.net/jtv_user_pictures/58540fd4-03b1-4968-9c91-c543cb14af01-profile_image-70x70.png',
            userName: 'AppleCoding',
            category: 'Desarrollo de software',
            spectators: '5'
        },
        {
            profilePicture: 'https://static-cdn.jtvnw.net/jtv_user_pictures/123d6367-8d8d-4c65-83e2-72505e36ac7d-profile_image-70x70.png',
            userName: 'AlphaSniper97',
            category: 'XDefient',
            spectators: '1.2k'
        },
        {
            profilePicture: 'https://static-cdn.jtvnw.net/jtv_user_pictures/6de618da-e43e-40f7-ba3f-e9a21d2cfcf7-profile_image-70x70.png',
            userName: 'MenosTrece',
            category: 'REKA',
            spectators: '1.8k'
        },
        {
            profilePicture: 'https://static-cdn.jtvnw.net/jtv_user_pictures/a845fcab-daac-4cf4-8d75-02352b69d704-profile_image-70x70.png',
            userName: 'jujalag',
            category: 'ELDEN RING',
            spectators: '1.6k'
        },
        {
            profilePicture: 'https://static-cdn.jtvnw.net/jtv_user_pictures/151197d7-7f85-4d18-8626-ddec53892822-profile_image-70x70.png',
            userName: 'Anujbost',
            category: 'Solo chateando',
            spectators: '1.6k'
        },
        {
            profilePicture: 'https://static-cdn.jtvnw.net/jtv_user_pictures/c82f94e8-64bb-48a7-9a09-9944a9e270ed-profile_image-70x70.png',
            userName: 'Aurigas',
            category: 'Minecraft',
            spectators: '254'
        },
        {
            profilePicture: 'https://static-cdn.jtvnw.net/jtv_user_pictures/73e04321-1116-4b09-8a89-2ce801bf3e16-profile_image-70x70.png',
            userName: 'Werlyb',
            category: 'League of Legends',
            spectators: '1.8k'
        },
        {
            profilePicture: 'https://static-cdn.jtvnw.net/jtv_user_pictures/78528288-6216-4e21-872b-7f415b602a9a-profile_image-70x70.png',
            userName: 'alexelcapo',
            category: 'Shin Megami',
            spectators: '3.7k'
        }
        
    ]

    return (

        channelsRecommended.map((item) => {
            return(
                <div className='pt-1 pb-1 flex flex-row gap-4 hover:bg-[#26262C] cursor-pointer' key={`channel-recommended-${item.userName}`}>
                    <div className='size-8'>
                        <img className='rounded-full' src={item.profilePicture} alt="Picture Profile" />
                    </div>
                    <div className='basis-1/2'>
                        <h1 className='text-sm font-bold'>{item.userName}</h1>
                        <h2 className='text-xs text-[#ADADB8]'>{item.category}</h2>
                    </div>
                    <div className='flex gap-1 basis-1/12'>
                        <span className='pt-1'>
                            <RecSVG />
                        </span>
                        <h1 className='text-xs'>{item.spectators}</h1>
                    </div>
                </div>
            )
        })
    )
}

        // <div className='pt-1 pb-1 flex gap-4 hover:bg-[#26262C]'>
        //     <div className='size-8'>
        //         <img className='rounded-full' src="https://static-cdn.jtvnw.net/jtv_user_pictures/73e04321-1116-4b09-8a89-2ce801bf3e16-profile_image-70x70.png" alt="Picture Profile" />
        //     </div>
        //     <div>
        //         <h1 className='text-sm font-bold'>El chiringuitoTV</h1>
        //         <h2 className='text-xs text-[#ADADB8]'>Categoría</h2>
        //     </div>
        //     <div className='flex gap-1'>
        //         <span className='pt-1'>
        //             <RecSVG />
        //         </span>
        //         <h1 className='text-xs'>15.5K</h1>
        //     </div>
        // </div>