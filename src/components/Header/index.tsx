import React from 'react';
import Link from 'next/link';

import { SingInButton } from '../SingInButton';
import { useRouter } from 'next/router';
import { ActiveLink } from '../ActiveLink';

import styles from './styles.module.scss';

export function Header() {
  const { asPath } = useRouter();

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/logo.svg" alt="ig.news" />
        <nav>
          <ActiveLink activeClassName={styles.active} href="/">
            <a>Home</a>
          </ActiveLink>
          <ActiveLink activeClassName={styles.active} href="/posts" prefetch>
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SingInButton />
      </div>
    </header>
  );
}
