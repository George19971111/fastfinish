import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './headertop.css';
import Lnterfase from './img/Lnterfase.png';
import Search from './img/Search.png';
import Menuphone from './img/Menuphone.png';
import Close from './img/Close.png';

class Header extends Component {
    constructor(props){
        super(props)
        this.state={
            lastScrollY :0
        }
    }
    componentDidMount() {
      
      }
      finbutburger(e){
          document.getElementById('yellowcardmusic1').classList.add('pos1122absltor_me1122nutop');
          document.getElementById('omg_close_foricon1').classList.add('roooflerrrodlroooflerrrodl');
          document.getElementById('omg_close_foricon111').classList.add('invis_for_norwistnwidt');
          document.getElementById('yellowcardmusic1').classList.remove('pos1122absltor_me1s2122nutop2s');

      }
      finbutburgercloser(e){
        document.getElementById('omg_close_foricon111').classList.remove('invis_for_norwistnwidt');
        document.getElementById('omg_close_foricon1').classList.remove('roooflerrrodlroooflerrrodl');
        document.getElementById('yellowcardmusic1').classList.remove('pos1122absltor_me1122nutop')
        document.getElementById('yellowcardmusic1').classList.add('pos1122absltor_me1s2122nutop2s');
      }
    render(){
    return(
        <header id="" className="header_top_for_all">
           <div className="header_top_for_div_out">
                <div className="button_burger_meni_fe" ><img id="omg_close_foricon111" onClick={(e)=>{this.finbutburger(e)}} src={Menuphone} alt=""/><img id="omg_close_foricon1"  className="roooflerrrodl" onClick={(e)=>{this.finbutburgercloser(e)}} src={Close}/></div>
               
                <div className="header_top_for_div_text1"><h1><Link to='/'>freestyle studio</Link></h1></div>
                <div className="for_searcher_header"><div className="for_searcher_header_onbe"><Link to='/contact'><img src={Lnterfase} alt=""/></Link></div><div><img src={Search} alt=""/></div></div> 
           </div>
           <div id="yellowcardmusic1" className="posabsltor_menutop">
            
             <nav className="dddlll_llooeel">
                 <ul id=""  className="">
                     <li>
                         <Link to = "/">
                            Главная
                         </Link>
                     </li>
                     <li className="">
                         <Link to = "/blog">
                             Блог
                         </Link>
                     </li>
                     <li className="">
                     <Link to = "/aboutus">
                             О нас
                         </Link>
                     </li>
                     <li className="">
                     <Link to = "/contact">
                            Контакты
                         </Link>
                     </li>
                 </ul>
             </nav>

             </div>
        </header>
      
    )
    }
}
export default Header;