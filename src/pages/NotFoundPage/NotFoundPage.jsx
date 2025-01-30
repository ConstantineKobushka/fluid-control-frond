import imgBg from '../../../public/img/not-found-page-bg.jpg';
import imgBg2x from '../../../public/img/not-found-page-bg@2x.jpg';

import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={css.bg}>
      <picture>
        <source media='(max-width: 1440px)' srcSet={`${imgBg} 1x, ${imgBg2x} 2x`} type='image/jpg' />
        <img src={imgBg} alt='Page not found' loading='lazy' />
      </picture>
    </div>
  );
};

export default NotFoundPage;
