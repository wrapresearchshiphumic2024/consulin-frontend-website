export default function TextSection({ title, subtitle }) {
  return (
    <div>
      <h2 className="text-netral-primary text-3xl md:text-5xl font-bold">
        {title}
      </h2>
      <p className="mt-3 text-netral-primary font-medium">{subtitle}</p>
    </div>
  );
}
