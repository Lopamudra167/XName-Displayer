import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'; 




const NameDisplayer = () =>{
        const [firstName,setFirstName] = useState("");
        const [lastName,setLastName] = useState("");
        const [fullName,setFullName] = useState("");
        const handleSubmit = (e) =>{
            e.preventDefault();
            setFullName(`${firstName} ${lastName}`)

        }



    return(
        <div className="p-16">
            <div>
            <h1 className="flex items-start text-5xl font-serif ... font-semibold">Full Name Display</h1>
            </div>   
            <form onSubmit={handleSubmit} className="pt-6">
                <div>
                <label  className="  text-xl pb-2 font-serif ...">First Name:</label>
                <input  onChange={(e) => setFirstName(e.target.value)} value={firstName} type="text" className="form-control border border-dark" required/>
                </div>
                <div>
                <label className="text-xl pb-2 font-serif ...">Last Name:</label>
                <input onChange={(e) => setLastName(e.target.value)} value={lastName} type="text" className=" form-control border border-dark " required/>
                </div>
                <div className='pt-2'>
                <button type="submit"  className ="btn btn-outline-secondary ">
                submit
                </button>
                </div>
            </form>
          <div>
          {fullName && (
            <div className='p-2 flex items-center'>
            <h5 className=' font-serif ...'>Full Name : {fullName}</h5>
           
            </div>
            )}
          </div>
        </div>
     
    );
};
export default NameDisplayer;