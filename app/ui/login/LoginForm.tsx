'use client';
import { useFormState, useFormStatus } from 'react-dom';
import { authenticate } from '@/app/lib/databaseActions';
import { formFieldStyle } from '@/app/lib/styles';
 
export default function LoginForm() {
  // what i think i need to do here is add another step before authenticate -- function which does some error handling, then awaits authenticate, then redirects you to beamsaber/users/[id]
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);
 
  return (
    <>
    <div className='text-xl text-center'>
      <div className='animate-ping text-xs'>◯</div> 
      Login to edit timers
    </div>
    <form className='flex flex-col items-center' action={dispatch}>
      <label className='hidden'>Username</label>
      <input required min='3' max='30' name='username' placeholder='Username' className={`${formFieldStyle} m-2`}></input>
      <label className='hidden'>Password</label>
      <input required min='3' max='50' name='password' type='password' placeholder='Password' className={`${formFieldStyle} m-2`}></input>
      <button type='submit' className='hover:bg-gray-600 rounded-md m-2 shadow shadow-black border border-teal-400 bg-gray-800 w-32'>Login</button>
      {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
    </form>
    </>
  );
}