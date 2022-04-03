import React, { useState, useEffect } from 'react';
import HappyFox from '../../assets/images/happy-fox.jpg';
import SadFox from '../../assets/images/sad-fox.jpg';
import InfoSection from '../../components/InfoSection';

const ethereum = window.ethereum;

async function getAddress() {
  const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
  const account = accounts[0];
  return account;
}

const AccountPage = () => {
  const [address, setAddress] = useState('');

  ethereum.on('accountsChanged', (accounts: any) => {
    setAddress(accounts[0]);
  });

  useEffect(() => {
    getAddress().then((address) => setAddress(address));
  }, []);

  if (address) return <InfoSection imageLink={HappyFox} header="Your MetaMask Address is" message={address} />;
  return <InfoSection imageLink={SadFox} header="Oops!" message="MetaMask is locked - please login" />;
};

export default AccountPage;
