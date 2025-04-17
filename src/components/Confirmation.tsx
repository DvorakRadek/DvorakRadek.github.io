type ConfirmationProps = {
  recap: {
    username: string;
    email: string;
    phone: string;
    address: string;
    total: number;
  },

}

const Confirmation = ({ recap: { username, email, phone, address, total }}: ConfirmationProps) => {
  return (
    <div>
      User: {username} - {email} - {phone} - {address} - {total.toFixed(2)}
      Total amount: ${total.toFixed(2)}
    </div>
  );
};

export default Confirmation;