import React, { useState, useEffect } from "react";
import axios from "axios";
import SelectIngredients from "./SelectIngredients";

import { Modal, Button } from "antd";

const MakeRecipe = () => {
  const [etler, setEtler] = useState([]);
  const [sebzeler, setSebzeler] = useState([]);
  const [meyveler, setMeyveler] = useState([]);
  const [baklagiller, setBaklagiller] = useState([]);
  const [unlu_mamuller, setUnluMamuller] = useState([]);
  const [sut_urunleri, setSutUrunleri] = useState([]);
  const [baharatlar, setBaharatlar] = useState([]);
  const [tatlandiricilar, setTatlandiricilar] = useState([]);
  const [deniz_urunleri, setDenizUrunleri] = useState([]);
  const [tahillar, setTahillar] = useState([]);
  const [kuruyemisler, setKuruyemisler] = useState([]);
  const [sekerler, setSekerler] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [recipeText, setRecipeText] = useState("");

  const [result, setResult] = useState("");
  const [selectedItems, setSelectedItems] = useState({
    malzeme1: [],
    malzeme2: [],
    malzeme3: [],
    malzeme4: [],
    malzeme5: [],
    malzeme6: [],
    malzeme7: [],
    malzeme8: [],
    malzeme9: [],
    malzeme10: [],
    malzeme11: [],
    malzeme12: [],
  });

  //* Malzemeleri çekiyoruz
  useEffect(() => {
    axios
      .get("https://foodrecipee-69b7bbf0e36c.herokuapp.com/api/v1/food/all")
      .then((response) => {
        const data = response.data;

        setEtler(data.etler);
        setSebzeler(data.sebzeler);
        setMeyveler(data.meyveler);
        setBaklagiller(data.baklagiller);
        setUnluMamuller(data.unlu_mamuller);
        setSutUrunleri(data.sut_urunleri);
        setBaharatlar(data.baharatlar);
        setTatlandiricilar(data.tatlandiricilar);
        setDenizUrunleri(data.deniz_urunleri);
        setTahillar(data.tahillar);
        setKuruyemisler(data.kuruyemisler);
        setSekerler(data.sekerler);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  //* Malzemelerin seçilmeesini sağlayan metot
  const handleSelection = (event, selectName) => {
    const selectedOptions = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );

    // Eğer hiçbir şey seçilmediyse yazdırmıyoruz
    if (selectedOptions.length > 0) {
      // Seçilen değerleri güncelliyor
      setSelectedItems((prevValues) => ({
        ...prevValues,
        [selectName]: selectedOptions,
      }));

      // Konsola seçilen malzemeleri yazdırıyor
      console.log(`${selectName}: ${selectedOptions}`);
    }
  };

  //* Tarife istek atılan methot
  const getRecipe = () => {
    const combinedIngredients = Object.values(selectedItems).flat().join(", ");

    const postData = {
      liste: combinedIngredients,
    };

    axios
      .post("https://foodrecipee-69b7bbf0e36c.herokuapp.com/api/v1/", postData)
      .then((response) => {
        const { data } = response;
        setRecipeText(data.tarif); // Tarif metnini state'e kaydet
        setModalVisible(true); // Modal'ı göster
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="min-h-screen flex items-stretch justify-center bg-white ">
      <div>
        <p className="text-2xl text-center font-semibold mt-4 mb-4">
          Elindeki malzemeleri seç, benzersiz tarifin tadını çıkar!
        </p>

        <div className="bg-gray-300 p-2 rounded shadow-md w-[500] md:w-[80vw] h-[500px] md:h-[80vh] ">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3">
            <SelectIngredients
              value={selectedItems.malzeme1}
              label="Etler"
              options={etler}
              onChange={handleSelection}
            />
            <SelectIngredients
              value={selectedItems.malzeme2}
              label="Sebzeler"
              options={sebzeler}
              onChange={handleSelection}
            />
            <SelectIngredients
              value={selectedItems.malzeme3}
              label="Meyveler"
              options={meyveler}
              onChange={handleSelection}
            />
            <SelectIngredients
              value={selectedItems.malzeme4}
              label="Baklagiller"
              options={baklagiller}
              onChange={handleSelection}
            />
            <SelectIngredients
              value={selectedItems.malzeme5}
              label="Unlu Mamuller"
              options={unlu_mamuller}
              onChange={handleSelection}
            />
            <SelectIngredients
              value={selectedItems.malzeme6}
              label="Süt Ürünleri"
              options={sut_urunleri}
              onChange={handleSelection}
            />
            <SelectIngredients
              value={selectedItems.malzeme7}
              label="Baharatlar"
              options={baharatlar}
              onChange={handleSelection}
            />
            <SelectIngredients
              value={selectedItems.malzeme8}
              label="Tatlandırıcılar"
              options={tatlandiricilar}
              onChange={handleSelection}
            />
            <SelectIngredients
              value={selectedItems.malzeme9}
              label="Deniz Ürünleri"
              options={deniz_urunleri}
              onChange={handleSelection}
            />
            <SelectIngredients
              value={selectedItems.malzeme10}
              label="Tahıllar"
              options={tahillar}
              onChange={handleSelection}
            />
            <SelectIngredients
              value={selectedItems.malzeme11}
              label="Kuruyemişler"
              options={kuruyemisler}
              onChange={handleSelection}
            />
            <SelectIngredients
              value={selectedItems.malzeme12}
              label="Şekerler"
              options={sekerler}
              onChange={handleSelection}
            />
          </div>

          <div className="flex justify-center mt-4">
            {/* Düğme container'ı */}
            <button
              onClick={getRecipe}
              className="w-[350px] bg-blue-500 text-white p-2 rounded hover:bg-blue-700 mt-4 mb-4"
            >
              Tarif Al
            </button>
          </div>

          {/* Seçilen Malzemeler */}
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-2 underline decoration-2">
              Seçilen Malzemeler
            </h2>
            <div className="flex flex-wrap">
              {/* Seçilen malzemeleri görüntüleme */}
              {Object.entries(selectedItems).map(
                ([key, values]) =>
                  values.length > 0 && ( // Sadece seçilen bir malzeme varsa göster
                    <div key={key} className="mr-4 mb-2">
                      <span className="font-semibold">{key}:</span>{" "}
                      {values.join(", ")}
                    </div>
                  )
              )}
            </div>
          </div>

          {/* Recipe Modal */}
          <Modal
            title={
              <span
                style={{
                  fontSize: "22px",
                  fontWeight: "bold",
                }}
              >
                Tarif
              </span>
            }
            centered
            open={modalVisible}
            onCancel={() => setModalVisible(false)}
            footer={null}
          >
            <p className="text-base font-semibold">{recipeText}</p>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default MakeRecipe;
