import { LogOut, SlidersHorizontal } from "lucide-react"
import Button from "./shared/Button"
import { Children } from "react"

const Section = ()=>{
    return(
        <div className="bg-amber-600 p-24   ">   
            <h1  className="font-bold text-2xl text-emerald-300 animate__animated animate__flipOutY animate__infinite animate__slower  ">    doctor.mjjnjncom   </h1>
            <div className="mt-8  grid grid-cols-3 gap-8">   
                <div className="bg-white  rounded-2xl p-6 hover:scale-90 transition duration-75 hover:shadow-2xl ">    
                <h1 className="text-xl font-semibold">    
                 what is yoyr problem types how we can help you
                </h1>
                <p className=" text-2xl text-amber-900 mt-1"> 
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum consequatur corrupti laboriosam dolore quos optio? Voluptates, velit unde quos sed rerum commodi nisi architecto mollitia cum consequuntur, asperiores vel laudantium?
                </p>
        <button className=" flex gap-2 items-center  bg-blue-600 text-2xl px-6 py-2  p-3 font-medium mt-3 text-white rounded-2xl hover:bg-amber-700 active:scale-89 hover:scale-130">    nibha.com                 </button>

          <Button >  log in </Button>
                 
                    

                </div>
                 <div className="bg-white  rounded-2xl p-6 ">    
                        <img src="/images.jpg" className="h-54 fit  w-44  animate__animated animate__flipOutY animate__infinite animate__slower "/>
                <h1 className="text-xl font-semibold">    
                 what is yoyr problem types how we can help you
                </h1>
                <p className=" text-2xl text-amber-900 mt-1"> 
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum consequatur corrupti laboriosam dolore quos optio? Voluptates, velit unde quos sed rerum commodi nisi architecto mollitia cum consequuntur, asperiores vel laudantium?
                </p>
        <button className=" hover:scale-110 bg-blue-600 text-2xl px-6 py-2  p-3 font-medium mt-3 text-white rounded-2xl"> learn more!    </button>

                </div> <div className="bg-white  rounded-2xl p-6 ">    
                <h1 className="text-xl font-semibold">    
                 what is yoyr problem types how we can help you
                </h1>
                <p className=" text-2xl text-amber-900 mt-1"> 
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum consequatur corrupti laboriosam dolore quos optio? Voluptates, velit unde quos sed rerum commodi nisi architecto mollitia cum consequuntur, asperiores vel laudantium?
                </p>
        <button className="  active:scale-105 bg-blue-600 text-2xl px-6 py-2  p-3 font-medium mt-3 text-white rounded-2xl"> learn more!    </button>

                </div> <div className="bg-white  rounded-2xl p-6 ">    
                <h1 className="text-xl font-semibold">    
                 what is yoyr problem types how we can help you
                </h1>
                <p className=" text-2xl text-amber-900 mt-1"> 
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum consequatur corrupti laboriosam dolore quos optio? Voluptates, velit unde quos sed rerum commodi nisi architecto mollitia cum consequuntur, asperiores vel laudantium?
                </p>
        <button className=" hover:bg-amber-950 bg-blue-600 text-2xl px-6 py-2  p-3 font-medium mt-3 text-white rounded-2xl"> learn more!    </button>

                </div>
                <div className= " hover:bg-cyan-500 bg-white  rounded-2xl p-6 ">    
                <h1 className="text-xl font-semibold">    
                 what is yoyr problem types how we can help you
                </h1>
                <p className=" text-2xl text-amber-900 mt-1"> 
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum consequatur corrupti laboriosam dolore quos optio? Voluptates, velit unde quos sed rerum commodi nisi architecto mollitia cum consequuntur, asperiores vel laudantium?
                </p>
                <Button> log in </Button>
                </div><div className="bg-white active:bg-red-500  rounded-2xl p-6 ">    
                <h1 className="text-xl font-semibold">    
                 what is yoyr problem types how we can help you
                </h1>
                <p className=" text-2xl text-amber-900 mt-1"> 
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum consequatur corrupti laboriosam dolore quos optio? Voluptates, velit unde quos sed rerum commodi nisi architecto mollitia cum consequuntur, asperiores vel laudantium?
                </p>
        

                </div><div className="bg-white  rounded-2xl p-6 ">    
                <h1 className="text-xl font-semibold">    
                 what is yoyr problem types how we can help you
                </h1>
                <p className=" text-2xl text-amber-900 mt-1"> 
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum consequatur corrupti laboriosam dolore quos optio? Voluptates, velit unde quos sed rerum commodi nisi architecto mollitia cum consequuntur, asperiores vel laudantium?
                </p>
                <Button theme="one" icon={<LogOut className='w-4 h-4'/>}> contact us </Button>
                <Button theme="two"> help us </Button>
                 <Button theme="three" icon={<LogOut className="w-4 h-4" />}> help us </Button>
                  <Button theme="six "> email id </Button>

                </div><div className="bg-white  rounded-2xl p-6 ">    
                <h1 className="text-xl font-semibold">    
                 what is yoyr problem types how we can help you
                </h1>
                <p className=" text-2xl text-amber-900 mt-1"> 
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum consequatur corrupti laboriosam dolore quos optio? Voluptates, velit unde quos sed rerum commodi nisi architecto mollitia cum consequuntur, asperiores vel laudantium?
                </p>
        <button className=" bg-blue-600 text-2xl px-6 py-2  p-3 font-medium mt-3 text-white rounded-2xl"> contactUs!    </button>

                </div><div className="bg-white  rounded-2xl p-6 ">    
                <h1 className="text-xl font-semibold">    
                 what is yoyr problem types how we can help you
                </h1>
                <p className=" text-2xl text-amber-900 mt-1"> 
                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum consequatur corrupti laboriosam dolore quos optio? Voluptates, velit unde quos sed rerum commodi nisi architecto mollitia cum consequuntur, asperiores vel laudantium?
                </p>
                <Button> log out</Button>
                </div>
                
            </div>
        </div>
    )
}
export default Section