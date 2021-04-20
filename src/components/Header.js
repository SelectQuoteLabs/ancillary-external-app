import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core';
import { useSession } from 'next-auth/client';
import { IconButtonMenu, SystemHeader } from 'scplus-shared-components';

const useStyles = makeStyles(() => {
  return {
    accountIcon: {
      height: '32px',
      width: '32px',
      color: 'var(--color-white)',
    },
  };
});

// 💡 Change the backgroundColor and Title
export default function Header() {
  const [session] = useSession();
  const router = useRouter();
  const classes = useStyles();

  const AccountIcon = () => {
    return <AccountCircleIcon className={classes.accountIcon} />;
  };
  const menuItems = [
    {
      id: 1,
      label: session ? 'Sign out' : 'Sign in',
      isDisabled: false,
      onClick: () => {
        if (session) {
          router.push('/auth/signout');
        } else {
          router.push('/auth/signin');
        }
      },
    },
  ];

  return (
    <SystemHeader
      backgroundColor="var(--color-seniorOrange)"
      productTitle="Skeleton UI"
      headerComponents={
        <IconButtonMenu
          IconComponent={AccountIcon}
          tooltipTitle="Account"
          menuItems={menuItems}
          placement="bottom"
        />
      }
    />
  );
}
