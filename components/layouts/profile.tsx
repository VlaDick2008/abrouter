import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Footer from '../Footer';
import ProfileNav from '../ProfileNav';

import styles from '../ProfileNav/ProfileNav.module.scss';

import EqualizerIcon from '@mui/icons-material/Equalizer';
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

import logoDark from '../../public/logo-dark.webp';
import { useRouter } from 'next/router';

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = (props) => {
  const [currentTab, setCurrentTab] = React.useState(1);

  const profile = React.useRef<HTMLHeadingElement>(null);

  const router = useRouter();

  React.useEffect(() => {
    if (router.route === '/') {
      profile.current.style.display = 'none';
    }
  }, [router.route]);

  return (
    <div className="page">
      <main className="profile-main">
        <div ref={profile} className={styles.navBlock}>
          <div className={styles.navLogo}>
            <Image className="site-logo" layout="fixed" alt="logo" src={logoDark} />
          </div>
          <nav className={styles.navPanel}>
            <button
              onClick={() => {
                setCurrentTab(1);
              }}
              className={currentTab == 1 ? styles.profileNavBtnActive : styles.profileNavBtn}>
              <EqualizerIcon />{' '}
              <div className={styles.profileNavBtnText}>
                <Link href="/profile/experiments">
                  <a>Experiments</a>
                </Link>
              </div>
            </button>
            <button
              onClick={() => {
                setCurrentTab(2);
              }}
              className={currentTab == 2 ? styles.profileNavBtnActive : styles.profileNavBtn}>
              <LegendToggleIcon />{' '}
              <div className={styles.profileNavBtnText}>
                <Link href="/profile/statistics">
                  <a>Statistics</a>
                </Link>
              </div>
            </button>
            <button
              onClick={() => {
                setCurrentTab(3);
              }}
              className={currentTab == 3 ? styles.profileNavBtnActive : styles.profileNavBtn}>
              <PeopleOutlineIcon />
              <div className={styles.profileNavBtnText}>
                <Link href="/profile/feature-flags">
                  <a>Feature flags</a>
                </Link>
              </div>
            </button>
            <button
              onClick={() => {
                setCurrentTab(4);
              }}
              className={currentTab == 4 ? styles.profileNavBtnActive : styles.profileNavBtn}>
              <HelpOutlineIcon />
              <div className={styles.profileNavBtnText}>
                <Link href="/profile/help">
                  <a>Help</a>
                </Link>
              </div>
            </button>
            <button
              onClick={() => {
                setCurrentTab(5);
              }}
              className={currentTab == 5 ? styles.profileNavBtnActive : styles.profileNavBtn}>
              <ArticleOutlinedIcon />{' '}
              <div className={styles.profileNavBtnText}>
                <Link href="/profile/docs">
                  <a>Docs</a>
                </Link>
              </div>
            </button>
          </nav>
        </div>
        <div>{props.children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
