import Head from "next/head";

function Login() {
  const title = "Login Page"; // or a function that returns the title string

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <div>Esto es Login</div>
      </main>
    </div>
  );
}

export default Login;
