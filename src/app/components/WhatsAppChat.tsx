export const WhatsAppChat = () => {
  const phoneNumber = "7350837127";
  const message = encodeURIComponent(
    "Hi, I would like to have a call for counseling."
  );
  const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
  return (
    <div className="whatapp-Container">
      <a
        className="whatsapp-icon-link"
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp whatsapp-icon"></i>
      </a>
    </div>
  );
};
