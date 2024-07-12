type props = {
    name:string,
    age:number
    address: string,
    list: unknown[]
}


const Home = ({name, age}: props) => {
    
    const watch = ()=>{
            alert('Okay')
    }

    return (
        <div className="flex justify-center items-center h-[100vh]">
                <h1 className="text-2xl font-bold" onClick={watch}>I'm {name}</h1>
                <h1 className="text-2xl font-bold">I'm {age} years old</h1>
        </div>
    );
};

export default Home;