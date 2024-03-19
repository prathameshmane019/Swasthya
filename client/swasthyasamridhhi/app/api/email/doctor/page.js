import nodemailer from 'nodemailer';

export default function DoctorAf(){
    const[subject,setSubject ]=useState('');
    const[message,setMessage] = useState('')
    const sendMail =async (e)=> {
        e.preventDefault();
        const response = await fetch('/api/sendEmail',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({
                subject,
                message
            })
        })
    console.log(await response.json())
    }
    return(
        <main className ="flex min-h-screen flex-col items-center justify-center p-24">
            <form className="h-full w-1/3 space-y-6">....
            </form>
        </main>
    )
}