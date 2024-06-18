import DirectoryItem from './DirectoryItem'
import Cards from './Cards'
export default function Section(){
    return(
        <section className="p-9 bg-[#0E0E10] text-[#EFEFF1] w-full min-h-screen space-y-56 2xl:space-y-10 lg:space-y-32 md:space-y-32 sm:space-y-32">
                <div className='flex flex-col'>
                    <span className="font-bold text-6xl ">Explorar</span>
                    <div className="pt-6 flex flex-wrap gap-2 h-20 2xl:flex-nowrap">
                        <Cards />
                    </div>
                </div>
                <div>
                    <div className='flex gap-5 text-xl font-semibold'>
                        <div>
                            <span className='text-[#BF94FF] hover:text-[#A970FF] cursor-pointer'>Categorías</span>
                            <div className='bg-[#BF94FF] h-[2px] w-24 pt-[0.15rem] cursor-pointer'></div>
                        </div>
                        <span className='hover:text-[#A970FF] text-xl font-semibold cursor-pointer'>Canales en vivo</span>
                    </div>
                    <div className='flex flex-col md:flex-row lg:flex-row justify-between pt-6'>
                        <input type="text" placeholder='Buscar etiquetas de categoría' className='h-8 w-56 p-2 text-[#EFEFF1] rounded-md border border-[#67676B] bg-transparent focus:border-[#A970FF] focus:border-4 focus:outline-none' />
                        <div className='flex gap-3'>
                            <span>Ordenar por</span>
                            <input type="text" placeholder='Recomendaciones para ti' className='h-8 w-56 p-2 text-[#EFEFF1] rounded-md border border-[#67676B] bg-transparent focus:border-[#A970FF] focus:border-4 focus:outline-none' />
                        </div>
                    </div>
                    <div className='flex flex-wrap gap-2 pt-6 size-full'>
                        <DirectoryItem />
                    </div>
                </div>
        </section>
    )
}