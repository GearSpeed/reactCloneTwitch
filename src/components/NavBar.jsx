import LogoTwitch from './SVG/LogoTwitch'
import MenuVertical from './SVG/MenuVertical'
import CoronaSVG from './SVG/CoronaSVG'
import UserSVG from './SVG/UserSVG'
export default function NavBar(){
    return (
        <nav className="flex justify-between lg:justify-normal h-[50px] w-full bg-[#18181B]">
            <div className="flex justify-start p-2">
                <div className='w-14'>
                    <LogoTwitch/>
                </div>
                <div className='hidden w-24 lg:grid gap-y-3'>
                    <h1 className='font-semibold text-[#BF94FF] text-xl cursor-pointer'>Explorar</h1>
                    <div className='bg-[#BF94FF] h-[2px] w-[4.5rem]'></div>
                </div>
                <div className='size-8 flex justify-center hover:bg-[#35353B] cursor-pointer rounded'>
                    <MenuVertical  />                   
                </div>
            </div>
            <div className='hidden lg:flex justify-center w-full items-center pb-2'>
                <input type="text" placeholder='Buscar' className='h-8 w-96 p-2 pr-10 text-[#EFEFF1] rounded-md border border-[#67676B] bg-transparent focus:border-[#A970FF] focus:border-4 focus:outline-none' />
            </div>
            <div className='flex justify-end gap-3 items-center'>
                <div className='hover:bg-[#35353B] flex items-center justify-center cursor-pointer size-8 rounded'>
                    <CoronaSVG />
                </div>
                <div className='flex justify-center items-center bg-[#2F2F35] hover:bg-[#35353B] cursor-pointer rounded h-7 w-[6rem]'>
                    <span className='text-[#EFEFF1] font-bold text-xs'>Iniciar sesión</span>
                </div>
                <div className='flex justify-center items-center bg-[#9147FF] hover:bg-[#772CE8] cursor-pointer rounded h-7 w-[6rem]'>
                    <h2 className='text-[#EFEFF1] font-bold text-xs'>Registrarse</h2>
                </div>
                <div className='hover:bg-[#35353B] flex items-center justify-center size-8 rounded cursor-pointer'>
                    <UserSVG />
                </div>
            </div>
        </nav>
    )
}