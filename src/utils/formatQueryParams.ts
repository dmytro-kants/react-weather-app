import { SetURLSearchParams } from "react-router-dom";

export const formatQueryParams = (
  searchParams: URLSearchParams,
  setSearchParams: SetURLSearchParams,
  filterKey: string,
  value: string
) => {
  const newParams = searchParams;

  if (filterKey === "gt" || filterKey === "lt") {
    if (newParams.has(filterKey)) {
      newParams.set(filterKey, value);
    } else {
      newParams.append(filterKey, value);
    }
  } else {
    let currentValues = newParams.getAll(filterKey);
    currentValues = currentValues[0]?.split(",") || [];

    if (currentValues.includes(value)) {
      currentValues = currentValues.filter((val) => val !== value);
    } else {
      currentValues.push(value);
    }

    if (currentValues.length > 0) {
      newParams.set(filterKey, currentValues.join(","));
    } else {
      newParams.delete(filterKey);
    }
  }

  setSearchParams(newParams.toString());
};
