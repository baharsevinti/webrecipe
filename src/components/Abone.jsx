import React, { useState } from 'react';

const Abone = () => {
  const [kartBilgileri, setKartBilgileri] = useState({
    kartNumarasi: '',
    sonKullanmaTarihi: '',
    guvenlikKodu: '',
    adSoyad: '',
  });
  const [abonelikTipi, setAbonelikTipi] = useState('aylik');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setKartBilgileri({ ...kartBilgileri, [name]: value });
  };

  const handleAbonelikOlustur = () => {
    // Kart bilgilerini kullanarak abonelik oluşturulabilir.
    const { kartNumarasi, sonKullanmaTarihi, guvenlikKodu, adSoyad } = kartBilgileri;
    const abonelikBilgileri = {
      abonelikTipi,
      kartNumarasi,
      sonKullanmaTarihi,
      guvenlikKodu,
      adSoyad,
    };
    console.log('Abonelik oluşturuldu:', abonelikBilgileri);
    // Burada gerçek bir ödeme işlemi entegrasyonu yapılmalıdır.
  };

  return (
    <div>
      <h2>Abonelik Oluştur</h2>
      <div>
        <label>
          Abonelik Tipi:
          <select value={abonelikTipi} onChange={(e) => setAbonelikTipi(e.target.value)}>
            <option value="aylik">Aylık</option>
            <option value="yillik">Yıllık</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Kart Numarası:
          <input type="text" name="kartNumarasi" value={kartBilgileri.kartNumarasi} onChange={handleInputChange} />
        </label>
      </div>
      <div>
        <label>
          Son Kullanma Tarihi:
          <input type="text" name="sonKullanmaTarihi" value={kartBilgileri.sonKullanmaTarihi} onChange={handleInputChange} />
        </label>
      </div>
      <div>
        <label>
          Güvenlik Kodu:
          <input type="text" name="guvenlikKodu" value={kartBilgileri.guvenlikKodu} onChange={handleInputChange} />
        </label>
      </div>
      <div>
        <label>
          Ad Soyad:
          <input type="text" name="adSoyad" value={kartBilgileri.adSoyad} onChange={handleInputChange} />
        </label>
      </div>
      <button onClick={handleAbonelikOlustur}>Abonelik Oluştur</button>
    </div>
  );
};

export default Abone;
