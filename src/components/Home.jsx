import homePage from "../assets/imagenes/HomePage.png";

export default function Home() {
 
  return (
    <div>
      <img
        src={homePage}
        style={{ maxWidth: "100%", height: "90vh", objectFit:'cover' }}
        alt="Landing"
      />
    </div>
  );
}
