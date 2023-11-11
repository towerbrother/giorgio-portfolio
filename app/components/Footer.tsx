export const FOOTER_HEIGHT = 13;

const Footer = () => (
  <footer
    className={`flex justify-center md:justify-end h-[${
      FOOTER_HEIGHT * 4
    }px] py-4 px-8`}
  >
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
