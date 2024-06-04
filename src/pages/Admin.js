import React, { useState, useEffect } from "react";
import Navbar from "../Components/NavBar";
import videoBg from "../Components/Assests/login.mp4";
import AdminTable from "../Components/AdminTable";
import axios from "axios";
const AdminPage = () => {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState("");
  const [searchId, setSearchId] = useState("");
  const [data, setData] = useState([]);
  const [option, setOption] = useState("A");
  const [showTable, setShowTable] = useState(false);
  const [isButtonPressed, setisButtonPressed] = useState(false);
  const [answerskpso] = useState(Array(6).fill(-1));
  const [answerstsgo] = useState(Array(21).fill(-1));
  const [answerspndo] = useState(Array(20).fill(-1));
  const [answersdaso] = useState(Array(21).fill(-1));
  const [displayPndoCount, setDisplayPndoCount] = useState(1); 
  const [displayKpsoCount, setDisplayKpsooCount] = useState(1); 
  const [displayTsgoCount, setDisplayTsgoCount] = useState(1); // State to manage the count of PNDO displays
  const [displayDasoCount, setDisplayDasoCount] = useState(1); // State to manage the count of PNDO displays
  useEffect(() => {
    // Fetch clients assigned to admin
    fetch("/api/clients")
      .then((response) => response.json())
      .then((data) => setClients(data));
  }, []);

  const handleClientChange = (event) => {
    setSelectedClient(event.target.value);
    fetchClientData(event.target.value, option);
  };

  const handleSearchChange = (event) => {
    setSearchId(event.target.value);
  };

  const handleSearchSubmit = () => {
    fetchClientData(searchId, option);
  };

  const handleOptionChange = (option) => {
    setOption(option);
    setisButtonPressed(true);
    // 'A', 'B', 'C', 'D' seçeneklerinde tablo göster
    setShowTable(["A", "B", "C", "D","F","E"].includes(option)); 
    if (['A', 'B', 'C', 'D'].includes(option)) {
      setDisplayPndoCount(2);
    }
    fetchClientData(selectedClient || searchId, option);
  };

  const fetchClientData = (clientId, option) => {
    fetch(`/api/client/${clientId}/data?option=${option}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  return (
    <div>
      <Navbar />
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />
      <div className="content">
        <div className="admin-page">
          <h1>Admin İşlemleri</h1>
          <div className="controls">
            <div className="combo-box">
              <label htmlFor="clients">Danışan Seçiniz: </label>
              <select
                id="clients"
                value={selectedClient}
                onChange={handleClientChange}
              >
                <option value="">-- Danışan Seçiniz --</option>
                <option value="">-- Gizem Sağdıç --</option>
                {clients.map((client) => (
                  <option key={client.id} value={client.id}>
                    {client.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="search-box">
              <input
                type="text"
                value={searchId}
                onChange={handleSearchChange}
                placeholder="ID ile Danışan Sorgula "
              />
              <button onClick={handleSearchSubmit}>Sorgula</button>
            </div>
          </div>
          <div className="options">
            <button onClick={() => handleOptionChange("A")}>Kpso Ölçeği</button>
            <button onClick={() => handleOptionChange("B")}>Pndo Ölçeği</button>
            <button onClick={() => handleOptionChange("C")}>Daso Ölçeği</button>
            <button onClick={() => handleOptionChange("D")}>Tsgo Ölçeği</button>
            <button onClick={() => handleOptionChange("E")}>DDVP Sonuç</button>
            <button onClick={() => handleOptionChange("F")}> Hasta Profili</button>
          </div>

          {showTable && option == "A" && (
             <div className="admintestcontent">
             <div className="admintest-container">
              <AdminTable
                headers = {["Soru", "Hiç", "Çok az", "Orta düzeyde", "Sıklıkla", "Çok"]}
                questions = {[
                  "Sıkıntılı Zamanlardan sonra kendimi çabucak toparlayabilirim.",
                  "Stresli olayların üstesinden gelmekte güçlük çekerim.",
                  "Stresli durumlardan sonra kendime gelmem uzun zaman almaz.",
                  "Kötü bir şeyler olduğunda bunu atlatmak benim için zordur.",
                  "Zor zamanları çok az sıkıntıyla atlatırım.",
                  "Hayatımdaki olumsuzlukların etkisinden kurtulmam uzun zaman alır.",
                ]}
                answers={answerskpso}
                itemPerPage={2}
                testName={"Kpso Ölçeği"}
              />
              <AdminTable
                headers = {["Soru", "Hiç", "Çok az", "Orta düzeyde", "Sıklıkla", "Çok"]}
                questions = {[
                  "Sıkıntılı Zamanlardan sonra kendimi çabucak toparlayabilirim.",
                  "Stresli olayların üstesinden gelmekte güçlük çekerim.",
                  "Stresli durumlardan sonra kendime gelmem uzun zaman almaz.",
                  "Kötü bir şeyler olduğunda bunu atlatmak benim için zordur.",
                  "Zor zamanları çok az sıkıntıyla atlatırım.",
                  "Hayatımdaki olumsuzlukların etkisinden kurtulmam uzun zaman alır.",
                ]}
                answers={answerskpso}
                itemPerPage={2}
                testName={"Kpso Ölçeği"}
              />
               </div>
            </div>
            
          )}
          {showTable && option == "B" && (
             <div className="admintestcontent">
             <div className="admintest-container">
              <AdminTable
                headers = {["Soru", "Hiç", "Çok az", "Orta düzeyde", "Sıklıkla", "Çok"]}
                questions = {[
                 "İlgili",
                 "Sıkıntılı",
                 "Heyecanlı",
                 "Mutsuz",
                 "Güçlü",
                 "Suçlu",
                 "Ürkmüş",
                 "Düşmanca",
                 "Hevesli",
                 "Gururlu",
                 "Asabi",
                 "Uyanık",
                 "Utanmış",
                 "İlhamlı",
                "Sinirli",
                "Kararlı",
                "Dikkatli",
                "Tedirgin",
                "Aktif",
                "Korkmuş",
                ]}
                answers={answerspndo}
                itemPerPage={5}
                testName={"Pndo Ölçeği"}
              />
              <AdminTable
                headers = {["Soru", "Hiç", "Çok az", "Orta düzeyde", "Sıklıkla", "Çok"]}
                questions = {[
                 "İlgili",
                 "Sıkıntılı",
                 "Heyecanlı",
                 "Mutsuz",
                 "Güçlü",
                 "Suçlu",
                 "Ürkmüş",
                 "Düşmanca",
                 "Hevesli",
                 "Gururlu",
                 "Asabi",
                 "Uyanık",
                 "Utanmış",
                 "İlhamlı",
                "Sinirli",
                "Kararlı",
                "Dikkatli",
                "Tedirgin",
                "Aktif",
                "Korkmuş",
                ]}
                answers={answerspndo}
                itemPerPage={5}
                testName={"Pndo Ölçeği"}
              />
               </div>
            </div>
            
          )}
           {showTable && option == "C" && (
             <div className="admintestcontent">
             <div className="admintest-container">
              <AdminTable
                headers = {["Son 10 gündeki durumunuz (özellikle son 1 hafta)",
                            "Hiçbir zaman",
                            "Bazen ve ara sıra",
                            "Oldukça sık",
                            "Her zaman",]}
                questions = {[
                  "1.Gevşeyip rahatlamakta zorluk çektim.",
                  "2.Ağzımda kuruluk olduğunu fark ettim.",
                  "3.Hiç olumlu duygu yaşayamadığımı fark ettim.",
                  "4.Soluk almakta zorluk çektim(örneğin fiziksel egzersiz yapmadığım halde aşırı hızlı nefes alma,nefessiz kalma gibi).",
                  "5.Bir iş yapmak için gerekli olan ilk adımı atmakta zorlandım.",
                  "6.Olaylara aşırı tepki vermeye meyilliyim.",
                  "7.Vücudumda (örneğin ellerimde) terlemeler oldu.",
                  "8.Sinirsel enerjimi çok fazla kullandığımı hissettim.",
                  "9.Panikleeyip kendimi aptal durumuna düşüreceğim durumlar nedeniyle endişelendim.",
                  "10.Hiçbir beklentimin olmadığı hissine kapıldım.",
                  "11.Kışkırtılmakta olduğumu hissettim.",
                  "12.Kendimi gevşetip salıvermek zor geldi.",
                  "13.Kendimi perişan ve üzgün hissettim.",
                  "14.Beni yaptığım işten alıkoyan şeylere dayanamıyordum.",
                  "15.Panik haline yakın olduğumu hissettim.",
                  "16.Hiçbir şey bende heyecan uyandırmıyordu",
                  "17.Birey olarak değersiz olduğumu hissettim.",
                  "18.Alıngan olduğumu hissettim.",
                  "19.Fiziksel egzersiz söz konusu olmadığı halde kalbimin hareketlerini hissettim(kalp atışlarımın hızlandığını veya düzensizleştiğini hissettim).",
                  "20.Geçerli bir neden olmadığı halde korktuğumu hissettim.",
                  "21.Hayatın anlamsız olduğu hissine kapıldım.",
                ]}
                answers={answersdaso}
                itemPerPage={2}
                testName={"Daso Ölçeği"}
              />
              <AdminTable
                headers = {["Son 10 gündeki durumunuz (özellikle son 1 hafta)",
                            "Hiçbir zaman",
                            "Bazen ve ara sıra",
                            "Oldukça sık",
                            "Her zaman",]}
                questions = {[
                  "1.Gevşeyip rahatlamakta zorluk çektim.",
                  "2.Ağzımda kuruluk olduğunu fark ettim.",
                  "3.Hiç olumlu duygu yaşayamadığımı fark ettim.",
                  "4.Soluk almakta zorluk çektim(örneğin fiziksel egzersiz yapmadığım halde aşırı hızlı nefes alma,nefessiz kalma gibi).",
                  "5.Bir iş yapmak için gerekli olan ilk adımı atmakta zorlandım.",
                  "6.Olaylara aşırı tepki vermeye meyilliyim.",
                  "7.Vücudumda (örneğin ellerimde) terlemeler oldu.",
                  "8.Sinirsel enerjimi çok fazla kullandığımı hissettim.",
                  "9.Panikleeyip kendimi aptal durumuna düşüreceğim durumlar nedeniyle endişelendim.",
                  "10.Hiçbir beklentimin olmadığı hissine kapıldım.",
                  "11.Kışkırtılmakta olduğumu hissettim.",
                  "12.Kendimi gevşetip salıvermek zor geldi.",
                  "13.Kendimi perişan ve üzgün hissettim.",
                  "14.Beni yaptığım işten alıkoyan şeylere dayanamıyordum.",
                  "15.Panik haline yakın olduğumu hissettim.",
                  "16.Hiçbir şey bende heyecan uyandırmıyordu",
                  "17.Birey olarak değersiz olduğumu hissettim.",
                  "18.Alıngan olduğumu hissettim.",
                  "19.Fiziksel egzersiz söz konusu olmadığı halde kalbimin hareketlerini hissettim(kalp atışlarımın hızlandığını veya düzensizleştiğini hissettim).",
                  "20.Geçerli bir neden olmadığı halde korktuğumu hissettim.",
                  "21.Hayatın anlamsız olduğu hissine kapıldım.",
                ]}
                answers={answersdaso}
                itemPerPage={2}
                testName={"Daso Ölçeği"}
              />
              </div>
              </div>
           
            
          )}
            {showTable && option == "D" && (
                <div className="admintestcontent">
                  <div className="admintest-container">
            <AdminTable
              headers = {["Soru", "0", "1", "2", "3", "4", "5"]}
              questions = {[
                "1.Hayatıma verdiğim değer arttı",
                "2.Hayatımın kıymetini anladım",
                "3.Yeni ilgi alanları geliştirdim.",
                "4.Kendime güvenim arttı.",
                "5.Manevi konuları daha iyi anladım",
                "6.Zor zamanlarda başkalarına güvenebileceğimi anladım.",
                "7.Hayatıma yeni bir yön verdim",
                "8.Kendimi diğer insanlara daha yakın hissetmeye başladım.",
                "9.Duygularımı ifade etme isteğim arttı.",
                "10.Zorluklarla başa çıkabileceğimi anladım.",
                "11.Hayatımı daha iyi şeyler yaparak geçirebileceğimi anladım.",
                "12.Olayları olduğu gibi kabullenmeyi öğrendim.",
                "13.Yaşadığım her günün değerini anladım.",
                "14.Yaşadığım stresten sonra benim için yeni fırsatlar doğdu.",
                "15.Başkalarına karşı şefkat hislerim arttı.",
                "16.İnsan ilişkilerimde Daha fazla gayret göstermeye başladım.",
                "17. Değişmesi gereken şeyleri geliştirmek için daha fazla gayret göstermeye başladım.",
                "18.Dini inancım daha da güçlendi.",
                "19.Düşündüğümden daha güçlü olduğumu anladım",
                "20.İnsanların ne kadar iyi olduğu konusunda çok şey öğrendim.",
                "21.Başkalarına ihtiyacım olabileceğini öğrendim.",
              ]}
              answers={answerstsgo}
              itemPerPage={3}
              testName={"Tsgo Ölçeği"}
            />
            <AdminTable
              headers = {["Soru", "0", "1", "2", "3", "4", "5"]}
              questions = {[
                "1.Hayatıma verdiğim değer arttı",
                "2.Hayatımın kıymetini anladım",
                "3.Yeni ilgi alanları geliştirdim.",
                "4.Kendime güvenim arttı.",
                "5.Manevi konuları daha iyi anladım",
                "6.Zor zamanlarda başkalarına güvenebileceğimi anladım.",
                "7.Hayatıma yeni bir yön verdim",
                "8.Kendimi diğer insanlara daha yakın hissetmeye başladım.",
                "9.Duygularımı ifade etme isteğim arttı.",
                "10.Zorluklarla başa çıkabileceğimi anladım.",
                "11.Hayatımı daha iyi şeyler yaparak geçirebileceğimi anladım.",
                "12.Olayları olduğu gibi kabullenmeyi öğrendim.",
                "13.Yaşadığım her günün değerini anladım.",
                "14.Yaşadığım stresten sonra benim için yeni fırsatlar doğdu.",
                "15.Başkalarına karşı şefkat hislerim arttı.",
                "16.İnsan ilişkilerimde Daha fazla gayret göstermeye başladım.",
                "17. Değişmesi gereken şeyleri geliştirmek için daha fazla gayret göstermeye başladım.",
                "18.Dini inancım daha da güçlendi.",
                "19.Düşündüğümden daha güçlü olduğumu anladım",
                "20.İnsanların ne kadar iyi olduğu konusunda çok şey öğrendim.",
                "21.Başkalarına ihtiyacım olabileceğini öğrendim.",
              ]}
              answers={answerstsgo}
              itemPerPage={3}
              testName={"Tsgo Ölçeği"}
            />
            </div>
            </div>
            
          )}
         {showTable && option == "F" && (
          <>
            <div className="admincontent">
              <form className="register-form" >
                <div className="admin-container">
                  <div className="form-column">
      
                    <div className="form-group">
                      <label htmlFor="age">Yaşınız:</label>
                      <input
                        type="number"
                        id="age"
                        name="age"
                        value= "24"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="gender">Cinsiyetiniz:</label>
                      <select
                        id="gender"
                        name="gender"
                      >
                        <option value="Kadın">Kadın</option>
                       
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="marial_Status">Medeni Haliniz:</label>
                      <select
                        id="marial_Status"
                        name="marial_Status"
                      >
                        <option value="Bekar">Bekar</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="education_Field">
                        Eğitim gördüğünüz bölümü:
                      </label>
                      <select
                        id="education_Field"
                        name="education_Field"
                   
                      >
                        <option value="Diş Hekimliği">Diş Hekimliği</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="education_Level">
                        Eğitim gördüğünüz sınıf düzeyini:
                      </label>
                      <select
                        id="education_Level"
                        name="education_Level"
                      >
                        <option value="3. Sınıf">3. Sınıf</option>
                      </select>
                    </div>
      
                    <div className="form-group">
                      <label htmlFor="longest_Residence">
                        En uzun süre yaşadığınız yer:
                      </label>
                      <select
                        id="longest_Residence"
                        name="longest_Residence"
                      >
                        <option value="Büyükşehir">Büyükşehir</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="monthly_Income">
                        AYLIK (bireysel) gelir düzeyiniz:
                      </label>
                      <select
                        id="monthly_Income"
                        name="monthly_Income"
                      >
                        <option value="15.001-30.000">15.001-30.000</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-column">
                    
                    <div className="form-group">
                      <label htmlFor="chronic_Condition">
                        Fiziksel bir rahatsızlığınız (kronik hastalığınız) var mı?
                      </label>
                      <select
                        id="chronic_Condition"
                        name="chronic_Condition"
                      >
                        <option value="true">Evet</option>
                      </select>
            
                        <input
                          type="text"
                          id="Chronic_Condition_Name"
                          name="Chronic_Condition_Name"
                        value= "Bel Fıtığı"
                        />
                    
                    </div>
                    <div class="form-group">
                      <label htmlFor="Chronic_Condition_Med">
                        Fiziksel rahatsızlığınız (kronik hastalık gibi) sebebi ile
                        düzenli ilaç kullanıyor musunuz?
                      </label>
                      <select
                        id="Chronic_Condition_Med"
                        name="Chronic_Condition_Med"
                      >
                        <option value="true">Evet</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label htmlFor="psychological_Condition">
                        Doktor tarafından tanı konulan psikolojik/psikiyatrik bir
                        rahatsızlığınız var mı?
                      </label>
                      <select
                        id="psychological_Condition"
                        name="psychological_Condition"
                     
                      >
                        <option value="true">Evet</option>
                      </select>
                    
                        <input
                          type="text"
                          id="psychological_Condition_Med"
                          name="psychological_Condition_Med"
                          value= "Major Depresyon"
                        />
                    
                    </div>
                    <div class="form-group">
                      <label htmlFor="psychological_Condition_Med">
                        Bu tanı sebebiyle ilaç kullanıyor musunuz?
                      </label>
                      <select
                        id="psychological_Condition_Med"
                        name="psychological_Condition_Med"
                      >
                        <option value="Evet">Evet</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label htmlFor="receiving_Psycho_Treatment">
                        Şu anda herhangi bir yöntem ile psikolojik tedavi alıyor
                        musunuz?
                      </label>
                      <select
                        id="receiving_Psycho_Treatment"
                        name="receiving_Psycho_Treatment"
                      >
                        <option value="Evet">Evet</option>
                      </select>
                    </div>
                 
                  </div>
                </div>
              </form>
            </div>
          </>
            
          )} 
        </div>
        
      </div>
    </div>
  );
};

export default AdminPage;
