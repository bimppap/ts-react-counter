export class ValueProps {
  count: number = 0;
}

export function Value({ count }: ValueProps) {
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}
