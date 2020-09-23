export default () => {
  if (typeof window !== 'undefined') {
    window.location.replace('/');
  }

  return null;
};
