import React from "react";
import "./style.css";
import blogPhoto from "../Components/Assests/blogs/guven.png";
export default function FirstBlog() {
  return (
    <div className="blog-container">
      <h1>Güven Nasıl Öğrenilir? Kaygılı Bağlanma Nasıl Düzelir?</h1>

      <p>
        İnsan ilişkilerinde güven ve bağlanma kavramları, hayati öneme sahiptir.
        Bu kavramlar, bir bireyin kendini başka birine güvenle bağlayabilmesi,
        duygusal sağlamlık kazanabilmesi ve sağlıklı ilişkiler kurabilmesi için
        gereklidir. Peki, güven ve bağlanma nasıl gelişir ve neden bazılarımız
        için daha zor olabilir?
      </p>
      <p>
        İlk olarak, güvenli bağlanmanın temellerini ele alalım. Bir bebek için,
        annenin sunduğu duygusal ve fiziksel uyum, dünyayı güvenli ve sevgi dolu
        bir yer olarak algılamasını sağlar. Bu güvenli bağlanma, ileriki
        ilişkilerinde de temel bir referans noktası olacaktır. Ancak, bazı
        durumlarda bu uyum sağlanamaz ve güvensiz bağlanma gelişir.
      </p>
      <img src={blogPhoto} alt="Blog" />
      <p>
        Güvensiz bağlanma, genellikle anne ile bebeğin uyumsuzluğu veya annenin
        yetersiz destek sağlayabilmesi durumunda ortaya çıkar. Bu durumda, bebek
        çevresini güvensiz ve kaygı verici bir yer olarak algılar. Bu da,
        ileriki ilişkilerinde güven sorunları yaşamasına neden olabilir.
      </p>
      <p>
        Peki, güven ve bağlanma nasıl geliştirilebilir? İşte burada epigenetik
        devreye girer. Epigenetik, çevresel etkenlerin gen ifadesini nasıl
        etkileyebileceğini gösterir. Yani, yaşam tarzı faktörleri ve çevresel
        etkenler, güven ve bağlanma üzerinde belirleyici bir rol oynar. Bu da
        demektir ki, kişinin yaşamının kontrolü tamamen dış etkenler tarafından
        belirlenmez; aksine, kişi bu etkenler üzerinde değişiklik yapabilir ve
        ilişkilerinde güveni ve bağlanmayı geliştirebilir.
      </p>
      <p>
        Sonuç olarak, güven ve bağlanma ilişkilerimizin temel taşlarıdır. Bu
        kavramları anlamak ve geliştirmek, sağlıklı ve tatmin edici ilişkiler
        kurmamıza yardımcı olacaktır. İçsel güven ve dışsal uyum, birbirini
        tamamlayarak, hayatımızı daha anlamlı hale getirebilir.
      </p>
      <h3>https://www.hiwellapp.com/blog/guven-nasil-ogrenilir</h3>
    </div>
  );
}
