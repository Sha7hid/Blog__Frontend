import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import React,{ useState } from 'react';
export const getStaticProps = async () => {
    const res = await fetch('https://blogbackend-production-af81.up.railway.app/api/blogs');
    const data = await res.json();
    return{
      props:{results:data}
    }
  }
  
export default function Published({results}) {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
    return (
        <><Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <h2 className={styles.navBrand}>BlogIT</h2>
                </Navbar.Brand>
                <Link href='/' className={styles.navlink}>
            Home
          </Link>
          <Link href='/published' className={styles.navlink}>
            Published
          </Link>
            </Container>
        </Navbar>
        <style jsx>{`
h1 {
  font-family: 'Mochiy Pop One', sans-serif;
}
p {
  font-family: 'Kalam', cursive;
}
`}</style>
      {results.map(result =>(
      <><div>
              <h1 className={styles.heading}>{result.heading}</h1>
              <p className={styles.date}>Published on {result.date}</p><br />
              <div className={styles.image}>
                  <img src={result.image} width='590' height='450' alt='' />
              </div>
              <p className={styles.content}> {isReadMore ? result.content.slice(0, 250) : result.content}</p>
              <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
          </div>
          <p className={styles.content}>❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️❄️</p></>
     ) 
     )}
      </>
     
   

  
  
    );


}