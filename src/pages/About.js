import React from 'react'
import school from '../assets/school.jpg'
import techie from '../assets/techie.avif'

function About() {
    return (
        <div name='about relative max-w-full mx-auto flex flex-col justify-center p-2'>
            <div className="  bg-[url('/src/assets/school.jpg')] bg-cover bg-object-cover max-w-[100%] h-[15rem] flex flex-col">
                <div className='absolute  max-w-[155px] h-20 bg-[#0a192f] text-gray-300 px-3'>
                    <p className='p-2 justify-center items-center text-xl'>ABOUT US</p>
                    <div className='flex flex-row justify-center items-center gap-2'>
                    <a href='#' className='text-green-500 hover:text-white-200'>Home</a>
                    <p className=''>/ About Us</p>
                    </div>
                   
                </div>
            </div>

            <div className='flex flex-row justify-center items-center  gap-7 mx-auto px-[4rem] py-6'>
                <div className='bg-cover px-6'>
                    <img src={techie}
                        alt='tech girl'

                    />
                </div>


                <div className='w-1/2 mt-[-2rem] '>
                    <h1 className='text-2xl font-bold w-[93%] '>We Have Experienced Professionals & We  Do Our Best To Achieve Your Goal. Your
                        Happiness Is Our First Priority.
                    </h1>

                    <p className='text-sm mt-3'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pulvinar elit in mauris fringilla, scelerisque tempor lorem tincidunt. Curabitur placerat justo eget augue cursus maximus. Maecenas dictum, tellus vel aliquet volutpat, sem mauris finibus dolor, a posuere quam tellus nec dolor. Sed faucibus est et dolor elementum dapibus. <br></br> <br></br>teger consectetur odio odio, nec tincidunt velit tristique at. In justo quam, commodo non viverra ac, mollis pharetra neque. Morbi rhoncus sit amet ex et vestibulum. Nullam placerat egestas est quis faucibus. Donec blandit, nisi vitae suscipit luctus, sapien orci condimentum leo, posuere varius diam sem non orci.
                        Phasellus sed tincidunt justo. Nunc luctus eget purus sollicitudin finibus. Vivamus pulvinar justo eu vulputate placerat. Morbi congue augue a volutpat dictum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac leo vel turpis faucibus ullamcorper euismod non est. Nulla cursus turpis sit amet quam vehicula elementum.
                    </p>
                </div>
            </div>

        </div>

    )
}

export default About
