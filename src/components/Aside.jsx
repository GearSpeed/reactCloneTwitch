import CollapseSVG from './SVG/CollapseSVG'
import RecommendedChannelList from './RecommendedChannelList'
export default function Aside(){
    return (
        <aside className="hidden lg:flex flex-col p-2 bg-[#18181B] min-h-[42.8rem] w-72 border-t-2 border-[#0E0E10] text-[#EFEFF1]">
            <div className='flex flex-row gap-4 '>
                <div className="flex items-center justify-start text-[11.5px] font-bold basis-10/12">
                    <span>CANALES RECOMENDADOS</span>
                </div>
                <div className='hover:bg-[#35353B] flex items-center justify-center size-8 rounded cursor-pointer'>
                    <CollapseSVG />
                </div>
            </div>
            <RecommendedChannelList />
        </aside>
    )
}