function GoogleAuthButton() {
  async function googleAuth(e) {
    e.preventDefault();
    window.open(`${import.meta.env.VITE_REACT_API_URL}/auth/google/callback`);
  }

  return (
    <button
      onClick={googleAuth}
      className="relative mx-auto my-5 flex h-10 cursor-pointer items-center
       justify-center rounded-lg border-none bg-white px-2
        text-base font-semibold text-gray-700 shadow-md outline-none"
    >
      <img
        src="./images/google.png"
        alt="google icon"
        className="h-7 w-7 object-cover"
      />
      <span className="ml-2">Sign in with Google</span>
    </button>
  );
}

export default GoogleAuthButton;
