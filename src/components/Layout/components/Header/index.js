import className from 'classnames/bind';
import style from './Hearder.module.scss';

const cx = className.bind(style);

function Header() {
   return (
      <header className={cx('wrapper')}>
         <div className={cx('inner')}>{/* Logo */}</div>
      </header>
   );
}

export default Header;
