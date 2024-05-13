import React, { useState } from 'react';

const PaymentScreen = () => {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [securityCode, setSecurityCode] = useState('');
  const [expirationMonth, setExpirationMonth] = useState('');
  const [expirationYear, setExpirationYear] = useState('');
  const [subscriptionType, setSubscriptionType] = useState('monthly');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleCreditCardNumberChange = (event) => {
    setCreditCardNumber(event.target.value);
  };

  const handleSecurityCodeChange = (event) => {
    setSecurityCode(event.target.value);
  };

  const handleExpirationMonthChange = (event) => {
    setExpirationMonth(event.target.value);
  };

  const handleExpirationYearChange = (event) => {
    setExpirationYear(event.target.value);
  };

  const handleSubscriptionTypeChange = (event) => {
    setSubscriptionType(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Ödemeyi işlemek için kod buraya gelecek
    console.log('Ödeme işleniyor...');

    // Üyeliği oluşturmak için kod buraya gelecek
    console.log(subscriptionType, 'üyeliği oluşturuluyor...');
  };

  return (
    <div className="payment-screen">
      <h1>Ödeme</h1>

      <form onSubmit={handleSubmit}>
        <div className="payment-method">
          <label>Ödeme Yöntemi:</label>
          <select value={paymentMethod} onChange={handlePaymentMethodChange}>
            <option value="creditCard">Kredi Kartı</option>
          </select>
        </div>

        {paymentMethod === 'creditCard' && (
          <div className="credit-card-details">
            <h2>Kredi Kartı Bilgileri</h2>
            <div className="credit-card-inputs">
              <label>Kredi Kartı Numarası:</label>
              <input
                type="text"
                value={creditCardNumber}
                onChange={handleCreditCardNumberChange}
              />

              <label>Güvenlik Kodu:</label>
              <input
                type="text"
                value={securityCode}
                onChange={handleSecurityCodeChange}
              />

              <label>Son Kullanma Tarihi:</label>
              <div className="expiration-date">
                <select value={expirationMonth} onChange={handleExpirationMonthChange}>
                  <option value="">Ay</option>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </select>

                <select value={expirationYear} onChange={handleExpirationYearChange}>
                  <option value="">Yıl</option>
                  {Array.from({ length: 10 }, (_, index) => new Date().getFullYear() + index).map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        <div className="subscription-type">
          <h2>Üyelik Tipi</h2>
          <select value={subscriptionType} onChange={handleSubscriptionTypeChange}>
            <option value="monthly">Aylık</option>
            <option value="yearly">Yıllık</option>
          </select>
        </div>

        <button type="submit">Ödemeyi Yap</button>
      </form>
    </div>
  );
};

export default PaymentScreen;
