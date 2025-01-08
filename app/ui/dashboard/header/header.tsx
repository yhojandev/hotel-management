import {
    Bars3Icon,
    MagnifyingGlassIcon,
    BellIcon,
    MoonIcon
} from '@heroicons/react/24/outline';

export default function Header() {
    return (
        <header className="flex  items-center px-5 py-2 bg-gray-100 ">
            <div className='flex items-center space-x-3'>
                <button type='button' className='hover:bg-slate-100 rounded-full p-2'>
                    <Bars3Icon className='size-6' />
                </button>
                <label className='relative block'>
                    <span className='sr-only'>Search</span>
                    <span className='absolute inset-y-0 left-0 flex items-center pl-4'>
                        <MagnifyingGlassIcon className='size-4' />
                    </span>
                    <input className='placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-full py-1 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500  focus:ring-1 sm:text-sm' placeholder='Search' type="text" name='Search' />
                </label>
            </div>
            <div className='flex items-center space-x-3'>
                <button type='button' className=''>
                    <MoonIcon className='size-6' />
                </button>
                <button type="button" className="relative inline-flex items-center p-1">
                    <BellIcon className="size-6" />
                    <span className="sr-only">Notifications</span>
                    <div className="absolute px-1 rounded-full bg-blue-400 text-xs text-white top-0 right-0">2</div>
                </button>
                <button type='button' className='flex items-center '>
                    <img className='inline-block size-8 rounded-full' src='/customers/evil-rabbit.png' alt='avatar' />
                </button>
            </div>
        </header>
    )
}