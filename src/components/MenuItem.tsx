import { Link } from "react-router-dom";

interface ItemProp {
  idCategory: string;
  strCategory: string;
}

interface MenuItemProp {
  item: ItemProp;
}

function MenuItem({ item }: MenuItemProp) {
  const { idCategory: id, strCategory: name } = item;

  return (
    <Link
      to={`/menu/${name}`}
      key={id}
      className="bg-cream py-3 px-5 text-center font-bold group hover:bg-cream/70 rounded-md text-black sm:text-sm"
    >
      <p className="">{name}</p>
    </Link>
  );
}

export default MenuItem;
