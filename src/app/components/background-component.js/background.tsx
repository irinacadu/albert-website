import Image from 'next/image';
// import styles from './background-image.css';

const Background = () =>{

return (
    <div >
      <h1>Hello, Next.js!</h1>
      <Image
        src="/images/albert-image.png"
        alt="Alber Roig Duarte"
        width={200}
        height={200}
       
      />
    </div>
  );
};

export default Background;