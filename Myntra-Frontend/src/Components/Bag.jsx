import { useDispatch, useSelector } from "react-redux";

import BagSummery from "./BagSummery";
import Footer from "./Footer";
import Header from "./Header";
import { bagAction } from "../Store/bagSlice";
import { MdDelete } from "react-icons/md";

function Bag() {
  const items = useSelector((store) => store.items);
  const bagItem = useSelector((store) => store.bag);
  const dispatch = useDispatch();

  function handelRemove(id) {
    console.log("remove");
    dispatch(bagAction.removeFromBag(id));
  }
  const finalItem = items.filter((item) => {
    const itemIndex = bagItem.indexOf(item.id);
    return itemIndex >= 0;
  });
  return (
    <main>
      <div className="bag-page">
        <div className="bag-items-container">
          {finalItem.map((item) => {
            return (
              <div className="bag-item-container">
                <div className="item-left-part">
                  <img className="bag-item-img" src={item.image} />
                </div>
                <div className="item-right-part">
                  <div className="company">{item.company}</div>
                  <div className="item-name">{item.item_name}</div>
                  <div className="price-container">
                    <span className="current-price">
                      Rs {item.current_price}
                    </span>
                    <span className="original-price">
                      Rs {item.original_price}
                    </span>
                    <span className="discount-percentage">
                      ({item.discount_percentage}% OFF)
                    </span>
                  </div>
                  <div className="return-period">
                    <span className="return-period-days">
                      {item.return_period} days
                    </span>{" "}
                    return available
                  </div>
                  <div className="delivery-details">
                    Delivery by
                    <span className="delivery-details-days">
                      {item.delivery_date}
                    </span>
                  </div>
                </div>

                <div
                  className="remove-from-cart"
                  onClick={() => handelRemove(item.id)}
                >
                  <MdDelete />
                </div>
              </div>
            );
          })}
        </div>
        <BagSummery />
      </div>
    </main>
  );
}
export default Bag;
