import React,{Component} from 'react';
import './home-page.css';
import {Link} from 'react-router-dom';
import Line from './img/Line.png';
import F1lorence3 from './img/F1lorence3.png';
import F2lorence3 from './img/F2lorence3.png';
import F3lorence3 from './img/F3lorence3.png';
import Frees from './video/Frees.mp4';
import Frees21 from './video/Frees21.ogg';
import Kuhna from './img/Kuhna.png';
import Line1 from './img/Line1.png';
import Ellips1e from './img/Ellips1e.png';
import Hole from './img/Hole.png';
import Vannaua from './img/Vannaua.png';
import Gray2 from './img/Gray2.png';
import Divanuui from './img/Divanuui.png';
import Krovatit from './img/Krovatit.png';
import Matrasci from './img/Matrasci.png';
import Line228 from './img/Line228.png';
class HomePage extends Component{
    componentDidMount(){
      window.scrollTo(0,0);
      document.getElementById('slide1').click()
    }
    render(){
        return(
            <div>
<div className="wrapper">
	<input type="radio" name="point" id="slide1"/>
	<input type="radio" name="point" id="slide2"/>
	<input type="radio" name="point" id="slide3"/>
	<div className="slider">
		<div className="slides slide1">
                    <div><img src={F1lorence3}/></div>
                    <div className="phone_adaptedstyle_01">
                        <h1 className="first_slide_txt_file">СОЗДАЕМ ЭКСКЛЮЗИВНУЮ МЕБЕЛЬ С 2000 ГОДА</h1>
                        <p className="first_slide_txt2_file">Мы изготавливаем мебель в Алматы. Наша производственная площадь - более 8.000 кв.м. За 19 лет работы мы наладили собственные поставки мебельной фурнитуры из Европы. Мы - эксперты в мебельном бизнесе. Делайте правильный выбор</p>
                    </div>
        </div>
		<div className="slides slide2">
        <div><img src={F2lorence3}/></div>
                    <div className="phone_adaptedstyle_01">
                    <h1 className="first_slide_txt_file">ЧТО ЗНАЧИТ ЭКСКЛЮЗИВНАЯ МЕБЕЛЬ?</h1>
                        <p className="first_slide_txt2_file">Мы беремся за проекты любой сложности.<br/> Нестандартная дизайнерскую мебель - наш профиль</p>
                    </div>
        </div>
		<div className="slides slide3">
        <div><img src={F3lorence3}/></div>
                    <div className="phone_adaptedstyle_01">
                    <h1 className="first_slide_txt_file">ЗАПОЛНЯЕМ ПРОСТРАНСТВО ЛЮБОГО ФОРМАТА</h1>
                        <p className="first_slide_txt2_file">Создаем мебель на заказ как для жилищных,<br/> так и для общественных помещений</p>
                    </div>
        </div>
	</div>	
	<div className="controls">
		<label htmlFor="slide1"></label>
		<label htmlFor="slide2"></label>
		<label htmlFor="slide3"></label>
	</div>
 
</div>
<p className="predator_line_for_2ds"><img src={Line228}/></p>





            <main>

                <section className="aside_forp_xte1_fathervid">
                <video autoplay className="aside_forp_xte1_videos1" controls>
                        <source src={Frees} type="video/mp4"/>
                        <source src={Frees21} type="video/ogg"/>
                </video>
                <div className="firth3teg_in_homepage2">
                <h3>ИЗГОТОВЛЕНИЕ ДИЗАЙНЕРСКОЙ МЕБЕЛИ</h3>
                <p className="firth3teg_in_homepage222">Воплотим в жизнь Ваш проект интерьера мечты</p>
                <p className="addafter_removeall1">Наши мастера обеспечены всем необходимым оборудованием и материалами для мебельного<br/> производства. И меют богатый опыт созданий уникальных образцов моделей различных стилей.</p>
               
                </div>
                </section>
                <section className="mebel_na_zakaz_homepage">
                    <h1>МЕБЕЛЬ НА ЗАКАЗ</h1>
                    <div className="flex_div_kuhnia_homepage">
                            <div className="flex_div_kuhnia_immg"><img src={Kuhna} alt="freestyle"/></div>
                            <div className="flex_div_kuhniah22"><h2>Кухни</h2><img className="line1_png_formain" src={Line1}/><br/><img className="ellipse_png_formain"  src={Ellips1e}/></div>
                            <div className="flex_div_kuhniah22221"><h3> Кухня "Florence"</h3>
                                <p className="text_div_kuhna_1">У этой кухни классическая оболочка, и современное технологичное сердце.</p>
                                <p className="text_div_kuhna_1">Взгляд на традиции, эксклюзивность и изящество.</p>
                                <p className="text_div_kuhna_2">Кухня Florence поражает аристократичным и выдержанным оформлением.</p>
                            </div>
                    </div>
                    <div className="flex_div_kuhnia_homepage1">
                    <div className="right_to_left_div_hole"><h3> Гостинная "Элегия".</h3>
                                <p className="text_div_kuhna_1">Создаем дизайнерские решения гостиных в ритме жизни современных семей.</p>
                                
                            </div>
                            <div className="oracle_dotahref1"><h2>Гостинные</h2><img className="latin_lane_for_underline" src={Line1}/><br/><img className="sharik_vniz_for_hole"  src={Ellips1e}/></div>
                            <div className="flex_div_kuhnia_immg"><img src={Hole} alt="freestyle"/></div>    
                    </div>
                    <div className="roof_for_last_one_rei19">
                    <div className="flex_div_kuhnia_immg"><img src={Gray2} alt="freestyle"/></div> 
                    <div className="oracle_dotahref1"><h2>Спальни</h2><img className="latin_lane_for_underline" src={Line1}/><br/><img className="sharik_vniz_for_hole"  src={Ellips1e}/></div> 
                    <div className="fixedlasonepropblecm"><h3> Спальня "Moris".</h3>
                                <p className="text_div_kuhna_1">Итальянский дизайн, четкие линии и натуральные текстуры- это и есть гармоничное сочетание высокого дизайна и комфорта.</p> 
                            </div>         
                    </div>
                    <div className="flex_div_kuhnia_homepage1">
                    <div className="right_to_left_div_hole"><h3> Ванная "Асти".</h3>
                                <p className="text_div_kuhna_1">Место уединения и максимального комфорта. Новые проекты эргономичных и дизайнерских решений ванных комнат.</p>   
                            </div>
                            <div className="oracle_dotahref1"><h2>Ванные</h2><img className="latin_lane_for_underline" src={Line1}/><br/><img className="sharik_vniz_for_hole"  src={Ellips1e}/></div>
                            <div className="flex_div_kuhnia_immg"><img src={Vannaua} alt="freestyle"/></div>    
                    </div>
                
                </section>
                <section className="mebel_na_zakaz_homepage">
                <h1>МЕБЕЛЬ ИЗ ИТАЛИИ</h1>
                        <div className="flex_for_divani_matraci">
                            <div className="flex_for_divanielement1">
                                <h4>Диваны</h4>
                                <img src={Divanuui} alt=""/>
                            </div>
                            <div className="flex_for_divanielement2"><h4>Матрасы</h4>
                                <img src={Matrasci} alt=""/>
                                </div>
                            <div className="flex_for_divanielement3"><h4>Кровати</h4>
                                <img src={Krovatit} alt=""/>
                                </div>
                        </div>
                </section>
            </main>
       </div>
        )
    }
}

export default HomePage