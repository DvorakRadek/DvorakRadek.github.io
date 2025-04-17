type ConfirmationProps = {
  recap: {
    username: string;
    email: string;
    phone: string;
    address: string;
    total: number;
  },

}

const Confirmation = ({ recap: { username, total }}: ConfirmationProps) => {
  return (
    <div className="text-xl">
      User: {username}<br />
      Total amount: ${total.toFixed(2)}
    </div>
  );
};

export default Confirmation;