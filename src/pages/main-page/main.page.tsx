import { object } from "yup";
import BaseContainer from "../../components/common/base-container/base-container.wrapper";
import {
  productsApi,
  useGetFiltersMutation,
} from "../../store/api/products/products.api";
import { useTranslations } from "../../hooks/useTranslations";
import { useEffect, useState } from "react";

const MainPage = () => {
  //@ts-ignore
  const [getFilters, { data }] = useGetFiltersMutation();
  const { lang } = useTranslations();
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    console.log(filters);

    getFilters(filters);
  }, [filters]);
  useEffect(() => {
    console.log(data);
  }, [data]);
  const handleFilterClick = (filterKey: any, value: any) => {
    const existingFilterIndex = filters.findIndex(
      (filter) => filter.key === filterKey
    );

    if (existingFilterIndex !== -1) {
      // Filter with the given key exists, so we update its values
      const updatedFilters = [...filters];
      const existingFilter = updatedFilters[existingFilterIndex];
      const existingValues = existingFilter.values;

      if (existingValues.includes(value)) {
        // Value already exists, so we remove it
        existingFilter.values = existingValues.filter((val) => val !== value);
      } else {
        // Value doesn't exist, so we add it
        existingFilter.values = [...existingValues, value];
      }

      // Check if values array is empty, if so, remove the entire object
      if (existingFilter.values.length === 0) {
        updatedFilters.splice(existingFilterIndex, 1);
      }

      setFilters(updatedFilters);
    } else {
      // Filter with the given key doesn't exist, so we add it
      setFilters([...filters, { key: filterKey, values: [value] }]);
    }
  };

  if (!data) {
    return <>loading..</>;
  }
  return (
    <BaseContainer>
      {data.map((filter: any) => {
        return (
          <div key={filter.key}>
            <h2>{filter.values[0].translations[lang].labelT}</h2>
            <div>
              {filter.values.map((el: any) => {
                if (typeof el === "object") {
                  if (el?.count) {
                    return (
                      <p
                        key={el.filterKey}
                        onClick={() =>
                          handleFilterClick(
                            filter?.key,
                            el?.translations?.en?.valueT
                          )
                        }
                      >
                        {el?.translations[lang]?.valueT}: {el?.count}
                      </p>
                    );
                  }
                  return (
                    <p
                      style={{ color: "green", fontWeight: "bold" }}
                      onClick={() =>
                        handleFilterClick(
                          filter?.key,
                          el?.translations?.en?.valueT
                        )
                      }
                    >
                      {el?.translations[lang]?.valueT}
                    </p>
                  );
                }
                return null;
              })}
            </div>
          </div>
        );
      })}
    </BaseContainer>
  );
};

export default MainPage;
