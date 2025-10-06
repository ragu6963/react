export default function TargetNumber({ targetNumber, minCount, count }) {
  return (
    <div className="bg-blue-50 p-4 border border-blue-200">
      <div className="space-y-2">
        <p className="text-gray-700">
          <span className="font-medium">목표 숫자:</span>
          <span className="text-blue-600 font-bold ml-2">{targetNumber}</span>
        </p>
        <p className="text-gray-700">
          <span className="font-medium">최소 시도 횟수:</span>
          <span className="text-green-600 font-bold ml-2">{minCount}</span>
        </p>
        <p className="text-gray-700">
          <span className="font-medium">현재 시도 횟수:</span>
          <span className="text-orange-600 font-bold ml-2">{count}</span>
        </p>
      </div>
    </div>
  );
}
