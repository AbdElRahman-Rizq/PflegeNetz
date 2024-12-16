import React from 'react';
import second from "../../../public/images/second-half_vector.png";
import Heading from '../../shared/components/HeadingTitle';
import SharedButton from '../../shared/components/Button';

const Cards = () => {
    return (
        <div className=" w-full"
            style={
                {
                    backgroundImage: `url(${second})`,
                    backgroundSize: 'fill',
                    backgroundRepeat: 'no-repeat',
                    overflow: 'hidden',                
                }
            }
        >
            <div className="flex flex-col items-centerjustify-center ">
                <Heading
                    title={"How It Works?"}
                    subtitle={
                        "SA netz makes recruiting international professionals simple and effective"
                    } />
            </div>

<section className='flex items-center justify-center flex-col mx-auto w-[70%]'>
    {/* First Card  */}
    <div className='w-full rounded-lg'>
        <img src="/images/card.png" alt="First Card" />
    </div>
    {/* Second Card  */}
    <div className='w-full rounded-lg'>
        <img src="/images/card (1).png" alt="First Card" />
    </div>
    {/* Third Card  */}
    <div className='w-full rounded-lg'>
        <img src="/images/card (2).png" alt="First Card" />
    </div>
    {/* Fourth Card  */}
    <div className='w-full rounded-lg'>
        <img src="/images/card (3).png" alt="First Card" />
    </div>
<SharedButton title="Get Started Now" href="/applicants" />
</section>
        </div>
    );
}

export default Cards;
