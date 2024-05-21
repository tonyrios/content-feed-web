import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.sass';

export const Header = () => {
  return (
    <header className={styles.Header}>
      <Image src={'/logo.png'} alt="logo" width={50} height={50} />
      <h1>My Content Feeds</h1>
    </header>
  );
};
