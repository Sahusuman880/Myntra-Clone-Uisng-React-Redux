import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../Store/bagSlice";
import { BiSolidCartAdd } from "react-icons/bi";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

import { FiHeart } from "react-icons/fi";
import { IoIosHeart } from "react-icons/io";
import { wishListAction } from "../Store/wishListSlice";

function HomeItems() {
  const items = useSelector((store) => store.items);
  const bagItem = useSelector((store) => store.bag);
  const wishList = useSelector((store) => store.WishList);
  console.log(bagItem);
  const dispatch = useDispatch();
  const handeleAddToBag = (id) => {
    dispatch(bagAction.addToBag(id));
  };

  const handeleRemoveFromBag = (id) => {
    dispatch(bagAction.removeFromBag(id));
  };

  const handelAddToWishlist = (id) => {
    dispatch(wishListAction.addToWishlist(id));
  };
  const handeleRemoveFromwishList = (id) => {
    dispatch(wishListAction.removeFromWishlist(id));
  };

  return (
    <main>
      <div className="items-container">
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
                {wishList.includes(item.id) ? (
                  <button
                    className="wishList-btn"
                    onClick={() => handeleRemoveFromwishList(item.id)}
                  >
                    <IoIosHeart />
                  </button>
                ) : (
                  <button
                    className="wishList-btn"
                    onClick={() => handelAddToWishlist(item.id)}
                  >
                    <FiHeart />
                  </button>
                )}
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
            </div>
          );
        })}
      </div>
    </main>
  );
}
export default HomeItems;
