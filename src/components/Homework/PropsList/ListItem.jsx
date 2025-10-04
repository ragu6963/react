export default function ListItem({ item, onClick }) {
  return (
    <>
      <h1 className="text-2xl font-bold text-center  ">
        No. {item.id} {item.name}
        <button
          className="border-2 border-blue-500 ml-2 p-2 cursor-pointer"
          onClick={() => onClick(item.name)}
        >
          클릭
        </button>
      </h1>
    </>
  );
}
