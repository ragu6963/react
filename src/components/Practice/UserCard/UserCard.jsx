export default function UserCard() {
  return (
    <>
      <div class="w-80 bg-white rounded-xl shadow-md overflow-hidden">
        <div class="p-6">
          <div class="flex justify-center mb-4">
            <img
              class="w-24 h-24 rounded-full object-cover"
              src={userData.profileImage}
              alt="사용자 프로필"
            />
          </div>
          <div class="text-center">
            <h2 class="text-xl font-semibold text-gray-900 mb-2">
              {userData.name}
            </h2>
            <p class="text-gray-600 mb-1">{userData.age}세</p>
            <p class="text-blue-600 font-medium">{userData.email}</p>
          </div>
        </div>
      </div>
    </>
  );
}
