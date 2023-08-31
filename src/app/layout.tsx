// import "./styles/style.css";
// import "./styles/flaticon.css";
// import "./styles/icomoon.css";
// import "./styles/aos.css";
// import "./styles/ionicons.min.css";
// import "./styles/magnific-popup.css";
// import "./styles/owl.theme.default.min.css";
// import "./styles/animate.css";
// import "./styles/open-iconic-bootstrap.min.css";
// import "./styles/Font/FontAwesome/all.min.css";
import type { Metadata } from "next";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { WhatsAppChat } from "./components/WhatsAppChat";

export const metadata: Metadata = {
  title: "Sure Smart Career Counseling",
  description: "Sure Smart career counseling ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans:300,400,,500,600,700"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="./styles/style.css"></link>
        <link rel="stylesheet" href="./styles/flaticon.css"></link>
        <link rel="stylesheet" href="./styles/icomoon.css"></link>
        <link rel="stylesheet" href="./styles/aos.css"></link>
        <link rel="stylesheet" href="./styles/ionicons.min.css"></link>
        <link rel="stylesheet" href="./styles/magnific-popup.css"></link>
        <link rel="stylesheet" href="./styles/owl.theme.default.min.css"></link>
        <link rel="stylesheet" href="./styles/animate.css"></link>
        <link
          rel="stylesheet"
          href="./styles/open-iconic-bootstrap.min.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </head>

      <body>
        <Header />
        {children}
        <WhatsAppChat />
        <Footer />
        <script src="./js/jquery-3.3.1.js"></script>
        <script src="./js/bootstrap-4.1.3.js"></script>
      </body>
    </html>
  );
}
