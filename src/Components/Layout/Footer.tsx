import Button from "../Input/Button";

function Footer() {
  return (
    <footer className="py-7">
      <div className="container mx-auto text-center">
        
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, voluptates accusamus? Sint illo omnis libero sunt facere est incidunt consequuntur, reprehenderit maiores accusantium deserunt ratione.
        </p>

        <p className="font-bold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis blanditiis praesentium neque fuga consectetur quisquam maiores odio, ut ullam eos repellat. Earum officiis ratione quaerat.
        </p>

        <Button msg="buy" />
      </div>
    </footer>
  );
}

export default Footer;