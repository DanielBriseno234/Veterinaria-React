function Error( {mensaje} ) {
  return (
    <div className="bg-red-800 text-white text-center py-2 mb-3 rounded-md">
      <p>{mensaje}</p>
    </div>
  );
}

export default Error;
