import React from 'react'
import {SiRedwoodjs} from 'react-icons/si'
import {GiAlienFire, GiAngelOutfit,GiAbstract041, GiDwarfFace,GiOgre, GiVampireCape} from 'react-icons/gi'
import {BsFillFlagFill} from 'react-icons/bs'
import '../Mainpage/animations.css'
function Mainpage() {
    return ( 
        <div className=''>
            <div className=''>
            <img src='https://i.ibb.co/1JMHLVs/peakpx.jpg' className='w-full object-cover   h-[700px] absolute -z-10' ></img>
            <div className='w-full flex items-center h-20 justify-between'>
                <div className='flex ml-10 items-center'>
                    <SiRedwoodjs className='w-[40px] h-[40px] text-white mr-4'/>
                    <p className=' text-2xl text-white font-Mont'>RESWOOD WORLD</p>
                </div>
                <div className='flex'>
                <button className='mx-7 uppercase text-lg tracking-wider font-thin'>
                    about 
                </button>
                <button className='mx-7 uppercase text-lg tracking-wider font-thin'>
                    league
                </button>
                <button className='mx-7 uppercase text-lg tracking-wider font-thin'>
                  Factions
                </button>
                <button className='mx-7 uppercase text-lg tracking-wider font-thin'>
                  Worlds
                </button>
                <button className='mx-7 uppercase text-lg  tracking-wider font-thin bg-gray-800 text-white w-[120px] h-[40px] rounded-lg  '>
                    Home
                </button>
                </div>
               
            </div>
            <div className='w-full mt-[80px] flex justify-evenly'>
                <div>
                    <img src='https://i.ibb.co/k9R5x4R/kisspng-dungeons-dragons-pathfinder-roleplaying-game-ang-5b3ad1b20673f0-8254464815305814260264.png'className='pathfinder w-[350px]   h-[350px] object-fill'></img>
                </div>
                <div className='    '>
                    <GiAlienFire className='w-[250px] text-gray-800 h-[250px]'/>
                </div>
                <div>
                    <img src='https://i.ibb.co/42qNvwY/kisspng-granblue-fantasy-project-re-link-chara-fantasy-character-5b16f49f9b8345-21650191152823107163.png'className='w-[350px] darkelf  h-[350px] object-fil'></img>
                </div>
            </div>
            <div className='flex w-full mb-40 justify-center'>
            <p className='bg-black/25 p-4 rounded-xl font-Mont text-xl font-medium uppercase text-white mt-4'>Explore the world of reswood and fight for your faction</p> 
            </div>
            </div>
           
            <div className='w-full flex items-center justify-center '>
                   
                    <p className='font-Mont text-xl border-b-2 border-gray-600'>FACTIONS</p>
            </div>
            <div className='w-full flex mt-10  justify-between mb-20'>
                    <div className='w-[270px] h-[430px] rounded-xl ml-40 shadow-lg scaleup  hover:shadow-yellow-400'>
                        <div className=' w-full  justify-center'>
                            <img src='https://i.ibb.co/WW2hXSL/124887.jpg' className='w-full  h-[250px] rounded-t-xl'>
                            </img>
                            <div className='flex mt-2 ml-2 font-Mont items-center'>
                                <GiAngelOutfit className='text-yellow-400 w-[20px] h-[20px] mr-2'/>
                                <p>HIGH ELVES</p>
                            </div>
                            <div className='mt-1 ml-2'>
                                <p className='break-before-auto text-gray-500'>Elves the wariors of the north lands enemies with dark elves in the west lands are fighting again for their sacred light ....</p>
                            </div>
                            <div className='w-full justify-center flex'>
                                <button className='w-[120px] mt-7 h-[40px] hover:bg-yellow-400 bg-gray-700 text-white rounded-xl font-Mont uppercase'>
                                    Join
                                </button>
                            </div>
                        </div>
                    </div>
                     <div className='w-[270px] h-[430px] rounded-xl  shadow-lg scaleup hover:shadow-purple-400'>
                        <img src='https://images3.alphacoders.com/169/thumb-1920-169517.png' className='w-full  h-[250px] rounded-t-xl'>

                        </img>
                        <div className='flex mt-2 ml-2 font-Mont items-center'>
                                <GiAbstract041 className='text-purple-400 w-[20px] h-[20px] mr-2'/>
                                <p>DARK ELVES</p>
                            </div>
                            <div className='mt-1 ml-2'>
                                <p className='break-before-auto text-gray-500'>Dark elves these strong creatures do not scare of anything the land in the west is in their powerful hands and they will crush ...</p>
                            </div>
                            <div className='w-full justify-center flex'>
                                <button className='w-[120px] mt-7 h-[40px] hover:bg-purple-400 bg-gray-700 text-white rounded-xl font-Mont uppercase'>
                                    Join
                                </button>
                            </div>
                    </div>
                    <div className='w-[270px] h-[430px] rounded-xl hover:shadow-blue-400 scaleup shadow-lg'>
                    <img src='https://i.ibb.co/CHmCZ0J/tze-kun-chin-dwarf-lord.jpg' className='w-full object-cover object-top  h-[250px] rounded-t-xl'>

                        </img>
                        <div className='flex mt-2 ml-2 font-Mont items-center'>
                                <GiDwarfFace className='text-blue-400 w-[20px] h-[20px] mr-2'/>
                                <p>DWARFS</p>
                            </div>
                            <div className='mt-1 ml-2'>
                                <p className='break-before-auto text-gray-500'>Dark elves these strong creatures do not scare of anything the land in the west is in their powerful hands and they will crush ...</p>
                            </div>
                            <div className='w-full justify-center flex'>
                                <button className='w-[120px] mt-7 h-[40px] hover:bg-blue-400 bg-gray-700 text-white rounded-xl font-Mont uppercase'>
                                    Join
                                </button>
                            </div>
</div>
                     <div className='w-[270px] h-[430px] rounded-xl hover:shadow-amber-800 scaleup shadow-lg'>
                        <img src='https://i.pinimg.com/originals/c4/55/aa/c455aacfbeb306c28bfdc13501332ceb.jpg' className='w-full object-cover object-top  h-[250px] rounded-t-xl'>

                        </img>
                        <div className='flex mt-2 ml-2 font-Mont items-center'>
                                <GiOgre className='text-amber-800 w-[20px] h-[20px] mr-2'/>
                                <p>OGRES</p>
                            </div>
                            <div className='mt-1 ml-2'>
                                <p className='break-before-auto text-gray-500'>Dark elves these strong creatures do not scare of anything the land in the west is in their powerful hands and they will crush ...</p>
                            </div>
                            <div className='w-full justify-center flex'>
                                <button className='w-[120px] mt-7 h-[40px] hover:bg-amber-800 bg-gray-700 text-white rounded-xl font-Mont uppercase'>
                                    Join
                                </button>
                            </div>
                    </div>
                     <div className='w-[270px] h-[430px] rounded-xl mr-40 hover:shadow-red-400 scaleup shadow-lg'>
                     <img src='https://wallpaperaccess.com/full/5631354.jpg' className='w-full object-cover object-top  h-[250px] rounded-t-xl'>

</img>
<div className='flex mt-2 ml-2 font-Mont items-center'>
                                <GiVampireCape className='text-red-500 w-[20px] h-[20px] mr-2'/>
                                <p>VAMPIRES</p>
                            </div>
                            <div className='mt-1 ml-2'>
                                <p className='break-before-auto text-gray-500'>Dark elves these strong creatures do not scare of anything the land in the west is in their powerful hands and they will crush ...</p>
                            </div>
                            <div className='w-full justify-center flex'>
                                <button className='w-[120px] mt-7 h-[40px] hover:bg-red-500 bg-gray-700 text-white rounded-xl font-Mont uppercase'>
                                    Join
                                </button>
                            </div>
                    </div>
                    <div>
                        salam
                    </div>
            </div>
        </div>

     );
}

export default Mainpage;