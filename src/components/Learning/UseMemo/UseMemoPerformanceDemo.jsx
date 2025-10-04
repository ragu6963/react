import { useState, useMemo, useRef } from "react";

// 더 정확한 성능 측정을 위한 함수
function measurePerformance(fn, label) {
  const start = performance.now();
  const result = fn();
  const end = performance.now();
  console.log(`⏱️ ${label}: ${(end - start).toFixed(2)}ms`);
  return result;
}

// 무거운 계산 함수
function heavyCalculation(numbers) {
  console.log("🔥 계산 실행됨!");
  let result = 0;
  for (let i = 0; i < 1000000; i++) {
    result += numbers.reduce((sum, num) => sum + num, 0);
  }
  return result;
}

export default function UseMemoPerformanceDemo() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [otherState, setOtherState] = useState(0);
  const [renderCount, setRenderCount] = useState(0);
  const normalExecutionCount = useRef(0);
  const memoExecutionCount = useRef(0);

  // 렌더링 횟수 증가
  setRenderCount((prev) => prev + 1);

  console.log(`🔄 컴포넌트 렌더링됨 (${renderCount}번째)`);

  // 일반 함수 방식 - 매번 실행됨
  const normalResult = measurePerformance(() => {
    normalExecutionCount.current += 1;
    return heavyCalculation(numbers);
  }, "일반 함수");

  // useMemo 방식 - 의존성이 변경될 때만 실행됨
  const memoizedResult = useMemo(() => {
    memoExecutionCount.current += 1;
    return measurePerformance(() => heavyCalculation(numbers), "useMemo");
  }, [numbers]);

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        useMemo 성능 측정 데모
      </h2>

      <div className="bg-yellow-50 p-4 rounded-lg border-2 border-yellow-200">
        <p className="text-sm text-yellow-800 font-medium">
          💡 개발자 도구 콘솔을 열어서 성능 로그를 확인해보세요!
        </p>
        <p className="text-sm text-yellow-800">
          🔄 = 컴포넌트 렌더링, 🔥 = 계산 실행, ⏱️ = 실행 시간
        </p>
      </div>

      {/* 실행 횟수 통계 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">
            렌더링 횟수
          </h3>
          <div className="text-2xl font-mono font-bold text-blue-600">
            {renderCount}
          </div>
        </div>

        <div className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
          <h3 className="text-lg font-semibold text-red-800 mb-2">
            일반 함수 실행 횟수
          </h3>
          <div className="text-2xl font-mono font-bold text-red-600">
            {normalExecutionCount.current}
          </div>
        </div>

        <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
          <h3 className="text-lg font-semibold text-green-800 mb-2">
            useMemo 실행 횟수
          </h3>
          <div className="text-2xl font-mono font-bold text-green-600">
            {memoExecutionCount.current}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 일반 함수 결과 */}
        <div className="bg-red-50 p-4 rounded-lg border-2 border-red-200">
          <h3 className="text-lg font-semibold text-red-800 mb-2">
            일반 함수 방식
          </h3>
          <p className="text-sm text-red-600 mb-2">
            매 렌더링마다 계산 실행 (비효율적)
          </p>
          <div className="bg-white p-3 rounded border">
            <p className="font-mono text-lg">결과: {normalResult}</p>
          </div>
        </div>

        {/* useMemo 결과 */}
        <div className="bg-green-50 p-4 rounded-lg border-2 border-green-200">
          <h3 className="text-lg font-semibold text-green-800 mb-2">
            useMemo 방식
          </h3>
          <p className="text-sm text-green-600 mb-2">
            의존성 변경시에만 계산 실행 (효율적)
          </p>
          <div className="bg-white p-3 rounded border">
            <p className="font-mono text-lg">결과: {memoizedResult}</p>
          </div>
        </div>
      </div>

      {/* 컨트롤 패널 */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-4">성능 테스트</h3>

        <div className="space-y-6">
          {/* 숫자 배열 변경 */}
          <div>
            <label className="block text-sm font-medium mb-3">
              📊 숫자 배열 변경 (계산 재실행 유발)
            </label>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setNumbers([1, 2, 3, 4, 5])}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                [1,2,3,4,5]
              </button>
              <button
                onClick={() => setNumbers([6, 7, 8, 9, 10])}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                [6,7,8,9,10]
              </button>
              <button
                onClick={() => setNumbers([1, 1, 1, 1, 1])}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                [1,1,1,1,1]
              </button>
              <button
                onClick={() => setNumbers([100, 200, 300])}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                [100,200,300]
              </button>
            </div>
          </div>

          {/* 다른 상태 변경 */}
          <div>
            <label className="block text-sm font-medium mb-3">
              🔄 다른 상태 변경 (계산 재실행 안함)
            </label>
            <div className="flex gap-4 items-center">
              <button
                onClick={() => setOtherState((prev) => prev + 1)}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                카운터 증가
              </button>
              <button
                onClick={() => setOtherState((prev) => prev - 1)}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
              >
                카운터 감소
              </button>
              <span className="text-xl font-mono bg-white px-4 py-2 rounded border">
                {otherState}
              </span>
            </div>
          </div>

          {/* 리셋 버튼 */}
          <div>
            <button
              onClick={() => {
                setRenderCount(0);
                normalExecutionCount.current = 0;
                memoExecutionCount.current = 0;
                setOtherState(0);
                setNumbers([1, 2, 3, 4, 5]);
              }}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
            >
              🔄 통계 리셋
            </button>
          </div>
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800 font-medium mb-2">
            <strong>🧪 테스트 방법:</strong>
          </p>
          <ol className="text-sm text-blue-700 list-decimal list-inside space-y-1">
            <li>개발자 도구 콘솔을 열어주세요 (F12)</li>
            <li>"카운터 증가" 버튼을 여러 번 클릭해보세요</li>
            <li>
              일반 함수는 매번 🔥 로그와 ⏱️ 시간이 나오지만, useMemo는 나오지
              않습니다
            </li>
            <li>숫자 배열을 변경하면 둘 다 🔥 로그와 ⏱️ 시간이 나옵니다</li>
            <li>실행 횟수 통계를 통해 차이를 명확히 확인할 수 있습니다</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
