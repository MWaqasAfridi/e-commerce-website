import React from 'react';
import Lottie from 'react-lottie';
import notFound from '../../../notFound.json';

const NoPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: notFound,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.animationWrapper}>
        <Lottie options={defaultOptions} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
    overflow: 'hidden'
  },
  animationWrapper: {
    width: '100%',
    maxWidth: '500px',  // maximum width of the animation for larger screens
    padding: '10px',    // optional padding for spacing
  }
};

export default NoPage;
