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
 
// function LoginButton() {
//   const { pending } = useFormStatus();
 
//   return (
//     <button className="mt-4 w-full" aria-disabled={pending}>
//       Log in <div className="ml-auto h-5 w-5 text-gray-50">{"=>"}</div>
//     </button>
//   );
// }

/**
 * <form action={dispatch}>
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`mb-3 text-2xl`}>
          Please log in to continue.
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
              />
              <div className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900">@</div>
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                required
                minLength={6}
              />
              <div className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900">key</div>
            </div>
          </div>
        </div>
        <LoginButton />
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <div className="h-5 w-5 text-red-500">!</div>
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
 */