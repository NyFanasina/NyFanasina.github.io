export default function AddressCard({ Icon, value }) {
  return (
    <div className="flex items-center gap-2 font-sans">
      <Icon size={21} /> <span>{value}</span>
    </div>
  );
}
