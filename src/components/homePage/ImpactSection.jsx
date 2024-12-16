import SharedButton from "../../shared/components/Button.jsx";

export default function ImpactSection() {
  return (
    <section className=" py-4  md:mx-8 md:my-2 md:py-10 px-4 ">
      <div className="flex justify-between items-center flex-col md:flex-row">
        {/* left side */}
        <div className="space-y-5">
          <h1 className="text-2xl text-center md:text-left  font-bold">
            More Than Just Recruitment{" "}
          </h1>
          <p className="text-sm text-gray-600 text-center md:text-left">
            We create connections that foster excellence and change lives.{" "}
          </p>
          <div className="flex items-center md:items-start  justify-center md:justify-start">
            <SharedButton title="For institutions" href="/" />
          </div>
        </div>
        {/* right side */}
        <div className="my-5 md:mt-0">
          <div className="relative max-w-xl ">
            <div className="absolute top-0 left-0 w-full h-full bg-lime-300 rounded-lg -z-10"></div>
            <div className="relative flex items-center justify-center  rounded-lg  md:right-10 right-5 top-5 py-2 px-1">
              <img
                src="/images/4bf5c2d056b04f08e048793ff2f910a1.jpeg"
                alt="Doctor with Mask"
                className="rounded-lg object-cover w-[300px] h-[200px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
