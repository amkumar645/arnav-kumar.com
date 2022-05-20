import './index.scss';
import LogoComp from '../../../assets/images/logo_ak.png';

const Logo = () => {

    return (
        <div className='logo-container'>
            <img className='solid-logo' src={LogoComp} alt="Logo"></img>
        </div>
    )
}

export default Logo;