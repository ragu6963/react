import { useState } from "react";
import axios from "axios";
import CartListByUser from "./CartListByUser";

export default function CartSearchByUser() {
  const [userId, setUserId] = useState("");
  const [cart, setCart] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleChange(event) {
    setUserId(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetchData();
  }

  async function fetchData() {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://dummyjson.com/carts/user/${userId}`
      );
      if (response.data.carts.length > 0) {
        setCart(response.data.carts[0]);
      } else {
        setCart({});
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  function reset() {
    setUserId("");
    setCart({});
    setLoading(false);
    setError(null);
  }

  if (loading) {
    return <div className="text-center p-8 text-lg">로딩중...</div>;
  }

  if (error) {
    return (
      <>
        <div className="text-center p-8 text-red-600">에러가 발생했습니다.</div>
        <button
          className="bg-blue-500 text-white px-4 py-2 border border-blue-500 mx-auto block"
          onClick={() => {
            reset();
          }}
        >
          돌아가기
        </button>
      </>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="User ID"
            value={userId}
            onChange={handleChange}
            className="flex-1 border border-gray-300 px-3 py-2"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 border border-blue-500"
          >
            검색
          </button>
        </div>
      </form>
      {Object.keys(cart).length > 0 ? (
        <CartListByUser cart={cart} />
      ) : (
        <div className="text-center p-8 text-red-600">
          사용자의 카트가 존재하지 않습니다.
        </div>
      )}
    </div>
  );
}
