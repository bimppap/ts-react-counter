export class ColorProps {
  colors: number[] = [255, 255, 255];
}

export function Color({ colors }: ColorProps) {
  return { background: `rgb(${colors[0]}, ${colors[1]}, ${colors[2]})` };
}
