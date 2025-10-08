 import logo from '../Img/logo.png';
import { Link, } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import sonido from '../Sounds/sonido.mp3'
function Games (){
    const navegacion = useNavigate();
    const ejecutarSonido =()=>{
        const audio = new Audio(sonido);
        audio.play();
    };


    const manejarClickImagen =()=>{

        //haga cualquier cosas//
        ejecutarSonido();
        navegacion("/");
    };
   

    return(
        <>
       <h1> <Link to="/">Home</Link></h1>
      
        <img src={logo} width="100%" onClick={manejarClickImagen} />
        </>
   
    )
};
 export default Games