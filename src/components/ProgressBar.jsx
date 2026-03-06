export default function ProgressBar({ value }) {
  const percent = Math.round(value * 100);

  return (
    <div className="progressWrap" aria-label={`Progress: ${percent}%`}>
      <div className="progressText">{percent}%</div>
      <div className="progressTrack">
        <div className="progressFill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}