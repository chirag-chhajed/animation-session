export function Video() {
  return (
    <video width={500} controls preload="none">
      <source src="/checkbox.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
