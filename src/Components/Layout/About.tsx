import photo from '../../assets/autor.jpg';

function About(props) {
  return (
    <section className='border-b-2 py-7'>
      <div className="container mx-auto text-center">
        
        <h3>about the author</h3>

        <img className='mx-auto' src={photo} alt="perfil photo" />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro corrupti dignissimos possimus nemo eaque? Beatae!
        </p>
      </div>
    </section>
  );
}

export default About;