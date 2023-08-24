import bgImage  from '../../assets/capa-livro.jpg';
import Button from '../Input/Button';

function Header(props) {
  return (
    <header className='border-b-2 py-7'>
      <div className="container mx-auto text-center">

      <h1 className='mb-3 capitalize text-3xl font-bold'>the artificial age</h1>

      <img className='mb-4 mx-auto' src={ bgImage } alt="half of a woman's face with silver color" />

      <h2 className='mb-4 capitalize text-2xl font-bold'>a dark future on our way</h2>

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