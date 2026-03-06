export default function Controls({
  onPrev,
  onNext,
  onFlip,
  disablePrev,
  disableNext,
  isFlipped
}) {
  return (
    <div className="controls">
      <button onClick={onPrev} disabled={disablePrev}>
        Prev
      </button>

      <button onClick={onFlip}>
        {isFlipped ? "Show Question" : "Show Answer"}
      </button>

      <button onClick={onNext} disabled={disableNext}>
        Next
      </button>
    </div>
  );
}