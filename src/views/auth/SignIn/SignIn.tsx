import SignInForm from './SignInForm'

const SignIn = () => {
    return (
        <>
            <div className='mb-8 w-full gap-4 flex items-center flex-col'>
                <img
                    src={`/logo.png`}
                    // src={`./logo.png`}
                    width={"60px"}
                />
            </div>
            <div className="mb-8">
                <h3 className="mb-1">Welcome back!</h3>
                <p>Please enter your credentials to sign in!</p>
            </div>
            <SignInForm disableSubmit={false} />
        </>
    )
}

export default SignIn
