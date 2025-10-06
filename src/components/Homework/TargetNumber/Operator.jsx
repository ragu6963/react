export default function Operator({ onClick }) {
  return (
    <div className="bg-gray-50 p-4 border border-gray-200">
      <div className="flex gap-3 justify-center">
        <button
          onClick={() => onClick("+1")}
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 cursor-pointer"
        >
          +1
        </button>
        <button
          onClick={() => onClick("-1")}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 cursor-pointer"
        >
          -1
        </button>
        <button
          onClick={() => onClick("*2")}
          className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 cursor-pointer"
        >
          ×2
        </button>
      </div>
    </div>
  );
}
