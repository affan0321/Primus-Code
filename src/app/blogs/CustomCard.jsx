import Image from 'next/image';
import styles from './CustomCard.module.css';

const CustomCard = () => {
  return (
    // <div className={styles.card}>
    //   <div className={styles.imageCap}>
    //     <Image
    //       src="/Rectangle 4.png"
    //       alt="Card Image"
    //       width={400}
    //       height={250}
    //       className={styles.image}
    //     />
    //   </div>
    //   <div className={styles.content}>
    //     <h3 className={styles.title}>Card Title</h3>
    //     <p className={styles.text}>
    //       This is a brief description that explains the content of the card. You can customize this text to fit your needs.
    //     </p>
    //   </div>
    // </div>

    <div className="card">
  <img src="/Rectangle 4.png" alt="Card Image" className="card-image" />
  <div className="card-body">
    <h3 className="card-title">Card Title</h3>
    <p className="card-text">Some quick example text...</p>
  </div>
</div>
  );
};

export default CustomCard;
