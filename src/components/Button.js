const string = `Irgendwas anderes: ${1 + 2}`;

export default function Button() {
  return (
    <button
      onClick={(brokkoli) => {
        console.log(brokkoli);
      }}
    >
      {string}
    </button>
  );
}
