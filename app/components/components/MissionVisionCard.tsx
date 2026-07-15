interface MissionVisionCardProps {
  label: string;
  title: string;
  description: string;
}

export default function MissionVisionCard({
  label,
  title,
  description,
}: MissionVisionCardProps) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition">
      <span className="text-sm uppercase tracking-wider text-[#c14511] font-medium">
        {label}
      </span>

      <h3 className="mt-3 text-2xl font-semibold text-gray-900">{title}</h3>

      <p className="mt-4 text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
