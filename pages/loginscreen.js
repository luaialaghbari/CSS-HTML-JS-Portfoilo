import Head from 'next/head';

export default function LoginScreen() {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <section style={{minHeight:'60vh', display:'grid', placeItems:'center'}}>
        <div style={{background:'#0f1117', border:'1px solid #1f2937', padding:'2rem', borderRadius:'1rem', width:'100%', maxWidth:420}}>
          <h1 className="title gradient-text" style={{marginBottom:'1rem'}}>Login</h1>
          {/* Replace with real form if needed */}
          <form onSubmit={(e)=>{e.preventDefault();}} className="contact-form">
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button className="btn btn-color-1" type="submit">Sign In</button>
          </form>
        </div>
      </section>
    </>
  );
}
