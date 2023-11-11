export const FOOTER_HEIGHT = 13;

const Footer = () => (
  <footer className={`flex justify-end h-[${FOOTER_HEIGHT * 4}px] p-4`}>
    <a
      className='text-sm md:text-md text-light-gray hover:text-secondary'
      href='https://github.com/towerbrother'
      title='Github towerbrother'
      target='_blank'
      rel='noreferrer'
    >
      Designed &amp; built by Giorgio Torre
    </a>
  </footer>
);

export default Footer;
