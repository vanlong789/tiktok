import Header from '~/components/Layout/components/Header';
import Sidebar from './Sidebar';
import className from 'classnames/bind';
import defaultLayout from './DefaultLayout.module.scss';

const cx = className.bind(defaultLayout);
function DefaultLayout({ children }) {
   return (
      <div className={cx('wrapper')}>
         <Header />
         <div className={cx('container')}>
            <Sidebar />
            <div className={cx('content')}>{children}</div>
         </div>
      </div>
   );
}

export default DefaultLayout;
