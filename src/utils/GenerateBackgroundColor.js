export default function GenerateBackgroundColor(scroll) {
  return 0 <= scroll && scroll < 5050
    ? "#edbd64"
    : 7050 <= scroll && scroll < 12100
    ? "maroon"
    : 12100 <= scroll && scroll < 17650
    ? "#edbd64"
    : 17650 <= scroll && scroll < 22075
    ? "#A1ADFF"
    : 23100 <= scroll && scroll < 28150
    ? "black"
    : 28150 <= scroll && scroll < 31000
    ? "#FFEB3B"
    : "black";
}
