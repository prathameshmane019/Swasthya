

export default function LoginForm(props) {
    return (
  
          <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                  className="mx-auto h-16 rounded-full"
                  src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1710440012~exp=1710440612~hmac=e805b3fc64e14f158fabd98c15991c58e04d0a3f3569bffe054b824544376bff"
                  alt="Your Company" 
                />
                <h2 className="mt-10 text-center text-2xl text-black font-bold leading-9 tracking-tight text-gray-900">
                  Sign in as {props.type}
                </h2>
              </div>
      
              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-black placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
      
                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                      </label>
                      <div className="text-sm">
                        <a href="#" className="font-semibold text-black hover:text-[#15d9b7]">
                          Forgot password?
                        </a>
                      </div>
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
      
                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#15d9b7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
      
                <p className="mt-10 text-center text-sm text-gray-500">
                  Not a member?{' '}
                  <a href="#" className="font-semibold leading-6 text-black hover:text-[#15d9b7]">
                    Start a 14 day free trial
                  </a>
                </p>
              </div>
            </div>
          </>
        )
    
  }
  