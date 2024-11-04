import img from './assets/images/icon-memory.svg'
import data from './data.json'
const AllData = () => {
    const styles = {
        Reaction:'flex justify-between text-red-400 bg-red-100 py-2 px-4 rounded-lg',
        Memory:'flex justify-between text-orange-500 bg-orange-100 py-2 px-4 rounded-lg',
        Verbal:'flex justify-between text-green-600 bg-green-100 py-2 px-4 rounded-lg',
        Visual:'flex justify-between text-blue-800 bg-blue-100 py-2 px-4 rounded-lg '
    }
    return (
        <div className="flex justify-center items-center font-semibold">
            <div className="md:w-[600px] w-full md:h-screen flex justify-center items-center md:flex-row flex-col ">
                <div className="md:w-1/2 w-[350px] md:h-[400px]  bg-gradient-to-t from-[#2E2BE9] to-[#7857FF] flex justify-center items-center flex-col gap-4 p-4 rounded-b-xl md:rounded-xl text-[#EBF1FF] shadow-md">
                    <p className="text-gray-300 ">Your Result</p>
                    <div className="bg-gradient-to-t from-[#4e21ca] to-[#2421CA] rounded-full h-[100px] w-[100px] flex justify-center items-center flex-col ">
                        <h1 className="text-3xl ">80</h1>
                        <p className="text-gray-400 ">of 100 </p>
                    </div>
                    <div className="text-center">
                        <h2 className="text-xl">Great</h2>
                        <p className="w-[200px] text-gray-300 font-normal ">You scored higher than 65% of the people who have taken these tests.</p>
                    </div>
                </div>
                <div className=" md:w-1/2 md:h-[400px] p-4 space-y-2 md:shadow-md md:rounded-xl w-[350px]">
                    <h3 className="mb-8 text-blue-950">Summary</h3>
                    

                    {
                        data.map((data) => (
                            <div className={`${styles[data.category]}`} >
                                <div className="flex gap-2">
                                    <img src={data.icon} alt="icon" />
                                    <p>{data.category}</p>
                                </div>
                                <p className="text-blue-950"> {data.score} <span className="text-gray-400">/ 100</span></p>
                            </div>
                        ))
                    }
                    <div className="py-8">
                        <button className="bg-gray-800 text-white  h-10 rounded-3xl hover:bg-blue-600 w-full md:w-[250px]  ">Continue</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AllData