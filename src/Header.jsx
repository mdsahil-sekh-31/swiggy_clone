export default function Header(){
    return(
        <>
        <div className="bg-[#ff5200] flex py-8">
            <div className="flex justify-between w-4/5 container mx-auto flex-wrap">
                <img className="h-12 w-40"
                src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" alt="" />
            <div  className="text-base font-bold text-white flex gap-8 my-auto flex-wrap">
                <a href="" className=" py-3">Swiggy Corporate</a>
                <a href="" className="py-3">Partner with us</a>
                <a href="" className=" border py-3 w-36 h-13.5 text-center rounded-xl cursor-pointer">Get the App</a>
                <a href="" className="w-33 h-13.5 text-center py-3 container border rounded-xl cursor-pointer bg-black border-none">Sign in</a>
            </div>
            </div>
        </div>
        </>
    )
}