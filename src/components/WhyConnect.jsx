
import React from 'react';
import "../assets/whyCone.jpg";

function WhyConnect() {
    return (

        <>
            <h1 className='text-center mb-6 text-6xl'>Why Connect4ALL</h1>
            <div className="mx-20">


                {/* First Section */}
                <div className='flex justify-between items-center mb-8'> {/* Reduced margin-bottom */}
                    <div className="w-1/2 pr-8 ml-28">
                        <h1 className='flex items-center justify-center text-4xl'>All in One Collaboration </h1>

                        <div className='mt-8 text-justify'>


                        CitySync revolutionizes urban governance by integrating AI, GIS, and secure cloud solutions. It addresses inefficiencies in coordination and resource management, providing city departments with a centralized platform for task tracking, conflict resolution, and project mapping. With real-time insights, CitySync ensures seamless collaboration and faster responses to operational challenges.
                        </div>
                    </div>
                    <div className='w-1/2 mr-28'>
                        <img className='mx-auto h-auto w-96' src='/WhyConn1.jpg' alt='' />
                    </div>
                </div>

                {/* Second Section */}
                <div className='flex justify-between items-center mb-8'>
                    <div className='w-1/2'>
                        <img className='mx-auto h-auto w-96' src='/WhyConn3.jpg' alt='' />
                    </div>
                    <div className="w-1/2 pl-8">
                        <h1 className='flex items-center justify-center text-4xl'>Self Sufficient </h1>
                        <div className='mt-8 text-justify'>
                        Our platform empowers cities to streamline decision-making through predictive conflict detection and data-driven planning. By visualizing projects on GIS maps and enabling transparent financial tracking, CitySync promotes accountability and optimized resource utilization. This innovative approach fosters a culture of efficiency and transparency, benefiting both city administrators and citizens alike.
                        </div>

                    </div>
                </div>

                {/* Third Section */}
                <div className='flex justify-between items-center mb-8'> {/* Reduced margin-bottom */}
                    <div className="w-1/2 ml-28">
                        <h1 className='flex items-center justify-center text-4xl'>AI Support </h1>
                        <div className='mt-8 text-justify'>
                        CitySync isn’t just a tool; it’s a vision for smarter, more sustainable cities. With features designed to enhance inter-departmental coordination, prioritize eco-friendly initiatives, and incorporate public feedback, CitySync bridges the gap between technology and governance, ensuring cities are equipped to meet the evolving needs of their communities effectively.
                        </div>
                    </div>
                    <div className='w-1/2 pl-8 mr-28'>
                        <img className='mx-auto h-auto w-96' src='/WhyConn2.jpg' alt='' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default WhyConnect;