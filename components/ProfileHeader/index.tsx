import * as React from 'react';
import Image from 'next/image';
import styles from './ProfileHeader.module.scss';

import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

import avatar from '../../public/avatar2.jpg';

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <header className={styles.contentHeader}>
      <div className={styles.contentHeaderWrapper}>
        <button className={styles.tokenField}>Your Token ID</button>
        <div className={styles.searchBtn}>
          <SearchIcon />
        </div>
        <div className={styles.notificationsBtn}>
          <NotificationsNoneIcon />
        </div>
        <div className={styles.avatar}>
          <Image layout="fixed" width={35} height={35} alt="logo" src={avatar} />
        </div>
        <div className={styles.username}>
          Alex Yatsenko
          <svg
            width="11"
            height="6"
            viewBox="0 0 11 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.68568 0.266515L5.50492 3.80182L9.32416 0.266515C9.70805 -0.0888383 10.3282 -0.0888383 10.7121 0.266515C11.096 0.621868 11.096 1.1959 10.7121 1.55125L6.19396 5.73349C5.81007 6.08884 5.18993 6.08884 4.80604 5.73349L0.287919 1.55125C-0.0959731 1.1959 -0.0959731 0.621868 0.287919 0.266515C0.671812 -0.0797267 1.30179 -0.0888383 1.68568 0.266515Z"
              fill="#9699AB"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default App;
