import bgImage  from '../../assets/capa-livro.jpg';
import Button from '../Input/Button';

function Header(props) {
  return (
    <header className=''>
      <div className="container mx-auto text-center">

      <h1 className='text-3xl font-bold'>the artificial age</h1>

      <img src={ bgImage } alt="half of a woman's face with silver color" />

      <h2 className='text-l font-bold'>a dark future on our way</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis non consequuntur quam nesciunt 
        magnam eum quis iusto id aperiam 
        itaque! Excepturi, omnis fuga quae adipisci harum error.
         Repudiandae laboriosam, tempora magnam ipsa aut iure,
        aliquid aliquam magni culpa molestiae voluptatum harum obcaecati quo. 
        Fugit vel, nobis sapiente tempora non perspiciatis.
      </p>

      <Button msg='buy' />
      
      </div>
    </header>
  );
}

export default Header;