import { SetURLSearchParams } from "react-router-dom";

export const formatQueryParams = (
  searchParams: URLSearchParams,
  setSearchParams: SetURLSearchParams,
  filterKey: string,
  value: string
) => {
  const newParams = searchParams;

  if (["gt", "lt", "page"].includes(filterKey)) {
    newParams.set(filterKey, value);
  } else if (filterKey === "sort") {
    newParams.set(filterKey, value);
    newParams.set("page", "1");
  } else {
    const currentValues = newParams.getAll(filterKey);
    const index = currentValues.indexOf(value);

    if (index !== -1) {
      currentValues.splice(index, 1);
    } else {
      currentValues.push(value);
    }

    if (currentValues.length > 0) {
      newParams.set(filterKey, currentValues.join(","));
    } else {
      newParams.delete(filterKey);
    }
  }

  setSearchParams(newParams);
};
