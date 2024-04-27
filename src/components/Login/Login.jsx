import logo from "../../assets/logo.png";
import Eclipses from "../Eclipses/Eclipses";
function Login() {
  return (
    <>
      <div className="app absolute h-screen w-screen overflow-hidden">
        <Eclipses />
        {/* Image css not working */}
        <img
          src={logo}
          alt="logo"
          className="w-[236 px] h-[87px] mt-[65px] ml-[57px]"
        />
        <h1 className="absolute top-[237px] left-[1035px] w-[128px] h-[56px] font-roboto font-medium text-2xl leading-14 tracking-tighter text-gray-800">
          Login
        </h1>
        <h2 className="absolute top-[278px] left-[1035px] w-[257px] h-[21px] font-roboto font-normal text-base leading-5 tracking-normal text-gray-800">
          Login to continue using the app
        </h2>

        <div className="container">
          <label className="mb-[10px]" htmlFor="email">
            <b>Email Address</b>
          </label>
          <input
            className="mb-[15px] rounded-lg"
            type="text"
            name="email"
            required
          />
          <label className="mb-[10px]" htmlFor="psw">
            <b>Your Password</b>
          </label>
          <input
            className="mb-[15px] rounded-lg"
            type="password"
            name="psw"
            required
          />
          <div className="forgot-pwd mb-[50px]">
            <a className="ml-[5px] mr-[60px] whitespace-nowrap" href="">
              Forgot password?
            </a>

            <h6 className="mr-[5px] whitespace-nowrap" href="">
              Don't have an account?
            </h6>

            <a className="whitespace-nowrap" href="">
              Sign Up
            </a>
          </div>

          <button className="login-btn" type="submit">
            Login
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
