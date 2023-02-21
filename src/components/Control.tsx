class CounterProps {
  onIncrease: () => void = createWarning("onIncrease");
  onDecrease: () => void = createWarning("onDecrease");
  onRandomizeColor: () => void = createWarning("onRandomizeColor");
}

export function createWarning(funcName: string) {
  return () => console.warn(funcName + "is not defined");
}

export function Control({
  onIncrease,
  onDecrease,
  onRandomizeColor,
}: CounterProps) {
  return (
    <div>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={onRandomizeColor}>Randomize Color</button>
    </div>
  );
}
