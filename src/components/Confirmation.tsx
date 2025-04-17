import converter from 'currency-exchanger-js'
import { useEffect, useState } from 'react';

type ConfirmationProps = {
  recap: {
    username: string;
    email: string;
    phone: string;
    address: string;
    total: number;
  }
}

const Confirmation = ({ recap: { username, total }}: ConfirmationProps) => {
  const [convertedAmout, setConvertedAmount] = useState<number>(0);

  useEffect(() => {
    const convertCurrency = async (amount: number) => {
      return await converter.convert(amount, 'USD', 'CZK');
    }
    convertCurrency(total).then((converted) => setConvertedAmount(converted));
  }, [total]);

  return (
    <div className="text-xl">
      User: {username}<br />
      Total amount: ${total.toFixed(2)} ({convertedAmout.toFixed(2)} CZK)
    </div>
  );
};

export default Confirmation;