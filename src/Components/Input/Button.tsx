type options  = {
  msg: string
}

function Button( { msg }: options) {
  return (
    <button className="bg-green-500 text-white font-bold uppercase py-2 px-5 rounded-md">{ msg }</button>
  );
}

export default Button;