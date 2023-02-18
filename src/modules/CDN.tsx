export default function CDN() {
  return (
    <>
      {/* fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo+Narrow&family=PT+Sans&display=swap"
        rel="stylesheet"
      />
      <script
        src="https://kit.fontawesome.com/d8f21f0808.js"
        crossorigin="anonymous"
      ></script>

      {/* Bootstrap  */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
        crossOrigin="anonymous"
      ></link>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossOrigin="anonymous"
      ></script>

      {/* Gsap */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/ScrollTrigger.min.js"></script>
      <link rel="icon" href="/favicon.ico" />

      {/* aos animation  */}
      <link
        href="https://unpkg.com/aos@2.3.1/dist/aos.css"
        rel="stylesheet"
      ></link>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    </>
  );
}
