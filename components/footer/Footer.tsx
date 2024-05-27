
import './footer.css';

export default function Footer() {
  return (
    <div className='footer'>
      <p>جميع الحقوق محفوظة
        <a href='https://litesoftit.com/' target='_blank' rel='noopener noreferrer'> لايت سوفت ©</a>  {new Date().getFullYear()}</p>
    </div>
  );
}
