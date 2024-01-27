import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ItemAction } from "../Store/ItemSlice";
import { FetchStatusAction } from "../Store/FetchStatusSlice";

function FetchItem() {
  const fetchStatus = useSelector((store) => store.FetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) {
      return;
    }
    const controller = new AbortController();
    const signal = controller.signal;
    // dispatch(FetchStatusAction.MarkFetchingStarted());

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        // dispatch(FetchStatusAction.markFetchDone());
        // dispatch(FetchStatusAction.MarkFetchingFinished());
        dispatch(ItemAction.addInitialItems(items[0]));
        // console.log(items);
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return <></>;
}
export default FetchItem;
