interface CoreValueCardProps {
  title: string;
  description: string;
}

export default function CoreValueCard({
  title,
  description,
}: CoreValueCardProps) {
  return (
    <div className="group rounded-2xl bg-white p-6 shadow-sm hover:shadow-lg transition">
      <h4 className="text-lg font-semibold text-gray-900 group-hover:text-[#c14511] transition">
        {title}
      </h4>

      <p className="mt-3 text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}
