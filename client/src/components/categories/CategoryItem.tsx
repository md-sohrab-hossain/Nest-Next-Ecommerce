import Link from "next/link";

interface CategoryItemProps {
  name: string;
  href: string;
  slug: string;
  isSelected: boolean;
  icon: React.ReactNode;
}

const CategoryItem = ({ name, icon, isSelected, href }: CategoryItemProps) => {
  const baseStyles =
    "flex items-center justify-center gap-2 px-3 py-2 rounded-md cursor-pointer transition-all duration-200 text-sm";

  const activeStyles =
    "bg-white text-black shadow-sm font-semibold ring-1 ring-gray-200";

  const inactiveStyles = "text-gray-600 hover:bg-gray-200 hover:text-black";

  return (
    <li>
      <Link
        href={href}
        scroll={false}
        className={`${baseStyles} ${isSelected ? activeStyles : inactiveStyles}`}
      >
        <span>{icon}</span>
        <span>{name}</span>
      </Link>
    </li>
  );
};

export default CategoryItem;
