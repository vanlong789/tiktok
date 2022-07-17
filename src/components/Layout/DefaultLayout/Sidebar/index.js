import className from 'classnames/bind';
import style from './Sidebar.module.scss';

const cx = className.bind(style);

function Sidebar() {
   return (
      <aside className={cx('wrapper')}>
         <div className={cx('sidebar')}>
            <div>Dành cho bạn</div>
         </div>
      </aside>
   );
}

export default Sidebar;
