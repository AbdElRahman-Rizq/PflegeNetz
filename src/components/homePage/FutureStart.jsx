import SharedButton from "../../shared/components/Button"
import vectorImg from "/assets/images/vector2.png";


export const FutureStart = () => {
    return (
        <section className="flex justify-center gap-16 bg-[#E6F6FE] py-10 px-4 md:px-6 lg:px-8 mb-5">
            <img src="/images/clinic.png" alt="clinic" className="w-1/3"  />
<div className="flex flex-col my-auto">

        <div className="text-left  mb-6 lg:mb-0 ">
 <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            
            <span className="relative ">
 Your Future {" "}
 
              
              <img
                src={vectorImg}
                alt=""
                className="absolute w-[210px] z-0 h-[4px] left-1/2 transform -translate-x-1/2 rotate-[0.4deg] bottom-[-10px] md:top-[35px]"
                />
            </span>
                Starts with Us
          </h2>
          <p className="text-sm text-gray-600 mb-6 lg:w-[70%] mt-2">
          With SA netz, the path to Germany’s healthcare system becomes simple and effective
          </p>
        </div>

<div className="ml-1 mt-3">
    
        <SharedButton 
        title={"For Applicants"}
        href="/applicants"
        />
        </div>
        </div>
        </section>
    )}