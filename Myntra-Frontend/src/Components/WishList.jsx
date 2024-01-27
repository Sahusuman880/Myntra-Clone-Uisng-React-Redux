import { useDispatch, useSelector } from "react-redux";
import { wishListAction } from "../Store/wishListSlice";
import { BiSolidCartAdd } from "react-icons/bi";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import EmptyMessage from "./EmptyMessage";
import { bagAction } from "../Store/bagSlice";
import { IoHeartDislike } from "react-icons/io5";

function WishList() {
  const item = useSelector((store) => store.items);
  const wishListItem = useSelector((store) => store.WishList);
  const bagItem = useSelector((store) => store.bag);
  const dispatch = useDispatch();

  function handeleRemoveFromwishList(id) {
    console.log("remove");
    dispatch(wishListAction.removeFromWishlist(id));
  }

  const handeleAddToBag = (id) => {
    dispatch(bagAction.addToBag(id));
  };

  const handeleRemoveFromBag = (id) => {
    dispatch(bagAction.removeFromBag(id));
  };
  const items = item.filter((item) => {
    const itemIndex = wishListItem.indexOf(item.id);
    return itemIndex >= 0;
  });
  return (
    <main>
      <div className="items-container">
        {items.length === 0 ? <EmptyMessage /> : null}
        {items.map((item, index) => {
          return (
            <div className="item-container">
              <img className="item-image" src={item.image} alt="item image" />
              <div className="rating">
                {item.rating.stars} ⭐ | {item.rating.count}
              </div>
              <div className="company-name">{item.company}</div>
              <div className="item-name">{item.item_name}</div>
              <div className="price">
                <span className="current-price">Rs {item.current_price}</span>
                <span className="original-price">Rs {item.original_price}</span>
                <span className="discount">
                  ({item.discount_percentage}% OFF)
                </span>
              </div>

              {bagItem.includes(item.id) ? (
                <button
                  type="button"
                  className="btn btn-add-bag btn-danger "
                  onClick={() => handeleRemoveFromBag(item.id)}
                >
                  <MdOutlineRemoveShoppingCart />
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-success btn-add-bag"
                  onClick={() => handeleAddToBag(item.id)}
                >
                  <BiSolidCartAdd />
                </button>
              )}
              {wishListItem.includes(item.id) ? (
                <button
                  className=" btn btn-add-bag btn-danger"
                  onClick={() => handeleRemoveFromwishList(item.id)}
                >
                  <IoHeartDislike />
                </button>
              ) : null}
            </div>
          );
        })}
      </div>
    </main>
  );
}
export default WishList;
