import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';
import { useStateValue } from '../StateProvider';
import './Navbar.css';

function Navbar({h1title,h1description}) {

    const [{basket,user}] = useStateValue();
    const history = useHistory();

    const [sidebar, setsidebar] = useState(false);

    const handleAuthentication = () =>{
        if(user){
          auth.signOut();
        }
      }

    const menuHandler = ()=> {
        setsidebar(sidebar=>{
            return sidebar = !sidebar
        });
    }

    const closeMobileMenu = () => setsidebar(false);

    return (
        <div className='navbar'>

            <div className='navbar__header'>
                <span className='navbar__headerFont' style={{color:'black',fontWeight:'647'}}>{h1title}</span>
                <span className='navbar__headerFont' style={{color:'#242424'}}>{h1description}</span>
            </div>

            <nav className='navbar__container'>
            <div className='navbar__menuLogo' onClick={menuHandler}>
                    <i className={sidebar ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                    <Link to='/'>
                    <span className='page__title'>Spree<span style={{fontSize:'0.6rem',color:'#ff790b'}}>.in</span></span>
                    </Link>
                <div className='navbar__main'>                    
                    <div className='navbar__option'>
                        <ul className={sidebar ? 'nav-menu active' : 'nav-menu'} >
                            <li >
                            <Link className='navbar__options' to='/fashion' onClick={closeMobileMenu}>
                            FASHION
                            </Link>
                            </li>
                            <li>
                            <Link className='navbar__options' to='/healthandbeauty' onClick={closeMobileMenu}>
                            HEALTH&BEAUTY
                            </Link>
                            </li>
                            <li >
                            <Link className='navbar__options' to='/electronics' onClick={closeMobileMenu}>
                            ELECTRONICS
                            </Link>
                            </li>
                            <li >
                            <Link className='navbar__options' to='/groceries' onClick={closeMobileMenu}>
                            GROCERIES
                            </Link>
                            </li>
                        </ul>
                    </div>
                    
                    <div style={{display:'flex'}} className='navbar__user'>
                        <div className='navbar__input'>
                                <input type="text" placeholder="&#xF002; Search" className="font-family:Arial, FontAwesome" />
                        </div>
                        <div className='navbar__userInfo'>
                            <Link to={!user && '/login'} style={{color:'white'}}>
                                <div className="header__option" onClick={handleAuthentication}>
                                    <div className="header__optionLineOne">{user ? <span>{user?.email}</span> : <span>Hello,</span>}</div>
                                    <div className="header__optionLineTwo">{user ? <span>Sign Out</span> : <span>Login</span>}</div>
                                </div>
                            </Link>                                                                {/* <i className="far fa-user userInfo__icons" style={{marginLeft:'5px'}}></i>  */}
                            <button className={user ? 'show' : 'cart__item'} onClick={e=>history.push('/cart')}>
                                <span className='showUserInfo hide'>Cart</span>
                                {/* <div style={{display:'flex'}}> */}
                                <span className="item__count">{basket.length}</span>
                                <i class="fas fa-shopping-cart userInfo__icons" style={{marginLeft:'5px'}}></i>
                                {/* </div> */}
                            </button>
                        </div>
                    </div>
                </div>
                </nav>
        </div>
    )
}

export default Navbar
