import { useState } from 'react';


const Frm = () => {

    const [form,setForm] = useState({

        amount:0,
        description:"",
        date: ""

    });

    function handleInput(e) {

        setForm({
            ...form,[e.target.name]: e.target.value
        });
    }

     async function handleSubmit(e)  {

        e.preventDefault();
        const res = await fetch("http://localhost:4000/transaction", {
            method:"POST",
            body:form,
        })
        console.log(form);
    }


 return (

    <div>
    <form onSubmit = {handleSubmit} >
        <input type = "number" value={form.amount} name="amount" onChange={handleInput} placeholder = "Enter transaction amount"/>
        <input type = "text" value={form.description} onChange={handleInput} name = "description" placeholder="Enter trnsactions detail"/>
        <input type = "date" name = "date" value={form.date} onChange={handleInput}/>
        <button type = "submit">submit</button>
    </form>
   </div>
 );

}

export default Frm;