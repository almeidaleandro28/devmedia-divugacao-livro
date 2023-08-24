type options  = {
  msg: string
}

function Button( { msg }: options) {
  return (
    <button className="mt-4 bg-green-500 text-white font-bold uppercase 
        py-2 px-5 rounded-md
        focus:ring-green-300 hover:bg-green-700"
                  >{ msg }</button>
  );
}

export default Button;